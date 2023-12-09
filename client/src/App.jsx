import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom"; 
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Single from "./pages/Single.jsx";
import Reviews from "./pages/Reviews.jsx";
import Write from "./pages/Write.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx"
import "./styles.scss"
import About from "./pages/About.jsx";

const Layout = () =>
{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>

  )
}
const router = createBrowserRouter ([

  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/post/:id",
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      },
      {
        path: "/reviews",
        element: <Reviews/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
    ]
  }, 
  {
    path:"/register",
    element:<Register/>
  }, 
  {
    path:"/login",
    element:<Login/>
  }, 
])
function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}></RouterProvider>
      </div>
    </div>  
  )
}



export default App;
