import styled from "styled-components";
import { useGlobalContext } from "../../../Context/store";
import { BlackLText, HeyComponent } from "@/components/heyComponent";
import { fetchUserData } from "../../../Context/contextAuthFunctions";
import cookie from "cookie";
import { GetServerSidePropsContext } from "next";
import { BlackMText, GreyMText } from "@/components/textsAndSizes";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const MyAccountButton = styled.button`
  color: #ffffff;
  padding: 1rem 0 1rem 0;
  font-size: 1.2rem;
  width: 70%;
  height: max-content;
  margin-top: 10px;
  background-color: #c8161d;
  grid-row: 4/5;
  place-self: center;
  place-items: center;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    opacity: 0.6;
  }
`;

const MyAccountContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 1rem;
  margin-top: 100px;
  margin-bottom: 100px;

  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.225) 0px 5px 15px;
`;

const MyDataContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  align-content: start;
`;

const MyAccountParams = styled.p`
  color: #000000;
  align-self: start;
  font-size: 22px;
  margin: 5px;
`;

const MyAccountInput = styled.input`
  color: #666666;
  padding: 5px;
  font-size: 22px;
  width: calc(100% - 20px);
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookiesToken = context.req.headers.cookie || "";
  const parsedCookies = cookie.parse(cookiesToken);
  const authToken = parsedCookies.authToken;

  if (!authToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  let userServerPropsResponse;

  try {
    userServerPropsResponse = await fetchUserData(authToken);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: {
      userData: userServerPropsResponse || null,
    },
  };
}

const MyAccount = ({ userData }: any) => {
  const [firstName, setFirstName] = useState(userData.first_name);
  const [lastName, setLastName] = useState(userData.last_name);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState("");

  const router = useRouter();

  const updateValues = async () => {
    axios.patch(
      `https://x8ki-letl-twmt.n7.xano.io/api:pXhZqBYW/user/${userData.id}`,
      {
        first_name: firstName,
        last_name: lastName,
        email,
      }
    );
    router.reload();
  };

  return (
    <>
      <MyAccountContainer>
        <HeyComponent firstName={userData.first_name} fromMyAccount={true} />
        <MyDataContainer>
          <MyAccountParams>First Name:</MyAccountParams>
          <MyAccountInput
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </MyDataContainer>
        <MyDataContainer>
          <MyAccountParams>Last Name:</MyAccountParams>
          <MyAccountInput
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </MyDataContainer>
        <MyDataContainer>
          <MyAccountParams>Email:</MyAccountParams>
          <MyAccountInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </MyDataContainer>
        <MyDataContainer>
          <MyAccountParams>Password:</MyAccountParams>
          <MyAccountInput
            type="password"
            value={password}
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />
        </MyDataContainer>

        <MyAccountButton onClick={updateValues}>Change</MyAccountButton>
      </MyAccountContainer>
    </>
  );
};

export default MyAccount;
