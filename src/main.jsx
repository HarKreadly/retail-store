import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style/index.css";
import "boxicons";
import Head from "./Components/Head.jsx";
import "boxicons/css/boxicons.min.css";
import ProductsList from "./Components/ProductsList.jsx";

createRoot(document.getElementById("root")).render(
<ProductsList />
);
