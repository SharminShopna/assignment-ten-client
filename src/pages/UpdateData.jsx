

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

 import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const UpdateData = () => {
   const {id} = useParams()
   console.log(id)
   const[update,setUpdate] = useState([])
   useEffect(()=>{
      fetch(`https://assignment-ten-server-lyart-beta.vercel.app/equipmentAll`)
      .then(res => res.json())
      .then(data => {
         const equipments = data.find(updateId=>updateId._id===id)
         setUpdate(equipments)
      })
      .catch((error) =>{
         console.log(("Error fetching data:", error))
      })
   },[id])
   if (!update) {
      return (<Loading></Loading>); 
   }
   console.log(update)

     const {user} = useContext(AuthContext)
     const handleUpdate = event =>{
         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const image = form.image.value;
         const category = form.category.value;
         const description = form.description.value;
         const price = form.price.value;
         const rating = form.rating.value;
         const customization = form.customization.value;
         const processing = form.processing.value;
         const stock = form.stock.value;
         const userName = form.userName.value;       
         const userEmail = form.userEmail.value;
         const updateEquipment = {name,image,category,description,price,rating,customization,processing,stock,userName,userEmail}
         // console.log(updateEquipment)
     
         // server site update equipment:

         fetch(`https://assignment-ten-server-lyart-beta.vercel.app/equipmentAll/${id}`,{
            method: 'PATCH',
            headers: {
               'content-type': 'application/json',
            },
            body: JSON.stringify(updateEquipment),
         })
         .then((res) => res.json())
            
            .then((data) => {
               if (data.modifiedCount) {
                  Swal.fire({
                     title: "Do you want to update the changes?",
                     showDenyButton: true,
                     showCancelButton: true,
                     confirmButtonText: "Update",
                     denyButtonText: `Don't update`
                   })
                   .then(result=>{
                     if (result.isConfirmed) {
                        Swal.fire("Update!", "", "success");
                      } else if (result.isDenied) {
                        Swal.fire("Changes are not update", "", "info");
                      }
                   })
                }
       
           
          })
          .catch((error) => {
            console.log("Error updating equipment:", error);
            Swal.fire({
               icon: "error",
               title: "Oops...",
               text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
             });
            
          });
     }
   return (
      <>
      <Helmet>
        <title>UpdateData | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <nav className="w-11/12 mx-auto py-6">
         <Header></Header>
      </nav>
      <div className="bg-blue-50 p-24 mt-20">
             <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-8">Update Equipment</h2>
             <form onSubmit={handleUpdate}>
                 {/* item name and image row */}
                 <div className="md:flex md-8">
                 <div className="form-control md:w-1/2">
                   <label className="label">
                      <span className="label-text">Item Name</span>
                   </label>
                   <input type="text" name="name" defaultValue={update.name} placeholder="Item name" className="input input-bordered w-full" required />
                </div>
                <div className="form-control md:w-1/2 md:ml-6">
                   <label className="label">
                      <span className="label-text">Image URL</span>
                   </label>
                   <input type="text" name="image" defaultValue={update.image} placeholder="Image URL" className="input input-bordered w-full " required />
                </div>
             </div>
             {/* category name and Description row */}
             <div className="md:flex md-8">
                 <div className="form-control md:w-1/2">
                   <label className="label">
                      <span className="label-text">Category Name</span>
                   </label>
                   <input type="text" name="category" defaultValue={update.category} placeholder="Category name" className="input input-bordered w-full" required />
                </div>
                <div className="form-control md:w-1/2 md:ml-6">
                   <label className="label">
                      <span className="label-text">Description</span>
                   </label>
                   <input type="text" name="description" defaultValue={update.description} placeholder="Description" className="input input-bordered w-full " required />
                </div>
             </div>
             {/* Price and Rating row */}
             <div className="md:flex md-8">
                 <div className="form-control md:w-1/2">
                   <label className="label">
                      <span className="label-text">Price</span>
                   </label>
                   <input type="text" name="price" defaultValue={update.price} placeholder="Price" className="input input-bordered w-full" required />
                </div>
                <div className="form-control md:w-1/2 md:ml-6">
                   <label className="label">
                      <span className="label-text">Rating</span>
                   </label>
                   <input type="text" name="rating" defaultValue={update.rating} placeholder="Rating" className="input input-bordered w-full " required />
                </div>
             </div>
             {/* Customization and Processing Time row */}
             <div className="md:flex md-8">
                 <div className="form-control md:w-1/2">
                   <label className="label">
                      <span className="label-text">Customization</span>
                   </label>
                   <input type="text" name="customization" defaultValue={update.customization} placeholder="Customization" className="input input-bordered w-full" required />
                </div>
                <div className="form-control md:w-1/2 md:ml-6">
                   <label className="label">
                      <span className="label-text">Processing Time</span>
                   </label>
                   <input type="text" name="processing" defaultValue={update.processing} placeholder="Processing Time" className="input input-bordered w-full " required />
                </div>
             </div>
             {/* Stock Status and User Name row */}
             <div className="md:flex md-8">
                 <div className="form-control md:w-1/2">
                   <label className="label">
                      <span className="label-text">Stock Status</span>
                   </label>
                   <input type="text" name="stock" defaultValue={update.stock} placeholder="Stock Status" className="input input-bordered w-full" required />
                </div>
                <div className="form-control md:w-1/2 md:ml-6">
                   <label className="label">
                      <span className="label-text">User Name</span>
                   </label>
                   <input type="text" name="userName" value={user?.displayName} placeholder="User Name" className="input input-bordered w-full " required />
                </div>
             </div>
                {/* User Email row */}
                <div className="md:flex md-8">
                
                <div className="form-control md:w-1/2">
                   <label className="label">
                      <span className="label-text">User Email</span>
                   </label>
                   <input type="text" name="userEmail" value={user?.email} placeholder="User Name" className="input input-bordered w-full " required />
                </div>
             </div>
             
             <input type="submit" value="Update  Equipment" className="btn bg-blue-900 text-white mt-8 w-full text-lg" />
             
            <p className="text-center font-semibold py-3">Do you want to go?{" "} <Link to={"/emailMass"} className="text-red-600">My Equipment</Link></p>
             
             
            
             </form>
         </div>
         <Footer></Footer>
         </>
   );
};

export default UpdateData;