import React, { useState } from 'react';

export function Note({ title, description }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleShowMore = () => {
        setIsPopupOpen(true);
    };

    return (
        <div className="bg-yellow-300 p-4 rounded-lg shadow-lg w-64 max-h-48 overflow-hidden">
            <div className="text-2xl px-2 font-bold underline mb-2 overflow-hidden">
                {title.length > 10 ? `${title.substring(0, 10)}...` : title}
            </div>

            <div className="text-lg px-2 overflow-hidden">
                {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                {(description.length > 100 || title.length > 10) && (
                    <button
                        className="text-blue-500 underline ml-2"
                        onClick={handleShowMore}
                    >
                        Show More
                    </button>
                )}
            </div>
            {isPopupOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-2xl mb-4">{title}</h2>
                        <div className="text-lg">
                            {description}
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                onClick={() => setIsPopupOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
