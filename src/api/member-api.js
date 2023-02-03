import axios from "axios";
import { BASE_URL } from "./constant";

// GET ORDER
export const getMemberOrderAPI = async (id) => {
  return await axios.get(`${BASE_URL}/member/order`, {
    id,
  });
};

// ORDER COMPLETE
export const postMemberOrderCompleteAPI = async (id) => {
  return await axios.post(`${BASE_URL}/member/order/${id}/complete`, {
    id,
  });
};

// ORDER CREATE
export const postMemberOrderCreateAPI = async (id) => {
  return await axios.post(`${BASE_URL}/member/order/${id}/create`, {
    id,
  });
};

// GET ORDER ALL
export const getMemberOrderAllAPI = async (id) => {
  return await axios.get(`${BASE_URL}/member/order/all`, {
    id,
  });
};
