import { useState } from 'react'
import { Card } from './Card/Card'
import './App.css'

function App() {
  const [user, setUser] = useState({
        nombre: '',
        generoMusical: '',
        email: '',
  })
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedName = user.nombre.trim();
    if(user.nombre === trimmedName && user.nombre.length >= 3 && user.email.length >= 6){
        setShow(true)
        setErr(false)
    } else {
        setShow(false)
        setErr(true)
    }
}

  return (
    <div className="App">
      <h1>Music Survey</h1>
      <form onSubmit={handleSubmit} className="form">
      <label>Nombre completo</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Email</label>
            <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
            <label>Género Musical</label>
            <select value={user.generoMusical} onChange={(e) => setUser({...user, generoMusical: e.target.value})}>
              <option value="">Selecciona un género</option>
              <option value="Funk">Funk</option>
              <option value="Jazz">Jazz</option>
              <option value="Rock">Rock</option>
              <option value="TripHop">TripHop</option>
              <option value="Metal">Metal</option>
            </select>
            <button>Enviar</button>
      </form>
      {err && "Por favor chequea que la información sea correcta"}
        {show && <Card nombre={user.nombre} generoMusical={user.generoMusical}/>}
    </div>
  )
}

export default App
