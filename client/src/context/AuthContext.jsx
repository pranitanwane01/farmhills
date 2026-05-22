// import React, {
//   createContext,
//   useState,
//   useEffect,
// } from "react";

// export const AuthContext =
//   createContext();

// function AuthProvider({ children }) {

//   const [user, setUser] = useState(() => {

//     const savedUser =
//       localStorage.getItem("user");

//     return savedUser
//       ? JSON.parse(savedUser)
//       : null;

//   });

//   // SAVE USER

//   useEffect(() => {

//     localStorage.setItem(
//       "user",
//       JSON.stringify(user)
//     );

//   }, [user]);

//   // LOGIN

//   const login = (userData) => {

//     setUser(userData);

//   };

//   // LOGOUT

//   const logout = () => {

//     setUser(null);

//   };

//   // REGISTER

//   const register = (userData) => {

//     setUser(userData);

//   };

//   return (

//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         register,
//       }}
//     >

//       {children}

//     </AuthContext.Provider>

//   );
// }

// export default AuthProvider;

import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  // USER STATE
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  // SAVE USER
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // LOGIN
  const login = (userData) => {
    setUser(userData);
  };

  // LOGOUT
  const logout = () => {
    setUser(null);

    localStorage.removeItem("token");
  };

  // REGISTER
  const register = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
