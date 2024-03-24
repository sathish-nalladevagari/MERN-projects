import { createBrowserRouter } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";


const router = createBrowserRouter([
    {
        path:"/card",
        element:<Card/>
    },
    {
        path:"/",
        element:<Home/>
    }
])
export default router