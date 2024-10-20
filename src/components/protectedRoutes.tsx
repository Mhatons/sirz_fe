// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = localStorage.getItem('user');

  if (!user) {
    return <Navigate to="/login" replace />; // Redirect to login if no user
  }

  return children; // Render the child component (Admin)
};

export default ProtectedRoute;