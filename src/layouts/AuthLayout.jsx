import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
        <div>
           <nav className="w-11/12  mx-auto my-6">
            <Header></Header>
            </nav> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;