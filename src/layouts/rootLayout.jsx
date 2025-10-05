import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar/>
      {/* Add padding-top to account for fixed navbar height */}
      <div className="pt-24">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
};

export default RootLayout;



