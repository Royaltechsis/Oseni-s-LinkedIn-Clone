import Header from './Header';
import Navbar from './Navbar';
import Rightbar from './Rightbar';
import Leftbar from './Leftbar';
import All from './All';

function Home(){
    return(
        <>
        <div className='flex  w-full items-center'>
            <div className="container flex flex-col h-screen w-full ">
                <Header/>
                <div className="middle-content w-full justify-center flex flex-col items-center ">
                    <div className='h-1/6 m-8'>
                        <span>
                            hiring in a hurry find talnted pros with upwork and keep business moving 
                        </span>
                    </div>
                    <div className="container flex a flex-col sm:flex-row w-full justify-center">
                        <Rightbar className="w-1/4 sm:"/>
                        <All className="w-2/4"/>
                        <Leftbar className="w-1/4"/>
                    </div>
                </div>

                <Navbar  className = 'sm:hidden justify-end fixed'/>
            </div>
        </div>
        </>
    )
}

export default Home