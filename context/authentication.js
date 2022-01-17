import { createContext, useContext } from 'react'
import useFirebaseAuth from '../hooks/useFirebaseAuth'

const AuthUserContext = createContext({
    authUser: null,
    loading: true,
    signin: async () => {},
    register: async () => {},
    logout: async () => {},
})

export function AuthUserProvider({children}){
    const auth = useFirebaseAuth()
    return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
}

// custom hook to use authUserContext
export const useAuthUser = () => useContext(AuthUserContext);