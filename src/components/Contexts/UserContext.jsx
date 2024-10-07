import { createContext, useState, useEffect } from "react";
import {
  fetchUser,
  loginUser,
  logoutUser,
  signUpUser,
} from "../../utils/userService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const users = await fetchUser();
        const user = users.find((user) => user.isLoggedIn);
        if (user) {
          setIsLoggedIn(true);
          setUsername(user.username);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleLogin = async ({ email, password }) => {
    try {
      const user = await loginUser({ email, password });
      setIsLoggedIn(true);
      setUsername(user.username);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      setUsername("");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleSignUp = async (user) => {
    try {
      await signUpUser(user);
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout, handleSignUp, username }}
    >
      {children}
    </UserContext.Provider>
  );
};
