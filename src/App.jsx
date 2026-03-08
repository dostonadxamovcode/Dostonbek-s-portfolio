import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLoyauts from "./mainloyauts/MainLoyauts"
import Home from "./pages/home"
import About from "./pages/about"
import Project from "./pages/project"
import Contact from "./pages/Contact"




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
