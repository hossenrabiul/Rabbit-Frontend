import { fetchClient } from "../utils/fetchClient";

export const registerUser = (data) => {
  return fetchClient("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const loginUser = (data) => {
  return fetchClient("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const logoutUser = () => {
  return fetchClient("/auth/logout", {
    method: "POST",
  });
};

export const getCurrentUser = () => {
  return fetchClient("/auth/me");
};