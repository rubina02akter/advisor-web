import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayOut";
import Home from "../Pages/Home";
import AdvisorCourses from "../Pages/AdvisorCourses";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'courses',
        element: <AdvisorCourses />
      }
    ]
  }
])

export default router;