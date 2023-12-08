import axios from "axios";
import { getCookie } from "cookies-next";

export async function fetchUserData() {
  const authToken = getCookie("authToken");
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
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}
