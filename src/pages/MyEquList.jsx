import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
// import emailjs from '@emailjs/browser';

const MyEquList = () => {
  const { user, isDarkMode } = useContext(AuthContext);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
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
    }
}, [user?.email]);

const handleDelete = (_id) => {
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://assignment-ten-server-lyart-beta.vercel.app/emailMass/${_id}`, {
              method: "DELETE",
          })
              .then((res) => res.json())
              .then((data) => {
                  if (data.deletedCount > 0) {
                      Swal.fire("Deleted!", "Your equipment card has been deleted.", "success");
                      setLists((prevLists) => prevLists.filter((list) => list._id !== _id));
                  } else {
                      throw new Error("Deletion failed");
                  }
              })
              .catch((error) => {
                  console.error("Error deleting item:", error);
                  Swal.fire("Error!", "Unable to delete item. Try again.", "error");
              });
      }
  });
};


  if (loading) {
    return <Loading />;
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
          <h2 className={`text-5xl text-blue-900 text-center font-semibold ${isDarkMode ? "text-white" : ""}`}>
            My Equipment List
          </h2>

          <div className="overflow-x-auto my-12">
            <table className={`table w-full ${isDarkMode ? "text-white" : ""}`}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Processing Days</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {lists.length > 0 ? (
                  lists.map((list) => (
                    <tr key={list._id}>
                      <td>
                        <img
                          src={list.image}
                          alt={list.name}
                          className="w-32 h-16 md:w-20 md:h-20 object-cover rounded-xl"
                        />
                      </td>
                      <td>{list.name}</td>
                      <td>{list.description}</td>
                      <td>${list.price}</td>
                      <td>{list.stock}</td>
                      <td>{list.processing}</td>
                      <td>
                        <span className="flex items-center text-yellow-500">
                          <span className="mr-2 text-gray-600">{list.rating}</span>
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
                      </td>
                      <td>
                        <div className="flex space-x-2">
                          <Link to={`/update/${list._id}`} className="btn bg-blue-900 text-white">
                            <GrUpdate size={20} />
                          </Link>
                          <button onClick={() => handleDelete(list._id)} className="btn bg-red-600 text-white">
                            <MdDelete size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-3xl text-red-700 font-semibold py-24 text-center">
                      No equipment found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyEquList;
