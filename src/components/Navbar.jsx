function Navbar() {
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
            <footer className="sm:hidden fixed left-0 bottom-0 w-full">
                <div className='nav-bar container flex jutify w-full p-4'>
                    <div className='inner-container flex justify-evenly w-full items-center'>
                        {navItems.map((item, index) => (
                            <div key={index} className='nav-item'>
                                {/* <div className='icon'>{item.icon}</div> */}
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