import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import myRouter from './Router/Route';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter} />
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>,
)
