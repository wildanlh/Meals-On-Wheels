import axios from "axios";
import { BASE_URL } from "./constant";

// REGISTER
export const registerAPI = async (user) => {
  return await axios.post(`${BASE_URL}/auth/signup`, {
    name: user.name,
    address: user.address,
    gender: user.gender,
    role: user.role,
    email: user.email,
    password: user.password,
    file: user.file,
  });
};

// LOGIN (LOCAL)
export const loginAPI = async (email, password) => {
  return await axios.post(`${BASE_URL}/auth/signin`, {
    email,
    password,
  });
};

// GET PROFILE
export const getUserLoginAPI = async (token) => {
  return await axios.get(`${BASE_URL}/user/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// EDIT PROFILE
export const editProfileAPI = async (user, token) => {
  return await axios.put(
    `${BASE_URL}/users/edit`,
    {
      userId: user.userId,
      name: user.name,
      address: user.address,
      phoneNumber: user.phoneNumber,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// LIST USER
export const getListUserAPI = async (token) => {
  return await axios.get(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET USER BY ID
export const getUserAPI = async (userId, token) => {
  return await axios.get(`${BASE_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
