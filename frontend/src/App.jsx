import { BrowserRouter, Routes, Route } from "react-router-dom"

import Registro from "./paginas/Registro"
import Login from "./paginas/Login"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/registro"
          element={<Registro />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App