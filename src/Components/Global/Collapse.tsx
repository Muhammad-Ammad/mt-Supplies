import { useState } from 'react'

const Collapse = () => {
    const [isOpen, setIsOpen] = useState<string>('');

    const toggleCollapse = (id: string) => {
        setIsOpen(isOpen === id ? '' : id);
    };

    const data = [
        {
            id: '1',
            title: 'Product Details',
        },
        {
            id: '2',
            title: 'Delivery and Returns'
        },

    ];
    return (

        <div className="w-full max-w-md mt-10">
            {/* Header */}
            {data && data.map((item, index) => (
                <div key={index} >
                    <div
                        id={item?.id}
                        className={`flex justify-between items-center text-blue-500 px-4 py-2 cursor-pointer ${isOpen === '' ? 'border-b-2' : ''}`}
                        onClick={() => toggleCollapse(item?.id)}
                    >
                        <h2 className="text-lg font-semibold">{item?.title}</h2>
                        <span className="transform transition-transform duration-300">
                            {isOpen === item?.id ? (
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            ) : (
                                <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            )}
                        </span>
                    </div>

                    <div
                        id={item?.id}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen === item?.id ? 'max-h-screen border-b-2' : 'max-h-0'}`}
                    >
                        {isOpen === '1' ? (
                            <div className="p-4 bg-gray-100">
                                <p>
                                    <ul>
                                        <li className='font-medium' >
                                            COLOUR: <span className='text-gray-500' >Black</span>
                                        </li>
                                        <li className='font-medium' >
                                            MATERIAL: <span className='text-gray-500' >Recycled Paper</span>
                                        </li>
                                        <li className='font-medium' >
                                            DIMENSIONS: <span className='text-gray-500' >16 (H) x 20.5 (W) x 5.5 (D) cm</span>
                                        </li>
                                        <li className='font-medium' >
                                            PACKAGE CONTENTS: <span className='text-gray-500' >1 Pencil</span>
                                        </li>
                                        <li className='font-medium' >
                                            ORIGIN: <span className='text-gray-500' >Designed and Made in UK</span>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        ) : (
                            <div className="p-4 bg-gray-100">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Collapse;