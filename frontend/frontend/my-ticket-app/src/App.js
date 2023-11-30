import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationForm from "./component/form/RegistrationForm";
import LoginForm from "./component/form/LoginForm";
import MovieForm from "./component/form/MovieForm";
import TheaterForm from "./component/form/TheaterForm";
import ShowForm from "./component/form/ShowForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegistrationForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/movie/create" element={<MovieForm />}></Route>
        <Route path="/theater/create" element={<TheaterForm />}></Route>
        <Route path="/show/create" element={<ShowForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
