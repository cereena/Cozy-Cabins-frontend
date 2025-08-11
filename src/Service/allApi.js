import { commonApi } from './commonApi';
import { serverURL } from './serverURL';

// Add new property
export const addPropertyAPI = async (reqbody) => {
    return await commonApi("POST", `${serverURL}/properties`, reqbody);
};

// Get all properties
export const getAllPropertiesAPI = async () => {
    return await commonApi("GET", `${serverURL}/properties`, "");
};

// Get single property
export const getPropertyByIdAPI = async (id) => {
    return await commonApi("GET", `${serverURL}/properties/${id}`);
};

// Delete property
export const deletePropertyAPI = async (id) => {
    return await commonApi("DELETE", `${serverURL}/properties/${id}`, "");
};

// Update property
export const updatePropertyAPI = async (id, reqbody) => {
    return await commonApi("PUT", `${serverURL}/properties/${id}`, reqbody);
};

// Signup
export const signupAPI = async (reqBody) => {
    return await commonApi("POST", `${serverURL}/signup`, reqBody);
};

// Login
export const loginAPI = async (reqBody) => {
    return await commonApi("POST", `${serverURL}/login`, reqBody);
};
