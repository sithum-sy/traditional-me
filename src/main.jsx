import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//CSS
import "./core-ui/app.css";
import "./core-ui/responsive.css";
import "./routes/blog/blog.css";
import "./routes/blog-post/blogPost.css";
import "./core-ui/leaflet.css";
import "./routes/contact/contact.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
