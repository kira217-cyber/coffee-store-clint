import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../components/Users";

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
                loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
                Component:UpdateCoffee
            },
            {
                path:'coffee/:id',
                loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
                Component:CoffeeDetails

            },
            {
                path:'login',
                Component:Login
            },
            {
                path:'register',
                Component:Register
            },
            {
                path:'users',
                loader: ()=>fetch('http://localhost:3000/users'),
                Component:Users
            }
        ]
    }
])

