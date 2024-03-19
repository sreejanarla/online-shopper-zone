import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Root from "./Root";
import Proddata from "./components/Proddata";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
export default function App() {
  let browserRouter = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Root />,
    },
    {
      path: "/productdetails",
      element: <Proddata />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={browserRouter}></RouterProvider>
    </div>
  );
}
