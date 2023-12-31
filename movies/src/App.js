import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Movies from "./components/Movies/Movies";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store";

function App() {
  const dispatch = useDispatch();

  //To get the state of admin and user from store->index.js
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
  console.log("isAdminLoggedIn: ", isAdminLoggedIn);
  console.log("isUserLoggedIn: ", isUserLoggedIn);

  //To update the values inside store->index.js
  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispatch(userActions.login());
    }else if(localStorage.getItem("adminId")){
      dispatch(adminActions.login());
    }
  }, [])
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
