import Plus from '../assets/plus-icon.svg'
import Widget from '../assets/widget-icon.svg'
import Item from '../assets/item-icon.svg'
import Cardbg from '../assets/card-bg.svg'
import Photo from '../assets/photo.svg'

function Rightbar() {

    function RightbarTop() {
        return (
            <>
                <div className="card shadow-lg border border-gray-500 rounded-md">
                    <div className="inner-card flex justify-center flex-col">
                        <div className="container flex flex-col justify-center items-center gap-2  ">
                            <div  className='flex flex-col items-center justify-center '>
                                <img src={Cardbg} alt="" className='' />
                                <img src={Photo} alt="" className='absolute bg-white p-2 rounded-full translate-y-10 ' />
                            </div>
                            <div className='flex flex-col mt-8 p-4 items-center justify-center'>
                                <h1 className="text-black text-l font-bold ">Welcome back Tech Sis</h1>
                                <a href="\" className="text-blue-400">add a photo</a>
                            </div>
                        </div>
                        <hr />
                        <div className="container flex p-3 justify-between items-center">
                            <span>
                                <h3 className="text-gray-400">Connections</h3>
                                <h3 className="capitalize font-bold">grow your network</h3>
                            </span>
                            <span>
                                <img src={Widget}alt="" />
                            </span>
                        </div>
                        <hr />
                        <div className="container  flex p-3  gap-2  justify-start items-center">
                            <img src={Item} alt="" />
                            <span className="capitalize font-bold"> my items</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    function RightbarBottom() {
        return (
            <>
                <div className="card shadow-lg border border-gray-400 rounded-md">
                    <div className="inner-card flex p-4 flex-col gap-2">
                        <div className="container flex justify-between  items-center">
                            <div className="container flex-col flex justify-between capitalize font-bold gap-1">
                                <h4>groups</h4>
                                <h4>events</h4>
                                <h4>follows hashtags</h4>
                            </div>
                            <div>
                                <img src={Plus} alt="" />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span className="text-gray-500">Discover More</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="rightbar sm:w-2/6 ">
                <div className="p-4 flex flex-col gap-4">
                    <RightbarTop />
                    <RightbarBottom />
                </div>
            </div>
        </>
    );
}

export default Rightbar