import "./scss/App.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";

import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
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
