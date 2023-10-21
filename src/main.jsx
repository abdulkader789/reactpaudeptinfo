import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './styles.css'; // Import the Tailwind CSS file

import Main from "./components/Layout/Main"
import Home from "./pages/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Login, Register } from "./pages/Auth";
import ArticlePage from "./pages/ArticlePage";
import Contact from "./pages/Contact";
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

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
