import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import PrivetOutlet from "./PrivetRoute/PrivetOutlet";
import useAuth from "./hooks/UseAuth";
function App() {

  const auth = useAuth()

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={auth ? <Dashboard /> : <Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<PrivetOutlet/>} >
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
export default App;
