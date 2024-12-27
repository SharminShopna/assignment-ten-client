import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";


const HomeLayout = () => {
    
    return (
        <>
        <Helmet>
        <title>Home | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
           <nav className="w-11/12 mx-auto my-6">
             <Header></Header>
            </nav> 
            
            <Outlet></Outlet>
            
            <Footer></Footer>
            
        </>
    );
};

export default HomeLayout;