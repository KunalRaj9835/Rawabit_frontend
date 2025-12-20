import { cookies } from "next/headers";

export type Lang = "en" | "sa";

export async function getServerLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  return cookieLang === "sa" ? "sa" : "en";
}
