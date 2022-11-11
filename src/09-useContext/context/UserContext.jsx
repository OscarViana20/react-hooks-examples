import { createContext } from 'react'

export const UserContext = createContext()

//permite saber como luce la informacion que vamos a colocar en el contexto
//permite al hook de react buscar el contexto
//permite definir el proveedor (UserProvider)