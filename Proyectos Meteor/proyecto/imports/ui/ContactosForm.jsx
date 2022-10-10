import React, { useState } from "react"
import { ConctacsCollection } from "../api/ContactsCollection";

export const ContactosForm = () => {
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [imagenUrl, setImagenUrl] = useState ("");

    const saveContacto = () => {
      console.log({ name, email, imagenUrl});
      ConctacsCollection.insert({ name, email, imagenUrl});
      setName("");
      setEmail("");
      setImagenUrl("");
    }

    return (
        <form>
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          id="email" />
      </div>
      <div>
        <label htmlFor="imagenURL">Imagen URL</label>
        <input 
          type="text" 
          value={imagenUrl}
          onChange= {(e) => setImagenUrl(e.target.value)}
          id="imagenUrl" />
      </div>
      <button type="button" onClick={saveContacto}>Guardar Contacto</button>
    </form>
    )
}