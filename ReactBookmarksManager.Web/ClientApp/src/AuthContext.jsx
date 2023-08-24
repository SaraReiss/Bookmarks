import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthContextComponent = ({ children }) => {
    const [user, setUser] = useState(null);
   

    useEffect(() => {
        const loadUser = async () => {
            const { data } = await axios.get('/api/account/getcurrentuser');
            setUser(data);
            
        }
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthContextComponent, useAuth };