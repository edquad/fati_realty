import { useContext } from "react";
import UserContext from "./user-context";

const useAuth = () => {
    return useContext(UserContext);
}

export default useAuth;