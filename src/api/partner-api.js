import axios from "axios";
import { BASE_URL } from "./constant";

// GET ORDER
export const getPartnerOrderAPI = async (id) => {
  return await axios.get(`${BASE_URL}/partner/order`, {
    id,
  });
};

// ORDER COMPLETE
export const postPartnerOrderCompleteAPI = async (id) => {
  return await axios.post(`${BASE_URL}/partner/order/${id}/complete`, {
    id,
  });
};

// ORDER CREATE
export const postPartnerOrderCreateAPI = async (id) => {
  return await axios.post(`${BASE_URL}/partner/order/${id}/create`, {
    id,
  });
};

// GET ORDER ALL
export const getPartnerOrderAllAPI = async (id) => {
  return await axios.get(`${BASE_URL}/partner/order/all`, {
    id,
  });
};
