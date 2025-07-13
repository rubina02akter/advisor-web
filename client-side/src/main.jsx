import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import router from './Routes/router.jsx'
import AuthProvider from './Providers/AuthProvider.jsx';
import GetUser from '../src/UserAuth/GetUser.jsx';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <GetUser />
   <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
   </AuthProvider>
  </StrictMode>,
)
