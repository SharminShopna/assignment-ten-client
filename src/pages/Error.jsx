import { Helmet } from "react-helmet";


const Error = () => {
    return (
        <>
        <Helmet>
        <title>Error | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="p-64 space-y-3">
            <h2 className="text-7xl text-red-700 text-center font-bold">404</h2>
            <p className="text-3xl text-center">Non-existing Routes.</p>
        </div>
        </>
    );
};

export default Error;