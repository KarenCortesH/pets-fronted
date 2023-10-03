import { createContext, useContext, useState } from 'react'
import { registerRequest } from "../api/auth";
//Aqui vamos a guardar los datos de autenticacion del usuario

export const AuthContext = createContext()

//Creamos el hook para hacer uso del contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be use within an AuthProvider")
    }
}
//Creamos un AuthProvider que es un componente que engloba a otros

export const AuthProvider = ({ children }) => {
    //Creo un estado
    const [user, setUser] = useState(null);

    //aqui voy a recibir los datos del usuario y voy asignar  el usuario registrado
    const signup = async (user) => {
        const res = await registerRequest(user);
        console.log(res.data);
        setUser(res.data)
    };

    return (
        <AuthContext.Provider
            value={{
                //Esto es lo que va exportar
                signup,
                user,
            }}>
            {children}
        </AuthContext.Provider>
    )
}
