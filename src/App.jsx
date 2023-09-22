import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
