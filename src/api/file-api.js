import axios from "axios";
import { BASE_URL } from "./constant";

// DOWNLOAD FILE
export const getDownloadFileAPI = async (fileName) => {
  return await axios.get(`${BASE_URL}/file/downloadFile/${fileName}`, {
    fileName,
  });
};

// UPLOAD FILE
export const postUploadFileAPI = async (fileName) => {
  return await axios.post(`${BASE_URL}/file/uploadFile`, {
    fileName,
  });
};

// UPLOAD MULTIPLE FILES
export const postMultipleUploadFilesAPI = async (fileName) => {
  return await axios.post(`${BASE_URL}/file/uploadMultipleFiles`, {
    fileName,
  });
};
