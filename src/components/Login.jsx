
function Login(props){
    return (
        <>
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-center items-center flex-col ">
                <header className="flex  w-full sm:w-11/12  justify-between items-center p-3">
                    <div className="brand">
                        <h1 className="text-2xl capitalize ">linkedin</h1>
                    </div>
                    <div className="buttons flex gap-2 capitalize">
                        <button className="font-bold text-gray-500  p-2">join now</button>
                        <button className="font-bold text-blue-500 border-blue-500 rounded-3xl border-2 p-2"> Sign up </button>
                    </div>
                </header>
                <div className="flex w-full h-max items-center justify-center">
                    <div className="inner-container p-4 items-center justify-center sm:flex-row flex-col flex sm:justify-between w-full">
                        <div className="flex flex-col gap-3 sm:m-10 ">
                            <div className=" flex  p-3"><h1 className="font-semibold capitalize text-2xl text-blue-500
                             text-center"> welcome to our proffesional community</h1> </div>
                            <div className="sm:hidden flex">image</div>
                            <div className="sign-in p-4 border-2 border-gray-400 rounded-full text-center text-gray-600 text-lg capitalize
                            ">sign in with google </div>
                        </div>
                        <div className="sm:flex hidden">
                            image
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login