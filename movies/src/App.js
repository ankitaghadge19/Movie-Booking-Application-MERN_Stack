import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <div>
      <Header/> 
      <section>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
