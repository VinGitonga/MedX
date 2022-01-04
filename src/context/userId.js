import { useState, createContext } from "react";

export const UserIdContext = createContext();

export const UserIdContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);

    const userIdState = {
        userId,
        setUserId,
    };

    return (
        <UserIdContext.Provider value={userIdState}>
            {children}
        </UserIdContext.Provider>
    );
};
