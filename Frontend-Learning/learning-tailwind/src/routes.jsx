import { createBrowserRouter } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


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
])
export default router