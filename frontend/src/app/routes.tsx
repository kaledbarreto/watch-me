import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}