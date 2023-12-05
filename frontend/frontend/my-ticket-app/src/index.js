import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthorContextProvider } from "./component/context/AuthContext/AuthContext";
import MovieContextProvider from "./component/context/MovieContext/MovieContext";
import TheaterContextProvider from "./component/context/TheaterContext/TheaterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthorContextProvider>
    <MovieContextProvider>
      <TheaterContextProvider>
        <App />
      </TheaterContextProvider>
    </MovieContextProvider>
  </AuthorContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
