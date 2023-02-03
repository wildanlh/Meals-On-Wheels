import axios from "axios";
import { BASE_URL } from "./constant";

// GET ORDER
export const getRiderOrderAPI = async (id) => {
  return await axios.get(`${BASE_URL}/rider/order`, {
    id,
  });
};

// ORDER COMPLETE
export const postRiderOrderCompleteAPI = async (id) => {
  return await axios.post(`${BASE_URL}/rider/order/${id}/complete`, {
    id,
  });
};

// ORDER CREATE
export const postRiderOrderCreateAPI = async (id) => {
  return await axios.post(`${BASE_URL}/rider/order/${id}/create`, {
    id,
  });
};

// GET ORDER ALL
export const getRiderOrderAllAPI = async (id) => {
  return await axios.get(`${BASE_URL}/rider/order/all`, {
    id,
  });
};
