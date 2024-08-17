import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Home/Products/Products";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Product from "../Pages/Product/Product";
import Card from "../Pages/ProductCard/Card";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/product/show-product/:id",
                element: <Card/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    }
])

