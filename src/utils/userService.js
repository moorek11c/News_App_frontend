// src/services/userService.js
import { mockUsers } from "./Config/mockUser";

const USERS_KEY = "users";

const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : mockUsers;
};

const saveUsersToLocalStorage = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const fetchUser = async () => {
  const users = getUsersFromLocalStorage();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500); // Simulate network delay
  });
};

export const loginUser = async ({ email, password }) => {
  const users = getUsersFromLocalStorage();
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    user.isLoggedIn = true;
    saveUsersToLocalStorage(users);
    return user;
  } else {
    throw new Error("Invalid credentials");
  }
};

export const logoutUser = async () => {
  const users = getUsersFromLocalStorage();
  const user = users.find((user) => user.isLoggedIn);
  if (user) {
    user.isLoggedIn = false;
    saveUsersToLocalStorage(users);
  }
};

export const signUpUser = async (newUser) => {
  const users = getUsersFromLocalStorage();
  const user = { ...newUser, id: users.length + 1, isLoggedIn: false };
  users.push(user);
  saveUsersToLocalStorage(users);
  return user;
};
