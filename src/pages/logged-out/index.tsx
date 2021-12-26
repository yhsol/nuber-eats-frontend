import Link from "next/link";

const LoggedOutPage = () => {
  return (
    <>
      <div>Logged Out</div>
      <div>
        <Link href="/login">
          <a>login</a>
        </Link>
      </div>
      <div>
        <Link href="/create-account">
          <a>create-account</a>
        </Link>
      </div>
    </>
  );
};

export default LoggedOutPage;
