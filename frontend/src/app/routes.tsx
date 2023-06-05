import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { StreamingDetails } from "../pages/Streaming";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/streaming-details" element={<StreamingDetails title="Netflix"/>}/>  
      </Routes>
    </BrowserRouter>
  )
}