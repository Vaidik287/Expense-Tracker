import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeButton from './routes/Home.jsx'
import AddButton from './routes/Add.jsx'
import SettingsButton from './routes/Settings.jsx'
import CalenderButton from './routes/Calender.jsx'
import CurrencyButton from './routes/Currency.jsx'
import DeleteAllButton from './routes/Delete-all.jsx'
import DetailsButton from './routes/Details.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeButton /> },
      { path: "/Add", element: <AddButton /> },
      { path: "/settings", element: <SettingsButton /> },
      { path: "/calender", element: <CalenderButton /> },
      { path: "/settings/currency", element: <CurrencyButton /> },
      { path: "/settings/delete-all", element: <DeleteAllButton /> },
      { path: "/settings/details", element: <DetailsButton /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
