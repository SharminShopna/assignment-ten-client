import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import EquipmentCard from "./EquipmentCard";
import SportsCategory from "./SportsCategory";
import SportsEqu from "./SportsEqu";
import Brands from "./Brands";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const AllHomeFile = () => {
    const equipments = useLoaderData()
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div className="w-11/12 mx-auto">
            <Slider></Slider>
            <div>
                <Brands></Brands>
            </div>
            <div>
                <SportsCategory></SportsCategory>
            </div>
            <div className="">
              <div className={`text-center space-y-6 my-8 `}>
              <h2 className={`text-5xl font-semibold text-blue-900 ${isDarkMode?"text-white":""}`}>Sports Equipment and Accessories</h2>
              <p className={`text-sm text-gray-600  text-center ${isDarkMode?"text-white":""}`}>
              Sports equipment and accessories play a crucial role in enhancing performance, safety, and overall enjoyment in various sports and physical activities. From high-quality footwear designed to provide traction and support to durable protective gear like helmets, pads, and gloves, these products are essential for both professional athletes and amateurs. Accessories such as water bottles, sports bags, and training aids also contribute to convenience and functionality, helping athletes stay hydrated, organized, and focused on their training or competition. The right sports equipment can improve performance, reduce the risk of injury, and boost confidence, making it an integral part of every athlete's toolkit. Whether for team sports like football or basketball, or individual pursuits like running or tennis, the right gear ensures that athletes can perform at their best while staying comfortable and safe.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                 {
                    equipments.map(equipment => <EquipmentCard key={equipment._id} equipment={equipment}></EquipmentCard>)
                } 
            </div>
            </div>
            
            <div>
                <SportsEqu></SportsEqu>
            </div>
           
        </div>
    );
};

export default AllHomeFile;