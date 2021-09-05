import { NextPage } from "next";
import Link from "next/link";

const FirstPost: NextPage = () => {
  return (
    <>
      <div className="bg-blue-500">First Post</div>
      <Link href="/">Back to home</Link>
    </>
  );
};

export default FirstPost;
