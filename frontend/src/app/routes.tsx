import { ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { StreamingDetails } from "../pages/Streaming";

interface ProtectedRouteProps {
  children: ReactElement;
}

function AuthenticatedRoute({ children }: ProtectedRouteProps) {
  const user = localStorage.getItem('user');

  if(!user) {
    return <Navigate to="/login" state={{ from: window.location.pathname }} />;
  }

  return (
    <>
      { children }
    </>
  );
}

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
        <Route path="/" element={(
          <AuthenticatedRoute>
            <Home/>
          </AuthenticatedRoute>
        )} />
        <Route path="/streaming/:id" element={<StreamingDetails />}/>  
      </Routes>
    </BrowserRouter>
  )
}