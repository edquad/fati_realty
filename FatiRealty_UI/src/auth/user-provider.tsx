import UserContext from "./user-context";
import { useState } from "react";

const UserProvider = (props: any) => {
    const [userToken, setUserToken] = useState<string | null>(
        localStorage.getItem("auth_token")
    );

    const login = (token: string | null) => {
        if (!token) return;
        setUserToken(token);
    }

    const logout = () => {
        setUserToken(null);
        localStorage.removeItem("auth_token");
    }

    return (
        <UserContext.Provider
            value={{
                login,
                logout,
                userToken,
            }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;