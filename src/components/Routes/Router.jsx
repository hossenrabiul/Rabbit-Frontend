import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Profile from "../../pages/Profile";
import CollectionPage from "../../pages/CollectionPage";
import ProductDetails from "../Products/ProductDetails";
import CheckOut from "../Cart/CheckOut";
import OrderConfirmation from "../../pages/OrderConfirmation";
import OrderDetails from "../../pages/OrderDetails";
import MyOrdersPage from "../../pages/MyOrdersPage";
import AdminLayout from "../Admin/AdminLayout";
import AdminHomePage from "../../pages/AdminHomePage";
import UserManagements from "../Admin/UserManagements";
import UserProducts from "../Admin/UserProducts";
import EditProduct from "../Admin/EditProduct";
import EmptyCart from "../Cart/EmptyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/collections/:collection",
        element: <CollectionPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/emptycart",
        element: <EmptyCart />,
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/orderDetails/:id",
        element: <OrderDetails />,
      },
      {
        path: "/my-orderPage",
        element: <MyOrdersPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminHomePage />,
      },
      {
        path: "users",
        element: <UserManagements />,
      },
      {
        path: "products",
        element: <UserProducts />,
      },
      {
        path: "product/:id/edit",
        element: <EditProduct />,
      },
    ],
  },
]);

export default router;
