import useAuth from "../Auth/useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
