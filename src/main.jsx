import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import AddingPage from "./routes/AddingPage.jsx";
import SettingsPage from "./routes/SettingsPage.jsx";
import AboutPage from "./routes/AboutPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> }, //Done
  { path: "/Add", element: <AddingPage /> }, //Done
  { path: "/settings", element: <SettingsPage /> }, //Done
  { path: "/settings/about", element: <AboutPage /> }, //Done
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
