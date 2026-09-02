import { useState } from "react"

function Registro() {

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")

  function manejarRegistro(evento) {

    evento.preventDefault()

    console.log("Nombre:", nombre)
    console.log("Correo:", correo)
    console.log("Contraseña:", contraseña)
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-white text-center">
          MyAuth
        </h1>

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

          <h2 className="text-2xl font-semibold text-white">
            Crear una cuenta
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Regístrate para comenzar
          </p>

          <form
            onSubmit={manejarRegistro}
            className="mt-8 space-y-5"
          >

            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-slate-300"
              >
                Nombre
              </label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(evento) => setNombre(evento.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-slate-300"
              >
                Correo electrónico
              </label>

              <input
                id="correo"
                name="correo"
                type="email"
                placeholder="correo@ejemplo.com"
                value={correo}
                onChange={(evento) => setCorreo(evento.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="contraseña"
                className="block text-sm font-medium text-slate-300"
              >
                Contraseña
              </label>

              <input
                id="contraseña"
                name="contraseña"
                type="password"
                placeholder="••••••••"
                value={contraseña}
                onChange={(evento) => setContraseña(evento.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-500"
            >
              Crear cuenta
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            ¿Ya tienes una cuenta?{" "}
            <button
              type="button"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Inicia sesión
            </button>
          </p>

        </div>

      </div>

    </main>
  )
}

export default Registro