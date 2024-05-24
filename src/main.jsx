import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from '../components/About';
import Cart from '../components/Cart';
import NotFound from '../components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "cart",
    element: <Cart />,
    errorElement: <NotFound />,
  },
  {
    path: "food",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
