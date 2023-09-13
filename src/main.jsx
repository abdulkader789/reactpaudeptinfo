import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './styles.css'; // Import the Tailwind CSS file

import Main from "./components/Layout/Main"
import Home from "./components/Home/Home"
import Cse from "./components/Cse/Cse"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Faculty from "./components/Faculty/Faculty";
import Club from "./components/Club/Club";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"cse",
        element:<Cse></Cse>
      },
      {
        path:'faculty',
        element:<Faculty></Faculty>
      },
      {
        path:'club',
        element:<Club></Club>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
