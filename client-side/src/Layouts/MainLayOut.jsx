import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {

  return (
    <div>

      <div  className='md:h-[74px] h-[80px]'>
       <Navbar />
      
      </div>
      {/* Main content with padding to avoid overlap */}
      <div className="min-h-[calc(100vh-232px)] container mx-auto ">
        <Outlet />
      </div>
      <div>
       <Footer />
 
      </div>
 
    </div>
  );
};

export default MainLayout;