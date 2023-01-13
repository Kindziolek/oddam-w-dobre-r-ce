import "./scss/App.scss";
import "./scss/main.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/logowanie",
    element: <Login />,
  },

  {
    path: "/rejestracja",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
