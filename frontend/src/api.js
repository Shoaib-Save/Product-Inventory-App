import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const getProducts = () => axios.get(API);
export const getProduct = (id) => axios.get(`${API}/${id}`);
export const createProduct = (data) => axios.post(API, data);
export const updateProduct = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API}/${id}`);
