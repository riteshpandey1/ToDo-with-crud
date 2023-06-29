import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import Register from "./components/Register";
import Login from "./components/Login";
import TodoData from "./components/TodoData";
import Footer from "./components/Footer";
import PrivateCom from "./components/PrivateCom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route element={<PrivateCom />}>
            <Route path="/todo-data" element={<TodoData />} />
          </Route>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
