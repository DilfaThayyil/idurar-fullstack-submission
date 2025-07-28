import axios from "axios";
import { RegisterCredentials, LoginCredentials } from "@/types/auth";
const BASEURL = "/api/auth";

const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error) && error.response?.data?.message) {
    return error.response.data.message;
  }
  return "An unexpected error occurred";
};

export const registerUser = async (credentials: RegisterCredentials) => {
  try {
    const response = await axios.post(`${BASEURL}/register`, credentials, {
      withCredentials: true
    });
    return response.data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};

export const loginUser = async (credentials: LoginCredentials) => {
  try {
    const response = await axios.post(`${BASEURL}/login`, credentials, {
      withCredentials: true
    });
    return response.data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(
      `${BASEURL}/logout`,
      {},
      {
        withCredentials: true
      }
    );
    return response.data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};
