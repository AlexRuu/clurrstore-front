"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/libs/supabase/server";
import getProfile from "./get-profile";

export async function login(email: string, password: string) {
  const supabase = createClient();

  const loginInfo = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signInWithPassword(loginInfo);

  if (error) {
    return false;
  } else {
    revalidatePath("/", "layout");
    redirect("/");
  }
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
        firstName: firstName,
        lastName: lastName,
      },
    },
  });

  if (error) {
    return console.log(error);
  } else {
    revalidatePath("/", "layout");
    redirect("/");
  }
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

export async function updateUser(updateInfo: any) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.updateUser({
    data: updateInfo,
  });

  if (error) {
    return console.log(error);
  } else {
    revalidatePath("/profile", "layout");
    redirect("/profile");
  }
}
