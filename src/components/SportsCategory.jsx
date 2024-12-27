const categories = [
    {
      category: "Cricket",
      image: "https://i.ibb.co.com/zH4RpdK/IMG-4188.jpg",
      
    },
    {
      category: "Football",
      image: "https://i.ibb.co.com/jZBH11z/IMG-4189.jpg",
      
    },
    {
      category: "Badminton",
      image: "https://i.ibb.co.com/zPfzZwS/IMG-4190.jpg",
      
    },
    {
      category: "Basketball",
      image: "https://i.ibb.co.com/hgsbHC9/IMG-4191.jpg",
      
    },
    {
      category: "Fitness",
      image: "https://i.ibb.co.com/wJsGDqB/IMG-4192.jpg",
      
    },
    {
      category: "Tennis",
      image: "https://i.ibb.co.com/j8RZryK/IMG-4193.jpg",
      
    },
    {
      category: "Table Tennis",
      image: "https://i.ibb.co.com/7KYXFP9/IMG-4194.jpg",
      
    },
    {
      category: "Football Accessories",
      image: "https://i.ibb.co.com/wBQm0Wc/IMG-4159.jpg",
     
    },
    {
      category: "Fitness Accessories",
      image: "https://i.ibb.co.com/wJsGDqB/IMG-4192.jpg",
      
    },
    {
      category: "Hockey",
      image: "https://i.ibb.co.com/0nx6GyS/IMG-4195.jpg",
      
    },
  ];
  
  import AOS from "aos";
  import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SportsCategory = () => {
  const {isDarkMode} = useContext(AuthContext)
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 100, 
      once: true, 
    });
  }, []);
    return (
        <div>
      <div className="my-24">
        <h1 className={`text-4xl font-bold text-center mb-8 text-blue-900 ${isDarkMode?"text-white":""}`}>
          Sports Equipment Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" data-aos="flip-up">
          {categories.map((category, index) => (
            <div key={index} className="">
               <div className="flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.category}
                  className="w-32 h-32 rounded-full"
                />
               </div>
              <div className= {`text-current ${isDarkMode?"text-white":""}`}>
                <h2 className="text-xl text-center font-semibold">{category.category}</h2>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsCategory;