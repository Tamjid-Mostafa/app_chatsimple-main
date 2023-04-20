import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import { useEffect } from "react";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { useSelector } from "react-redux";
import useAuth from "./components/Hooks/useAuth";

function App() {
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

  const auth = useAuth()




  return (
    <Routes>
      <Route path="/" element={auth ? <Dashboard />  : <Login /> } />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<ProtectedRoutes />} >
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
export default App;
