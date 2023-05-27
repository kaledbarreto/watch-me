import { BrowserRouter, Route, Routes } from "react-router-dom";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<span>Login</span>}/>
      </Routes>
    </BrowserRouter>
  )
}