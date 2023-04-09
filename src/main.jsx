import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Details from './components/layout/Details';
import AppliedJobs from './components/Jobs/AppliedJobs';
import Statics from './components/layout/Statics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('features.json')
      },

      {

        path: "details/:id",
        element: <Details />,






      },

      {

        path: "apply",
        element: <AppliedJobs></AppliedJobs>
      },

      {

        path : 'statics',
        element: <Statics></Statics>,
      }
    ],
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
