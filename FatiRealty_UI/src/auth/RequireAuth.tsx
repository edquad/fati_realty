import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth"

type RequiredAuthProps = {
    allowedRoles: number[];
}

const RequiredAuth = (props: any) => {
    const { userToken } = useAuth();
    const location = useLocation();

    if (userToken === null)
        return <Navigate to="/access-denied" state={{ from: location }} replace />

    const userRoles = [1, 2, 3, 4, 5];

    const isAuthorized = userRoles?.filter((role) => props.allowedRoles?.includes(role)).length > 0;

    return isAuthorized ? (
        <Outlet />
    ) : (
        <Navigate to="/access-denied" state={{ from: location }} replace />
    )
};

export default RequiredAuth;