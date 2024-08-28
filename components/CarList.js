import { useContext, useState } from "react";
import useResource from "../hooks/useResource";
import { AuthContext } from "../context/auth";
import CarCard from "./CarCard";
import UpdateCar from "./UpdateCar";
import DeleteCar from "./DeleteCar";

export default function CarsList() {
    const { resource, isLoading, isError, updateResource, deleteResource } = useResource();
    const { tokens } = useContext(AuthContext);
    const [editingCar, setEditingCar] = useState(null);
    const [deletingCarId, setDeletingCarId] = useState(null);

    // Loading and error states
    if (isLoading) return <p>Loading cars...</p>;
    if (isError) return <p>Error loading cars.</p>;

    // Get the user's ID from the tokens
    const userId = tokens?.user_id;

    // Filter cars based on ownership
    const userCars = resource?.filter(car => car.buyer?.id === userId);
    const otherCars = resource?.filter(car => car.buyer?.id !== userId);

    // Handle car updates
    const handleUpdate = (carId) => {
        const carToUpdate = resource.find(car => car.id === carId);
        setEditingCar(carToUpdate);
    };

    // Handle car deletions
    const handleDelete = (carId) => {
        setDeletingCarId(carId);
    };

    // Close the update form modal
    const closeUpdateForm = () => {
        setEditingCar(null);
    };

    // Close the delete confirmation modal
    const closeDeleteConfirmation = () => {
        setDeletingCarId(null);
    };

    return (
        <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Your Cars</h2>
            <div className="cars-list grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {userCars?.length > 0 ? (
                    userCars.map(car => (
                        <CarCard
                            key={car.id}
                            car={car}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-700 dark:text-gray-300">No cars owned by you.</p>
                )}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">Other Cars</h2>
            <div className="cars-list grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {otherCars?.length > 0 ? (
                    otherCars.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-700 dark:text-gray-300">No cars owned by others.</p>
                )}
            </div>

            {editingCar && (
                <UpdateCar
                    car={editingCar}
                    onClose={closeUpdateForm}
                    updateResource={updateResource}
                />
            )}

            {deletingCarId && (
                <DeleteCar
                    carId={deletingCarId}
                    onClose={closeDeleteConfirmation}
                    deleteResource={deleteResource}
                />
            )}
        </div>
    );
}
