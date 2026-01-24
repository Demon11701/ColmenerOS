import { createRoot } from "react-dom/client";
// CORRECCIÓN: Quitamos la extensión .tsx del final
import App from "./app/App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);