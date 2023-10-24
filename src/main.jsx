import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './styles.css'; // Import the Tailwind CSS file

import Main from "./components/Layout/Main"
<<<<<<< HEAD
import Home from "./components/Home/Home"
=======
import Home from "./pages/Home"
>>>>>>> 0eaf59cbf3d2f7ccbd18cb7b6f033f6aa0cf768a
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Login, Register } from "./pages/Auth";
<<<<<<< HEAD
=======
import ArticlePage from "./pages/ArticlePage";
import Contact from "./pages/Contact";
>>>>>>> 0eaf59cbf3d2f7ccbd18cb7b6f033f6aa0cf768a
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },


      {
<<<<<<< HEAD
        path: 'auth/login',
        element: <Login></Login>
      },
      {
        path: 'auth/register',
        element: <Register></Register>
      },
=======
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'article',
        element: <ArticlePage></ArticlePage>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
>>>>>>> 0eaf59cbf3d2f7ccbd18cb7b6f033f6aa0cf768a

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
