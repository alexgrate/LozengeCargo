import React, { useState } from "react";

const FaqItem = ({ item, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg shadow-sm">
        <button
            className="flex justify-between items-center w-full px-5 py-4 text-left text-gray-800 font-medium text-sm hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
        >
            <span>
            {index}. {item.question}
            </span>
            <span className="text-xl">{open ? "-" : "+"}</span>
        </button>

        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
            <div className="px-5 pb-4 text-gray-600 text-xs">{item.answer}</div>
        </div>
        </div>
    );
};

export default FaqItem;
