import Header from './Header';
import Navbar from './Navbar';
import Rightbar from './Rightbar';
import Leftbar from './Leftbar';
import All from './All';

function Home() {
  return (
    <div className='flex w-full items-center'>
      <div className='container flex flex-col h-screen w-full'>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className='middle-content w-full justify-center flex flex-col items-center'>
          {/* Announcement/Notice */}
          <div className='h-1/6 m-8'>
            <span>
              Hiring in a hurry? Find talented pros with Upwork and keep business moving!
            </span>
          </div>

          {/* Main Content Section */}
          <div className='container flex flex-col sm:flex-row w-full justify-center'>
            {/* Right Sidebar */}
            <Rightbar className='w-1/4' />

            {/* Main Content Area */}
            <All className='w-2/4' />

            {/* Left Sidebar */}
            <Leftbar className='w-1/4' />
          </div>
        </div>

        {/* Mobile Navbar */}
        <Navbar className='sm:hidden justify-end fixed' />
      </div>
    </div>
  );
}

export default Home;
