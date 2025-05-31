import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import the generated route tree

import "./styles.css";
import reportWebVitals from "./reportWebVitals.ts";
import { AuthProvider } from "./context/AuthContext.tsx";
import App from "./app.tsx";

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
