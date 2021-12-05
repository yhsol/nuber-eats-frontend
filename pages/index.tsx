import { useReactiveVar } from "@apollo/client";
import type { NextPage } from "next";
import Link from "next/link";
import { isLoggedInVar } from "../apollo/reactive-variables/auth";
import Head from "next/head";

const Home: NextPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <>
      <Head>
        <title>Nuber Eats</title>
        <meta name="viewprot" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>Hello World!</div>
      <div>
        <Link href="/posts/first-post">
          <a>first-post</a>
        </Link>
      </div>
      <div>
        <Link href="/login">
          <a>login</a>
        </Link>
      </div>
      <div>
        <Link href="/logged-out">
          <a>logged-out</a>
        </Link>
      </div>
      <div>
        <Link href="/create-account">
          <a>create-account</a>
        </Link>
      </div>

      <button onClick={() => isLoggedInVar(!isLoggedIn)}>
        toggle log in or out
      </button>
    </>
  );
};

export default Home;
