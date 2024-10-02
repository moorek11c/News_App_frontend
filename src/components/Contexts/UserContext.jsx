import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/users");
        const users = await response.json();
        const user = users.find((user) => user.isLoggedIn);
        if (user) {
          setIsLoggedIn(true);
          setUsername(user.username);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setIsLoggedIn(true);
        setUsername(user.username);
        await fetch(`http://localhost:3001/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isLoggedIn: true }),
        });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();
      const user = users.find((user) => user.isLoggedIn);
      if (user) {
        await fetch(`http://localhost:3001/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isLoggedIn: false }),
        });
        setIsLoggedIn(false);
        setUsername("");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleSignUp = async (user) => {
    try {
      const newUser = { ...user, isLoggedIn: false };
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      return response;
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
