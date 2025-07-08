import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayOut";
import Home from "../Pages/Home";
import AdvisorCourses from "../Pages/AdvisorCourses";
import AddCourse from "../Pages/AddCourse";
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
        path: 'sign-up',
        element: <SignUp />
      }
    ]
  }
])

export default router;