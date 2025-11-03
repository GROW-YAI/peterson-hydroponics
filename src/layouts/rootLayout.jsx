import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar/>
      {/* Add padding-top to account for fixed navbar height */}
      <div className="pt-24">
        <Outlet/>
      </div>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
};

export default RootLayout;



