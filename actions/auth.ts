"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/libs/supabase/server";
import getProfile from "./get-profile";
import axios from "axios";

export async function login(email: string, password: string) {
  const supabase = createClient();

  const loginInfo = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signInWithPassword(loginInfo);

  if (error) {
    return false;
  }
  return true;
}

export async function signup(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });

  if (error) {
    return console.log(error.cause, error.message);
  } else {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/profile`, data);
  }

  revalidatePath("/account/login", "layout");
  redirect("/account/login");
}

export async function resetPassword(email: string) {
  const supabase = createClient();
  const profile = await getProfile(email);
  if (profile) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      return 3;
    }
    return 1;
  } else {
    return 2;
  }
}
