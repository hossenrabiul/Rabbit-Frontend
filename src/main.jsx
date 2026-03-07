import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./components/Routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right"></Toaster>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
