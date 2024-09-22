import Article from "./Article";

function All(){
    return (
        <>
            <div className="sm:w-2/4  p-4 flex flex-col gap-2 ">
                <div className="container items-center justify-center shadow-md border border-gray-300 rounded-lg p-5">
                    <div className="flex items-center justify-center">
                        <span>share</span>
                    </div>
                    <div className="post w-full flex">
                        <div className=" flex gap-4 w-full p-2 items-center">
                            <div className="user-image">hi</div>
                            <input 
                                type="text" 
                                name="" id="" 
                                placeholder="start a post "
                                className="p-2 border border-gray-400 w-full rounded-3xl"
                            />
                        </div>
                    </div>
                    <div className="w-full flex  items-center justify-center">
                        <div className="w-10/12 flex justify-between">
                            <span>photo</span>
                            <span>photo</span>
                            <span>photo</span>
                            <span>photo</span>
                        </div>
                    </div>
                </div>
                <div >
                    <Article/>
                </div>
            </div>
        </>
    )
}

export default All;