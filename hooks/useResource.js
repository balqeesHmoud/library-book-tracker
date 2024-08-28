import { useContext } from "react";
import { AuthContext } from "../context/auth";
import useSWR, { mutate } from "swr";

const fetcher = async ([url, tokens], config) => {
    if (!tokens) return;
    const response = await fetch(url, config());
    if (!response.ok) throw new Error('Failed to fetch resource');
    return response.json();
};

export default function useResource() {
    const { tokens, logout } = useContext(AuthContext);
    const URL = `${process.env.NEXT_PUBLIC_URL}api/cars/`;

    const config = (method = 'GET', body = null) => ({
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens?.access}`,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    const handleError = (error) => {
        console.error(error);
        if (error.message.includes('Failed')) {
            logout();
        }
    };

    const { data, error } = useSWR([URL, tokens], fetcher);

    const createResource = async (newCar) => {
        try {
            const response = await fetch(URL, config('POST', newCar));
            if (!response.ok) throw new Error('Failed to create resource');
            const createdCar = await response.json();
            mutate([URL, tokens]);
            return createdCar;
        } catch (error) {
            handleError(error);
            throw error;
        }
    };

    const updateResource = async (id, updatedCar) => {
        try {
            const response = await fetch(`${URL}${id}/`, config('PUT', updatedCar));
            if (!response.ok) throw new Error('Failed to update resource');
            const updatedCar = await response.json();
            mutate([URL, tokens]);
            return updatedCar;
        } catch (error) {
            handleError(error);
            throw error;
        }
    };

    const deleteResource = async (id) => {
        try {
            const response = await fetch(`${URL}${id}/`, config('DELETE'));
            if (!response.ok) throw new Error('Failed to delete resource');
            mutate([URL, tokens]);
        } catch (error) {
            handleError(error);
            throw error;
        }
    };

    return {
        resource: data,
        isLoading: !error && !data,
        isError: !!error,
        createResource,
        updateResource,
        deleteResource,
    };
}
