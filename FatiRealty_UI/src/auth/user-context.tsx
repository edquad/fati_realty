import React from "react";

type UserContextType = {
    login: Function;
    logout: Function;
    userToken: string | null;
}

const UserContext = React.createContext<UserContextType>({
    login: () => null,
    logout: () => null,
    userToken: null,
})

export default UserContext;