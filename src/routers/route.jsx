import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                loader:()=>fetch('http://localhost:3000/coffees'),
                Component:Home
            },
            {
                path:'addCoffee',
                Component:AddCoffee
            },
            {
                path:'updateCoffee/:id',
                Component:UpdateCoffee
            },
            {
                path:'coffee/:id',
                loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
                Component:CoffeeDetails

            }
        ]
    }
])

