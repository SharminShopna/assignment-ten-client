import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { MdOutlineCategory } from "react-icons/md";
import { FaAudioDescription } from "react-icons/fa6";

const EquipmentDetails = () => {
  const equipments = useLoaderData();
  
  console.log(equipments)
   const{name,image,category,description,price,rating,customization,processing,stock} = equipments;

  return (
    <>
    <Helmet>
        <title>EquDetails | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="w-11/12 mx-auto">
        <nav className="my-6">
          <Header></Header>
        </nav>
        <div className="card md:card-side bg-base-100 shadow-xl my-32">
          <figure>
            <img src={image} alt={name} className="h-72 w-full px-6 rounded-3xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="flex gap-1 text-lg items-center text-center"><MdOutlineCategory /> {category}</p>
            <p className="flex item-center gap-1"><FaAudioDescription size={32} /> {description}</p>
            <p className="text-lg font-bold"> $ {price}</p>
            <p>Customization: {customization}</p>
            <p>Stock: {stock}</p>
            <p>Processing: {processing}</p>
            <p><span className="flex items-center text-yellow-500">
                   <span className="mr-2 text-gray-600"> {rating}</span>
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={index < rating ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 17.75l-3.71 2.05 1.05-3.66-2.89-2.18 3.62-.29L12 7.75l1.93 3.91 3.62.29-2.89 2.18 1.05 3.66L12 17.75z"
                        />
                      </svg>
                    ))}
                  </span></p>
            <div className="card-actions justify-start">
              <Link to={"/allData"} className="btn bg-blue-900 text-white w-72">Go Back</Link>
            </div>
          </div>
        </div>
        </div> 
     <Footer></Footer>
    </>
  );
};

export default EquipmentDetails;
