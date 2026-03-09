import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLoyauts from "./mainloyauts/MainLoyauts"
import Contact from "./pages/Contact"
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';




export default function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLoyauts />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {  
          path: "/projects",
          element: <Project/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])
  return <>
    <RouterProvider router={routes} />
  </>
}
