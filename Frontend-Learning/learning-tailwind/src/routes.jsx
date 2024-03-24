import { createBrowserRouter } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";


const router = createBrowserRouter([
    {
        path:"/card",
        element:<Card/>
    },
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/navbar",
        element:<Navbar/>
    },
    {
        path:"/login",
        element:<Login/>
    }
])
export default router