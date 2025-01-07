import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebas.init";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import logInLottie from '../assets/lottie/login.json';
import Lottie from "lottie-react";



const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    const {userLogin,setUser} = useContext(AuthContext)
     const location = useLocation()
     const navigate = useNavigate()
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
         console.log({email,password})

         userLogin(email,password)
         .then((result) =>{
            const user = result.user;
            setUser(user);
            
            Swal.fire({
              title: "Good job!",
              text: "login successfully",
              icon: "success",
              didClose: () => {
                navigate(location?.state ? location.state : "/");
            }
            });
            
      
         })
         .catch((error) =>{
            
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              
            });
            console.log(error.code)
         })
    }
    const provider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
      signInWithPopup(auth,provider)
      .then(result =>{
        console.log('Successfully Google SignIn', result)
      })
      .catch(error =>{
        alert('Error',error)
      })
    }
    return (
        <>
        <Helmet>
        <title>Login | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
           <div className="min-h-screen flex justify-center items-center bg-blue-50 my-24" data-aos="zoom-in">
           <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="text-center lg:text-left w-96 lg:w-full ml-20">
               <Lottie animationData={logInLottie}></Lottie>
                </div>
           <div className="card max-w-2xl w-full rounded-none p-10 shadow-lg">
            <h2 className="text-2xl text-center font-semibold">Login Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
           <input name="password" type={showPassword?'text':'password'} placeholder="password" className="input input-bordered" required />
          <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-2 top-12">
            {
              showPassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
            }
            
          </button> 
          
        </div>
        <div className="form-control mt-6 space-y-2">
          <button type="submit" className="btn bg-blue-900 text-white" data-tooltip-id="my-tooltip"
                data-tooltip-content="Login with correct information">Login</button>
          <div className="divider">OR</div>
           <Link to="/" onClick={handleGoogleSignIn} className="btn hover:bg-blue-900 hover:text-white" data-tooltip-id="my-tooltip"
                data-tooltip-content="Click if you want to register with Google"><FcGoogle size={20}/> Login with Google</Link> 
        </div>
      </form>
      
      <p className="text-center font-semibold">Do not Have An Account? <Link to="/auth/register" className="text-red-600">Register</Link></p>
    </div> 
        </div> 
        </div>
        </>
    );
};

export default Login;