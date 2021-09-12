import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { isLoggedInVar } from "../../apollo/reactive-variables/auth";

const FirstPost: NextPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const router = useRouter();

  if (!isLoggedIn) {
    // 로그아웃 페이지로 이동? 아니면 로그아웃 페이지를 렌더?
    router.push("/logged-out");
  }

  return (
    <>
      <div className="bg-blue-500">First Post</div>
      <Link href="/">Back to home</Link>
    </>
  );
};

export default FirstPost;
