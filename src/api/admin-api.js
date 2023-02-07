import axios from "axios"
import { BASE_URL } from "./constant"

// GET MEAL
export const getAdminMealAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/meal`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// POST ORDER DELIVER
//assign rider ito order
export const postAdminOrderDeliverAPI = async (token, orderId, riderId) => {
  return await axios.get(
    `${BASE_URL}/admin/order/${orderId}/deliver/${riderId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
}

// POST ORDER PREPARE
//assign partner into order
export const postAdminOrderPrepareAPI = async (token, orderId, partnerId) => {
  return await axios.get(
    `${BASE_URL}/admin/order/${orderId}/prepare/${partnerId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
}

// ORDER ALL
export const getAdminOrderAllAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/all`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER COMPLETE
//list all complete order
export const getAdminOrderCompleteAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/complete`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER DELIVERY COMPLETE
export const getAdminOrderDeliveryCompleteAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/delivery-complete`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER ON DELIVERY
export const getAdminOrderOnDeliveryAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/on-delivery`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER PENDING
export const getAdminOrderPendingAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/pending`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER PREPARED
export const getAdminUserCountAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/user/count`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER READY TO DELIVER
export const getAdminOrderReadyToDeliverAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/order/ready-to-deliver`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ADMIN USER
export const getAdminUserAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/user`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export const getAdminUserActiveAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/admin/user/${id}/activate`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
export const getAdminPartnerAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/partner`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export const getAdminPartnerActiveAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/admin/partner/${id}/activate`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export const getPartnersAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/partner`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export const getRidersAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/rider`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export const assignVolunteerAPI = async (token, id, rolecode) => {
  return await axios.get(`${BASE_URL}/admin/user/${id}/${rolecode}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
