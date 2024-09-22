import React from 'react';

function FeedItem({ icon, label }) {
    return (
        <div className="div flex items-center space-x-2 p-2">
            <div className="icone border rounded-full p-2 border-gray-400">{icon}</div>
            <div>
                <h2 className='font-bold'>{label}</h2>
                <button className="follow-btn  text-gray-600 border-2 border-gray-600 rounded px-2 py-1 rounded-xl">Follow</button>
            </div>
        </div>
    );
}

function Leftbar() {
    const items = [
        {
            icon: '🌐',  // Add the icon as text or JSX
            label: 'LinkedIn'
        },
        {
            icon: '📹',  // Add a valid icon or JSX
            label: 'Video',
        }
    ];

    return (
        <>
            <div className='sm:w-1/4 w-full'>
                <div className="  p-4 flex w-full">
                    <div className="card shadow-lg border border-gray-500 rounded-md w-full p-4">
                        <h1 className="font-bold text text-gray-400">Add To Your Feed</h1>
                        <div className="mt-4">
                            {items.map((item, index) => (
                                <FeedItem 
                                    icon={item.icon} 
                                    label={item.label} 
                                    key={index} 
                                />
                            ))}
                        </div>
                        <a href="" className='text-blue-500'>view all recommendation </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Leftbar;
