import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./routes/HomePage.jsx";
import AddingPage from "./routes/AddingPage.jsx";
import SettingsPage from "./routes/SettingsPage.jsx";
import AboutPage from "./routes/AboutPage.jsx";
import moneyTrackerStore from "./store/index.js";
import DetailsPage from "./routes/DetailsPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> }, //Done
  { path: "/Details/:id", element: <DetailsPage /> }, //Done
  { path: "/Add", element: <AddingPage /> }, //Done
  { path: "/settings", element: <SettingsPage /> }, //Done
  { path: "/settings/about", element: <AboutPage /> }, //Done
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={moneyTrackerStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
