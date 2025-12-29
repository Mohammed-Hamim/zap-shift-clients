import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const FaQitem = ({ fAq }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border max-w-[600px] mx-auto  bg-white border-gray-200 rounded-lg overflow-hidden">
            {/* Question */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
                <span className="font-medium text-gray-800">
                    {fAq.question}
                </span>

                <FaChevronDown
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {/* Answer */}
            <div
                className={`px-5 overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
            >
                <p className="text-sm text-gray-600">
                    {fAq.answer}
                </p>
            </div>
        </div>
    );
};

export default FaQitem;