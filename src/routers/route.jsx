import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import App from "../App";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:App
            }
        ]
    }
])

