import React, { useEffect, useState } from 'react'

export default function Search({ onSearch }) {

    const [city,setCity] = useState('')

    const handleSearchClick = () => {
        onSearch(city);
    };

    

    return (
        <div className="max-w-xl w-full mx-auto p-4">
            <div className="flex items-center border rounded p-2">
                <input
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    type="text"
                    placeholder="Search weather by city..."
                    className="outline-none flex-1 px-2 py-2"
                />
                <svg
                    onClick={handleSearchClick}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                    />
                </svg>
            </div>
        </div>
    )
}
