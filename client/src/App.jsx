import Dashboard from "./components/Dashboard";
import Error404 from "./components/Error404"
import { BrowserRouter, Routes, Route } from "react-router-dom";import Auth from "./components/Auth";
 function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
