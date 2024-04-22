import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import Layout from './Layout.tsx';
import About from './pages/About.tsx';
import Works from './pages/Works.tsx';
import Contact from './pages/Contact.tsx';
import { SnackbarProvider } from 'notistack';


const router = createBrowserRouter([
  {
    path: "/mahimohammed",
    element: <Layout />,
    children: [
      {
        index:true,
        element:<Dashboard/>
      },
      {
        path: "/mahimohammed/dashboard",
        element: <Dashboard />
      },
      {
        path: "/mahimohammed/about",
        element: <About />
      },
      {
        path: "/mahimohammed/works",
        element: <Works />
      },
      {
        path: "/mahimohammed/contact",
        element: <Contact />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider autoHideDuration={2000}>
    <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>,
)
