import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

  

import { Fade } from "react-awesome-reveal";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { MdOutlineCategory } from "react-icons/md";

const EquipmentCard = ({equipment}) => {
    const {isDarkMode} = useContext(AuthContext)
    const{_id,name,image,category,description} = equipment;
    
       
    return (
        <>
             <div className={`card  shadow-xl ${isDarkMode?"text-white":""}`} >
             <Fade triggerOnce={false} delay={400}>
             <figure className="px-10 pt-10">
                   <img
                        src={image}
                        alt={name}
                         className="rounded-xl w-full h-[300px]" />
               </figure>
                 </Fade >
               
                      <div className="card-body items-start text-start">
                            <h2 className="card-title">{name}</h2>
                                <p className="text-lg flex gap-1 items-center text-center font-medium"><MdOutlineCategory /> {category}</p>
                                <p> {description}</p>
                             <div className="card-actions">
                             <Link to={`/equipment/${_id}`} data-tooltip-id="my-tooltip"
              data-tooltip-content="Click The View Details" className="btn bg-blue-900 text-white">View Details</Link>
               <Tooltip id="my-tooltip" />
                           </div>
                     </div>
                </div>
        </>
    );
};

export default EquipmentCard;


