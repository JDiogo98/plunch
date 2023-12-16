import axios from "axios";
import { CookieValueTypes, getCookie } from "cookies-next";
import { useGlobalContext } from "./store";

export async function fetchUserData(authToken: CookieValueTypes) {
  try {
    const authResponse = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:pXhZqBYW/auth/me",
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log(authResponse.data);
    return authResponse.data;
  } catch (error) {
    console.error("Error at getting UserData", error);
  }
}

export async function updatePlans(
  user_id: string,
  list_id: string,
  updatePlans: any
) {
  const authToken = getCookie("authToken");


  if (updatePlans == null)  {
    return
  }

  try {
    await axios.patch(
      `https://x8ki-letl-twmt.n7.xano.io/api:pXhZqBYW/users_plans/${list_id}`,
      {
        user_plans_id: list_id,
        user_id: user_id,
        input_plans: updatePlans,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
  } catch (error) {
    console.error("Error at updating user plans", error);
    throw error;
  }
}
