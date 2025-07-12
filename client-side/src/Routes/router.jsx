import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayOut";
import AddCourse from "../Pages/AddCourse";
import AllCourse from "../Pages/AllCourse";
import Home from "../Pages/Home";
import LogIn from "../UserAuth/LogIn";
import SignUp from "../UserAuth/SignUp";
import ViewDetails from "../components/ViewDetails";


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
        element: <AllCourse />
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
      },
      {
        path: 'view-details',
        element: <ViewDetails/>
      }
    ]
  }
])

export default router;