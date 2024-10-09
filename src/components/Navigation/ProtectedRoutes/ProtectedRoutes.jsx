import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
