import axios from "axios";
import type { z } from "zod";
import { loginSchema } from "@/zod/schema";
import { LOGIN_URL } from "@/constant";


export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid credentials",
      details: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await axios.post(
      `${LOGIN_URL}/login`,
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
