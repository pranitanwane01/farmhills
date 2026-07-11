// import React, { useContext } from "react";

// import { Navigate } from "react-router-dom";

// import { AuthContext } from "../context/AuthContext";

// function ProtectedRoute({ children }) {
//   const { user } = useContext(AuthContext);

//   // IF USER NOT LOGGED IN

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   // ALLOW ACCESS

//   return children;
// }

// export default ProtectedRoute;


import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function AdminProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminProtectedRoute;