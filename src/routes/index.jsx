import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router';

import App from '../App';
import Error from "../pages/Error"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Cart from "../pages/Cart"
import Support from "../pages/Support"
import About from "../pages/About"
import Products from "../pages/Products"
import Blog from "../pages/Blog"

const router = createBrowserRouter (
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<Error />}>
        <Route index element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Route>
    </>
  )
)

const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes
