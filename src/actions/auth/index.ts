import axios from "axios";
import type { z } from "zod";
import { loginSchema } from "@/zod/schema";
import { AUTH_URL } from "@/constant";

export const loginUser = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid credentials",
      details: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await axios.post(
      `${AUTH_URL}/login`,
      validatedFields.data,
      {
        withCredentials: true, // if using cookies (optional)
      }
    );

    return response.data;
  } catch (error: any) {
    return {
      error: error.response?.data?.error || "Login failed",
    };
  }
};

export const logoutUser = async () => {
  await axios.post(
    `${AUTH_URL}/logout`,
    {},
    {
      withCredentials: true,
    }
  );
  // No need to clear token manually - handled by server
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${AUTH_URL}/me`, {
      withCredentials: true,
      validateStatus: () => true,
    });

    if (response.status >= 400) {
      return { error: response.data?.error || "Unauthorized" };
    }

    return { user: response.data };
  } catch (error) {
    return { error: "Network error" };
  }
};

export const verifyAuth = async () => {
  const { user, error } = await getCurrentUser();
  return { isAuthenticated: !error, user };
};
