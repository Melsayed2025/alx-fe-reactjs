import { Navigate } from "react-router-dom";

// simulate authentication
const isAuthenticated = false; // غيّرها true للتجربة

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
