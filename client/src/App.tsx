import { useState } from "react";
import Register from "./pages/register";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/protectedRoutes";
import Home from "./pages/dashboard";
import CreateDoc from "./pages/create";
import Document from "./pages/docs";

function App() {
  return (
    <div className="width-screen h-screen overflow-hidden bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/create/:title" element={<CreateDoc />} />
            <Route path="/document/:id" element={<Document />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
