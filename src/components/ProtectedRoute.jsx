import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to={"/"} />;
  } else {
    if (allowedRoles.includes(user.role)) {
      return children;
    } else {
      return <Navigate to={"/"} />;
    }
  }
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.array,
  children: PropTypes.node,
};

export default ProtectedRoute;
