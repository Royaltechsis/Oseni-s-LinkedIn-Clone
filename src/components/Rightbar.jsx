// import { Link } from "react-router-dom"

function Rightbar() {

    function RightbarTop() {
        return (
            <>
                <div className="card shadow-lg border border-gray-500 rounded-md">
                    <div className="inner-card flex justify-center flex-col">
                        <div className="container flex flex-col justify-center items-center gap-2 p-7">
                            <div></div>
                            <h1 className="text-black text-l font-bold">Welcome back Tech Sis</h1>
                            <a href="\" className="text-blue-400">add a photo</a>
                        </div>
                        <hr />
                        <div className="container flex p-3 justify-between items-center">
                            <span>
                                <h3 className="text-gray-400">Connections</h3>
                                <h3 className="capitalize font-bold">grow your network</h3>
                            </span>
                            <span>
                                hi
                            </span>
                        </div>
                        <hr />
                        <div className="container  flex p-3 justify-start items-center">
                            <span></span>
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
                                hi
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
            <div className="rightbar sm:w-1/4 ">
                <div className=" p-4  flex flex-col gap-4">
                    <RightbarTop />
                    <RightbarBottom />
                </div>
            </div>
        </>
    );
}

export default Rightbar