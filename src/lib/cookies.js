import { cookies } from "next/headers";

export async function setCookie(name, value, options = {}) {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    ...options,
  };

  const cookieStore = await cookies();
  cookieStore.set(name, value, cookieOptions);
}

export function getCookie(name) {
  const cookie = cookies().get(name);
  return cookie?.value || null;
}
