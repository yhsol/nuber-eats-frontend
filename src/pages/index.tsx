import { useReactiveVar } from "@apollo/client";
import type { NextPage } from "next";
import { isLoggedInVar } from "../network/apollo/reactive-variables/auth";
import Head from "next/head";
import { useEffect, useState } from "react";
import LoggedOutPage from "./logged-out";
import LoggedInPage from "./logged-in";

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getIsLoggedIn = useReactiveVar(isLoggedInVar);

  // 마운트 된 뒤에 localStorage 조회를 하기 위해 useEffect 안에서 다시 처리함.
  // 그렇지 않을 경우 server side 를 false 로 설정해야 마운트 되기 전 조회로 인한 에러 막을 수 있음.
  useEffect(() => {
    setIsLoggedIn(getIsLoggedIn);
  }, [getIsLoggedIn]);
  return (
    <>
      <Head>
        <title>Nuber Eats</title>
        <meta name="viewprot" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isLoggedIn ? <LoggedInPage /> : <LoggedOutPage />}
    </>
  );
};

export default Home;
