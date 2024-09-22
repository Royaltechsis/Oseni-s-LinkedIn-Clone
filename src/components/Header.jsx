
function Header() {

    const navItems = [
        { label: 'Home'},
        { label: 'Network'},
        { label: 'Posts'},
        { label: 'Notifications'},
        { label: 'Jobs'}
        // Add more icons here if needed
    ];

    return (
        <>
        <div className='flex w-full bg-gray-100'>
            <div className="header flex items-center gap-8 w-full h-16  px-4">
                <div className="flex items-center">
                    <div className="icon">
                        < img src="../assets/user.svg"/>
                    </div>
                </div>
                <div className="searchbar flex items-center space-x-2 w-9/12">
                    <input
                        type="search"
                        placeholder="Search"
                        className="border rounded-lg px-3 py-1  focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-500 w-full sm:w-56"
                    />
                    
                </div>
                <div className="icon">
                       <img src= "../assets/search-icon.svg"/>
                </div>
            </div>
            <div>
                <div className='nav-bar container sm:flex jutify w-full p-4 hidden '>
                    <div className='inner-container flex justify-evenly w-full items-center gap-4'>
                        {navItems.map((item, index) => (
                            <div key={index} className='nav-item'>
                                {/* <div className='icon'>{item.icon}</div> */}
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
