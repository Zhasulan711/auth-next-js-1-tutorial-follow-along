"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "invalid fields!",
    };
    // return Response.json("");    for API
  }
  return {
    success: "Email sent!",
  };
};
