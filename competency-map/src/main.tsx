import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./styles/globals.css"

const mountNode =
  document.getElementById("root") ?? document.getElementById("competency-root")

if (!mountNode) {
  throw new Error("Unable to find a root element to mount the app.")
}

createRoot(mountNode).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
