// import { ApiResponse } from "../_interface/api";

const API_SERVER = "http://localhost:3001/";

export const get = async <T>(path: string): Promise<T> => {
  console.log(`${API_SERVER}${path}`);
  const response = await fetch(`${API_SERVER}${path}`);
  return response.json();
};

export const post = async <T>(path: string, data: any): Promise<T> => {
  const res = await fetch(`${API_SERVER}${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`POST ${path} failed: ${res.statusText}`);
  }

  return res.json();
};
