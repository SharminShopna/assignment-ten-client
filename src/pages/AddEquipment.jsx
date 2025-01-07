import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";


const AddEquipment = () => {
    const {user} = useContext(AuthContext)
    const handleAddEquipment = event =>{
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
        const newEquipment = {name,image,category,description,price,rating,customization,processing,stock,userName,userEmail}
        console.log(newEquipment)

        fetch('https://assignment-ten-server-lyart-beta.vercel.app/equipment',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Equipment Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
      <>
      <Helmet>
        <title>AddEqu | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
       <nav className="w-full flex justify-center">
         <Header></Header>
       </nav>
        <div className="bg-blue-50 p-24 mt-28">
            <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-8">Add Equipment</h2>
            <form onSubmit={handleAddEquipment}>
                {/* item name and image row */}
                <div className="md:flex md-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Item Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Item name" className="input input-bordered w-full" required />
               </div>
               <div className="form-control md:w-1/2 md:ml-6">
                  <label className="label">
                     <span className="label-text">Image URL</span>
                  </label>
                  <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full " required />
               </div>
            </div>
            {/* category name and Description row */}
            <div className="md:flex md-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Category Name</span>
                  </label>
                  <input type="text" name="category" placeholder="Category name" className="input input-bordered w-full" required />
               </div>
               <div className="form-control md:w-1/2 md:ml-6">
                  <label className="label">
                     <span className="label-text">Description</span>
                  </label>
                  <input type="text" name="description" placeholder="Description" className="input input-bordered w-full " required />
               </div>
            </div>
            {/* Price and Rating row */}
            <div className="md:flex md-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Price</span>
                  </label>
                  <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
               </div>
               <div className="form-control md:w-1/2 md:ml-6">
                  <label className="label">
                     <span className="label-text">Rating</span>
                  </label>
                  <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full " required />
               </div>
            </div>
            {/* Customization and Processing Time row */}
            <div className="md:flex md-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Customization</span>
                  </label>
                  <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full" required />
               </div>
               <div className="form-control md:w-1/2 md:ml-6">
                  <label className="label">
                     <span className="label-text">Processing Time</span>
                  </label>
                  <input type="text" name="processing" placeholder="Processing Time" className="input input-bordered w-full " required />
               </div>
            </div>
            {/* Stock Status and User Name row */}
            <div className="md:flex md-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Stock Status</span>
                  </label>
                  <input type="text" name="stock" placeholder="Stock Status" className="input input-bordered w-full" required />
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
             
            <input type="submit" value="Add  Equipment" className="btn bg-blue-900 text-white mt-8 w-full text-lg" data-tooltip-id="my-tooltip"
                data-tooltip-content="Your information will be saved in the database" />
            <p className="text-center font-semibold py-3">Do you want to go? <Link to={"/"} className="text-red-600"> Home</Link></p>
            
            </form>
        </div>
        <Footer></Footer>
        <Tooltip id="my-tooltip" />
        </>
    );
};

export default AddEquipment;