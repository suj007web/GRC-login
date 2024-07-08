import Dashboard from "./components/Dashboard";
import Error404 from "./components/Error404"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; import Auth from "./components/Auth";
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole='admin'>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
