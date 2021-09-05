import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div>Hello World!</div>
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
    </>
  );
};

export default Home;
