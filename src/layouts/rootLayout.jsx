import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

export default RootLayout;



