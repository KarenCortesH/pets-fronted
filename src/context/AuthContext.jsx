import { createContext, useContext, useState } from 'react'
import { registerRequest } from "../api/auth";
//Aqui vamos a guardar los datos de autenticacion del usuario

export const AuthContext = createContext()

//Creamos el hook para hacer uso del contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)  throw new Error("useAuth must be use within an AuthProvider");
    return context;
};
//Creamos un AuthProvider que es un componente que engloba a otros

export const AuthProvider = ({ children }) => {
    //Creo un estado
    const [user, setUser] = useState(null);
    //Decir que ya estoy autentificado
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //aqui voy a recibir los datos del usuario y voy asignar  el usuario registrado
    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        }catch (error) {
        console.log(error);
    }
};

    return (
        <AuthContext.Provider
            value={{
                //Esto es lo que va exportar
                signup,
                user,
                //Saber si el usuario esta autenticado o no
                isAuthenticated,
            }}>
            {children}
        </AuthContext.Provider>
    )
}
