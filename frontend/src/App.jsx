import { BrowserRouter, Routes, Route } from "react-router-dom"

import Registro from "./paginas/Registro"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/registro"
          element={<Registro />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App