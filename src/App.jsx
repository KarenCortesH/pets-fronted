import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import './index.css'
import { AuthProvider } from "./context/AuthContext"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
