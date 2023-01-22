import Register from "./pages/register";
import Login from "./pages/login";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoutes from "./components/protectedRoutes";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/dashboard";
import CreateDoc from "./pages/create";
import Document from "./pages/docs";



function App() {
  const location = useLocation();
  return (
    <div className="width-screen h-screen overflow-hidden bg-black">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/create/:title" element={<CreateDoc />} />
              <Route path="/document/:id" element={<Document />} />
            </Route>
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
