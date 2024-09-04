import { useSelector } from "react-redux";
import { getIsAuth } from "../features/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {

  const isAuth = useSelector(getIsAuth);

  if(!isAuth) {
    return <Navigate to="/sign-in" replace />
  }

  return <Outlet />;
};

export default RequireAuth;
