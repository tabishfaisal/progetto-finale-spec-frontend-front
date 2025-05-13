import { createBrowserRouter,RouterProvider } from "react-router-dom";

import DefaultLayout from "../components/DefaultLayout";
import Laptops from "../pages/Laptops";
import LaptopDetail from '../pages/LaptopDetail';
import WishList from "../pages/WishList";
import Comparison from "../pages/Comparison";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children:[
            {
                index: true,
                element: <Laptops />
            },{
                path: '/laptops/:id',
                element: <LaptopDetail />
            },{
                path: '/favorite',
                element: <WishList />
            },{
                path: '/comparison',
                element: <Comparison />
            }
        ]
    }
])

const Routes = ()=>{
    return <RouterProvider  router={router}/>
}
export default Routes;