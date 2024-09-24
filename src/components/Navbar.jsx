import React from 'react'
import NavHome from '../assets/nav-home.svg'
import NavNetwork from '../assets/nav-network.svg'
import NavMessaging from '../assets/nav-messaging.svg'
import NavNotifications from '../assets/nav-notifications.svg'
import NavWork from '../assets/nav-work.svg'

function Navbar() {
    const navItems = [
        { 
            label: 'Home',
            icon: <img src={NavHome} alt="Home" />
        },
        { 
            label: 'Network',
            icon: <img src={NavNetwork } alt=""  />
        },
        { 
            label: 'Posts',
            icon: <img src={NavMessaging} alt="" /> // Assuming a placeholder icon
        },
        { 
            label: 'Notifications',
            icon: <img src={NavNotifications} alt=""  />
        },
        { 
            label: 'Jobs',
            icon: <img src={NavWork} alt=""  />
        }
        // Add more icons here if needed
    ];

    return (
        <>
            <footer className="sm:hidden fixed left-0 bottom-0 w-full">
                <div className='nav-bar container flex jutify w-full p-4 bg-white'>
                    <div className='inner-container flex justify-evenly w-full items-center'>
                        {navItems.map((item, index) => (
                            <div key={index} className='nav-item flex flex-col justify-center items-center'>
                                <div className='icon'>{item.icon}</div>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Navbar;