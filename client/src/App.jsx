import Dashboard from "./components/Dashboard";
import Login from "./components/Login"
import Error404 from "./components/Error404"
import { BrowserRouter, Routes, Route } from "react-router-dom"; function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
