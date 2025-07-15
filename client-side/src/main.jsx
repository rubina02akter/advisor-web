import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import { Toaster } from 'react-hot-toast';
import GetUser from '../src/UserAuth/GetUser.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import router from './Routes/router.jsx';
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <GetUser />
   <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" reverseOrder={false} />
     <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
   </AuthProvider>
  </StrictMode>,
)
