import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import error from '../assets/error1.png';

const Error = () => {


    return (
        <>
            <Helmet>
                <title>Error | Sport</title>
                <meta name="description" content="404 Error Page" />
            </Helmet>
            <div className="flex flex-col items-center justify-center h-screen space-y-6 my-12">
                <img src={error} alt="Error" className="h-full w-full" />
                <Link to="/"
                    
                    className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition duration-300"
                >
                    Go Back
                </Link>
            </div>
        </>
    );
};

export default Error;
