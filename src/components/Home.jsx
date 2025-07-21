import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <h2>Please login to access this page.</h2>
      )}
    </div>
  );
};

export default Home;
