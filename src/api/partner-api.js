import axios from "axios"
import { BASE_URL } from "./constant"

// GET ORDER
export const getPartnerOrderAPI = async (token) => {
  return await axios.get(`${BASE_URL}/partner/order`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER COMPLETE
export const postPartnerOrderCompleteAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/partner/order/${id}/complete`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// ORDER CREATE
export const postPartnerOrderCreateAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/partner/order/${id}/prepare`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// GET ORDER ALL
export const getPartnerOrderAllAPI = async (token, id) => {
  return await axios.get(`${BASE_URL}/partner/order/all`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
