import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayOut";
import AddCourse from "../Pages/AddCourse";
import AdvisorCourses from "../Pages/AdvisorCourses";
import Home from "../Pages/Home";
import LogIn from "../UserAuth/LogIn";
import SignUp from "../UserAuth/SignUp";

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
      },
      {
        path: 'add-course',
        element: <AddCourse />
      },
      {
        path: 'login',
        element: <LogIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  }
])

export default router;