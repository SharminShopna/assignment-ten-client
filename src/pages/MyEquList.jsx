import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyEquList = () => {
  const { user,isDarkMode } = useContext(AuthContext);
  const [lists, setLists] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(`https://assignment-ten-server-lyart-beta.vercel.app/emailMass?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });
  }, [user.email]);

  
  const handleDelete = (_id) =>{
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        

       fetch(`https://assignment-ten-server-lyart-beta.vercel.app/emailMass/${_id}`,{
        method:'DELETE',
       })
       .then(res => {
        console.log(res); 
        return res.json();
      })
       .then(data =>{
        console.log(data)
        if(data.deletedCount>0 ){
                Swal.fire({
             title: "Deleted!",
             text: "Your equipment card has been deleted.",
             icon: "success"
           });
          
          setLists((prevLists) => prevLists.filter((list) => list._id !== _id));
        }
       })
       .catch(error => {
        console.error("Error deleting the item:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while deleting.",
          icon: "error",
        });
      });

        }
      });
  };

  
  if (loading) {
    return (<Loading></Loading>);
  }

  return (
    <>
    <Helmet>
        <title>MyEquList | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="w-11/12 mx-auto">
        <nav className="my-6">
          <Header />
        </nav>
        <div className="mt-32">
          <h2 className={`text-5xl text-blue-900 text-center font-semibold ${isDarkMode?"text-white":""}`}>My Equipment List</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
            {
              lists.length > 0 ? ( 
                lists.map((list, idx) => (
                  <div key={idx} className={`card shadow-xl ${isDarkMode?"text-white":""}`}>
                    <figure>
                      <img
                        src={list.image}
                        alt={list.name}
                        className="h-72 w-full px-6 rounded-3xl"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Name: {list.name}</h2>
                      <p>Category: {list.category}</p>
                      <p>Description: {list.description}</p>
                      <p>Price: $ {list.price}</p>
                      <p>Customization: {list.customization}</p>
                      <p>Stock: {list.stock}</p>
                      <p>Processing: {list.processing} days</p>
                      <p>
                        <span className="flex items-center text-yellow-500">
                         <span className="mr-2 text-gray-600">Rating: {list.rating}</span>
                          {Array.from({ length: 5 }, (_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill={index < list.rating ? "currentColor" : "none"}
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
                        </span>
                      </p>
                      <div className="card-actions justify-start">
                        <Link to={`/update/${list._id}`} className="btn bg-blue-900 text-white">
                          Update
                        </Link>
                        <Link onClick={() => handleDelete(list._id)} className="btn bg-blue-900 text-900 text-white">Delete</Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-3xl text-red-700  font-semibold py-24">No equipment found.</p>
              )
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyEquList;
