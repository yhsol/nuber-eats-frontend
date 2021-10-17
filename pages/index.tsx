import { useReactiveVar } from "@apollo/client";
import type { NextPage } from "next";
import Link from "next/link";
import { isLoggedInVar } from "../apollo/reactive-variables/auth";

const Home: NextPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <>
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
