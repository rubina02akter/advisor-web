import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
import MainLayout from "../Layouts/MainLayOut";
import AddCourse from "../Pages/AddCourse";
import AllCourse from "../Pages/AllCourse";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MyAddedCourses from "../Pages/MyAddedCourses";
import UpdateCourse from "../Pages/UpdateCourse";
import LogIn from "../UserAuth/LogIn";
import SignUp from "../UserAuth/SignUp";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'all-courses',
        element: <AllCourse />
      },
      {
        path: '/course/:id',
        element: <CourseDetails />
      },
      {
        path: 'add-course',
        element: <AddCourse />
      },
      {
        path: 'my-added-course',
        element: <MyAddedCourses />
      },
      {
        path: "/update-course/:id",
        element: <UpdateCourse />
      },
      {
        path: 'login',
        element: <LogIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
    ]
  }
])

export default router;