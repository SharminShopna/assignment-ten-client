import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
        <div>
           <nav className="mx-auto my-6">
            <Header></Header>
            </nav> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;