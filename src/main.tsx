import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import Layout from './Layout.tsx';
import About from './pages/About.tsx';
import Works from './pages/Works.tsx';
import Contact from './pages/Contact.tsx';


const router = createBrowserRouter([
  {
    path: "/mahimohammed/",
    element: <Layout />,
    children: [
      {
        path: "/mahimohammed/",
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
