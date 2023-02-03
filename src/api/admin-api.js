import axios from "axios";
import { BASE_URL } from "./constant";

// GET MEAL
export const getAdminMealAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/meal`, {
    token,
  });
};

// POST ORDER DELIVER
export const postAdminOrderDeliverAPI = async (orderId, riderId, token) => {
  return await axios.post(
    `${BASE_URL}/admin/order/${orderId}/deliver/${riderId}`,
    {
      token,
      riderId,
    }
  );
};

// POST ORDER PREPARE
export const postAdminOrderPrepareAPI = async (orderId, partnerId, token) => {
  return await axios.post(
    `${BASE_URL}/admin/order/${orderId}/prepare/${partnerId}`,
    {
      token,
      partnerId,
    }
  );
};

// ORDER ALL
export const getAdminOrderAllAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/all`, {
    token,
  });
};

// ORDER COMPLETE
export const getAdminOrderCompleteAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/complete`, {
    token,
  });
};

// ORDER DELIVERY COMPLETE
export const getAdminOrderDeliveryCompleteAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/delivery-complete`, {
    token,
  });
};

// ORDER ON DELIVERY
export const getAdminOrderOnDeliveryAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/on-delivery`, {
    token,
  });
};

// ORDER PENDING
export const getAdminOrderPendingAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/pending`, {
    token,
  });
};

// ORDER PREPARED
export const getAdminOrderPreparedAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/prepared`, {
    token,
  });
};

// ORDER READY TO DELIVER
export const getAdminOrderReadyToDeliverAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/ready-to-deliver`, {
    token,
  });
};

// ADMIN USER
export const getAdminUserAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/user`, {
    token,
  });
};
