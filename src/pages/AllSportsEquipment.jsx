import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet";


const AllSportsEquipment = () => {
    const equipments = useLoaderData()
    console.log(equipments)
    const [sort,setSort] = useState(equipments)
    // const{_id,name,image,category,description} = equipments;
    const handleSorts = () =>{
      fetch('https://assignment-ten-server-lyart-beta.vercel.app/sortData')
      .then(res => res.json())
      .then(data =>{
        setSort(data)
      })
    }
    return (
        <>
        <Helmet>
        <title>AllSportEqu | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
         <div className="w-11/12 mx-auto">
         <nav className="my-6">
            <Header></Header>
         </nav>
            <div className="text-center space-y-6 my-8 mt-32">
              <h2 className="text-5xl font-semibold text-blue-900 ">All Sports Equipment and Accessories</h2>           
              </div>
              <div className=" flex justify-end item-end ">
                <button onClick={handleSorts} className="btn bg-blue-900 text-white">Sort By Ascending</button>
              </div>
              <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Image & Name</th>
        <th>Category</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {
        sort.map((equipment,index) =><tr key={equipment._id}>
              <th>{index + 1}</th>        
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={equipment.image}
                        alt={equipment.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{equipment.name}</div>             
                  </div>
                </div>
              </td>
              <td>{equipment.category}</td>
              <td>${equipment.price}</td>
              
              <th>
                <Link to={`/equipment/${equipment._id}`} className="btn btn-xs bg-blue-900 text-white">details</Link>
              </th>
            </tr>)
       }
      
      
    </tbody>
    
  </table>
</div>
            </div> 
            <Footer></Footer>
        </>
    );
};

export default AllSportsEquipment;
