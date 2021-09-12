import { useReactiveVar } from "@apollo/client";
import type { NextPage } from "next";
import Link from "next/link";
import { isLoggedInVar } from "../apollo/reactive-variables/auth";

const Home: NextPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <>
      <div>Hello World!</div>
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
      {isLoggedIn ? <div>is logged in</div> : <div>is logged out</div>}

      <button onClick={() => isLoggedInVar(!isLoggedIn)}>
        toggle log in or out
      </button>
    </>
  );
};

export default Home;
