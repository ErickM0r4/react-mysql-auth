const express = require("express")

const aplicacion = express()

aplicacion.get("/", (solicitud, respuesta) => {
  respuesta.json({
    mensaje: "Servidor funcionando correctamente"
  })
})

aplicacion.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000")
})






