import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLoyauts from "./mainloyauts/MainLoyauts"

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Project = lazy(() => import('./pages/Project'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const Contact = lazy(() => import('./pages/Contact'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="w-6 h-6 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
    </div>
  )
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLoyauts />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<PageLoader />}><Home /></Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<PageLoader />}><About /></Suspense>
      },
      {
        path: "/projects",
        element: <Suspense fallback={<PageLoader />}><Project /></Suspense>
      },
      {
        path: "/blog",
        element: <Suspense fallback={<PageLoader />}><Blog /></Suspense>
      },
      {
        path: "/blog/:slug",
        element: <Suspense fallback={<PageLoader />}><BlogDetail /></Suspense>
      },
      {
        path: "/contact",
        element: <Suspense fallback={<PageLoader />}><Contact /></Suspense>
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={routes} />
}
