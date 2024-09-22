

function Article(){
    return (
        <>
            <div>
                <div className="shadow-md items-center justify-center  flex flex-col  ">
                    <div className="inner-container p-4 flex flex-col  justify-center gap-3">
                        <div className="gap-3 flex items-center ">
                            <span>user</span>
                            <div>
                                <h5 className="font-bold capitalize text">name/title</h5>
                                <h6 className="text-xs font-semibold text-gray-400 capitalize">info</h6>
                                <time datetime='' className="text-xs font-semibold text-gray-400 capitalize">time</time>
                            </div>
                        </div>
                        <div className="desc">
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo est porro eveniet similique delectus beatae accusamus quidem rem quia ipsa.</p>
                        </div>

                        <div className="image">
                            image
                        </div>
                        <div className="reaction">5likes</div>
                        <div className="actions w-full  flex justify-between ">
                            <button className="text-gray-500 font-semibold capitalize"><span>like</span></button>
                            <button className="text-gray-500 font-semibold capitalize"><span>comment</span></button>
                            <button className="text-gray-500 font-semibold capitalize"><span>repost</span></button>
                            <button className="text-gray-500 font-semibold capitalize"><span>repost</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Article