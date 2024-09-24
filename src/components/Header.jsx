import React from 'react'
import NavHome from '../assets/nav-home.svg'
import NavNetwork from '../assets/nav-network.svg'
import NavMessaging from '../assets/nav-messaging.svg'
import NavNotifications from '../assets/nav-notifications.svg'
import NavWork from '../assets/nav-work.svg'
import SearchIcon from '../assets/search-icon.svg'
import LinkedinSmall from '../assets/linkedin.png'
import User from '../assets/user.svg'
import Jobs from '../assets/nav-jobs.svg';


function Header() {

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
            icon: <img src={Jobs} alt=""  />
        },
        { 
            label: 'User',
            icon: <img src={User} alt=""  />
        },
        { 
            label: 'Work',
            icon: <img src={NavWork} alt=""  />
        }
        // Add more icons here if needed
    ];

    return (
        <>
        <div className='flex w-full bg-white items-center justify-center'>
           <div className='flex  sm:w-11/12 w-full'>
           <div className="header flex items-center gap-8 w-full  h-16  px-4">
                <div className="flex items-center">
                    <div className="icon">
                        < img src={LinkedinSmall}/>
                    </div>
                </div>
                <div className="searchbar flex items-center space-x-2 w-11/12 border rounded-lg p-4 py-1  focus:outline-none focus:ring-2  bg-blue-100  sm:w-56 ">
                    <img src={SearchIcon} alt="" className='absolute' />
                    <input
                        type="search"
                        placeholder="Search"
                        className="border  p-4 py-1  focus:outline-none   bg-blue-100 w-full border-none "
                    />
                    
                </div>
                
            </div>
            <div>
                <div className='nav-bar container sm:flex jutify w-full p-4 hidden '>
                    <div className='inner-container flex justify-evenly w-full items-center gap-4'>
                        {navItems.map((item, index) => (
                            <div key={index} className='nav-item flex justify-center items-center flex-col hover:border-b-2 border-b-black'>
                                 <div className='icon'>{item.icon}</div> 
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           </div>
        </div>
        </>
    )
}

export default Header;
