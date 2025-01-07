import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './layouts/HomeLayout';
import Error from './pages/Error';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './providers/AuthProvider';
import AllHomeFile from './components/AllHomeFile';
import AddEquipment from './pages/AddEquipment';
import EquipmentDetails from './pages/EquipmentDetails';
import AllSportsEquipment from './pages/AllSportsEquipment';
 import PrivateRouter from './routes/PrivateRouter';
import MyEquList from './pages/MyEquList';
import UpdateData from './pages/UpdateData';
import DiscountEqu from './pages/DiscountEqu';
import ContactMe from './pages/ContactMe';
import AboutSection from './pages/AboutSection';

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout></HomeLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<AllHomeFile></AllHomeFile>,
        loader: () => fetch('https://assignment-ten-server-lyart-beta.vercel.app/equipment'),
      }
    ]
  },
  {
    path:'/equipment/:id',
    element:<EquipmentDetails></EquipmentDetails>,
    loader: ({params}) => fetch(`https://assignment-ten-server-lyart-beta.vercel.app/equipmentAll/${params.id}`),
  },
  {
    path:'/emailMass',
    element:(<PrivateRouter>
      <MyEquList></MyEquList>
    </PrivateRouter>),
    
  },
  {
   path:'/allData',
   element:<AllSportsEquipment></AllSportsEquipment>,
   loader:() => fetch('https://assignment-ten-server-lyart-beta.vercel.app/equipmentAll')
  },
  {
    path:"auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>,
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      }
    ]
  },
  {
    path:"addEquipment",
    element:<AddEquipment></AddEquipment>,
  },
  {
    path:'update/:id',
    element:(<PrivateRouter>
      <UpdateData></UpdateData>
    </PrivateRouter>),
    
  },
  {
    path:'/discount',
    element:<DiscountEqu></DiscountEqu>
  },
  {
    path:'contact',
    element:<ContactMe></ContactMe>
  },
  {
    path:'about',
    element:<AboutSection></AboutSection>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)


