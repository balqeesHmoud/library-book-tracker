import React from "react";

export default function CarCard({ car, onUpdate, onDelete }) {
    return (
        <div className="car-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-4 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {car.brand} {car.model}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
                Price: ${car.price}
            </p>
            <div className="flex space-x-4">
                {onUpdate && (
                    <button
                        onClick={() => onUpdate(car.id)}
                        className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
                    >
                        Edit
                    </button>
                )}
                {onDelete && (
                    <button
                        onClick={() => onDelete(car.id)}
                        className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 transition-colors"
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}
