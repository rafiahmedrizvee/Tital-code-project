import { createBrowserRouter } from "react-router";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Service from "../../Pages/Service/Service";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Blogs from "../../Pages/Blogs/Blogs";
import Contact from "../../Pages/Contact/Contact";


const router = createBrowserRouter([
        {
                path: "/",
                element: <Main/>,
                children: [
                        {
                                path: "/",
                                element: <Home/>,
                        },
                        {
                                path: "/home",
                                element: <Home/>,
                        },
                        {
                                path: "/about-us",
                                element: <AboutUs/>,
                        },
                        {
                                path: "/service",
                                element: <Service/>,
                        },
                        {
                                path: "/portfolio",
                                element: <Portfolio/>,
                        },
                        {
                                path: "/blogs",
                                element: <Blogs/>,
                        },
                        {
                                path: "/contact",
                                element: <Contact/>,
                        },
                ]
        }
])

export default router;