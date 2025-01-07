import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllSportsEquipment = () => {
  const equipments = useLoaderData();
  console.log(equipments);
  const [sort, setSort] = useState(equipments);

  // Function to handle ascending sort
  const handleSortAscending = () => {
    const sorted = [...equipments].sort((a, b) => a.name.localeCompare(b.name));
    setSort(sorted);
  };

  // Function to handle descending sort
  const handleSortDescending = () => {
    const sorted = [...equipments].sort((a, b) => b.name.localeCompare(a.name));
    setSort(sorted);
  };

  return (
    <>
      <Helmet>
        <title>AllSportEqu | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="w-11/12 mx-auto">
        <nav className="my-6">
          <Header />
        </nav>
        <div className="text-center space-y-6 my-8 mt-32">
          <h2 className="text-5xl font-semibold text-blue-900">
            All Sports Equipment and Accessories
          </h2>
        </div>
        <div className="flex justify-end items-center gap-3 mb-6">
          <button
            onClick={handleSortAscending}
            className="btn bg-blue-900 text-white"
          >
            Sort Ascending
          </button>
          <button
            onClick={handleSortDescending}
            className="btn bg-blue-900 text-white"
          >
            Sort Descending
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sort.map((equipment) => (
            <div
              key={equipment._id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="card-image">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{equipment.name}</h3>
                <p className="text-gray-600">{equipment.category}</p>
                <p className="text-blue-900 font-semibold">${equipment.price}</p>
                <Link
                  to={`/equipment/${equipment._id}`}
                  className="btn btn-sm bg-blue-900 text-white mt-3"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllSportsEquipment;
