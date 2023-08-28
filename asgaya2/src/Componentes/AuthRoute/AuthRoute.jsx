import { Navigate } from "react-router-dom";


function AuthRoute({ user, component }) {

    if (user) return component;
    if (!user) return <Navigate to="/login" />

}
export default AuthRoute