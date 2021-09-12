import { useRouter } from "next/dist/client/router";
import React from "react";
import { isLoggedInVar } from "../../apollo/reactive-variables/auth";

function LoggedOut() {
  const router = useRouter();

  const handleClick = () => {
    isLoggedInVar(true);
    router.back();
  };

  return (
    <div>
      <h1>Logged Out</h1>
      <button onClick={handleClick}>Click to login</button>
    </div>
  );
}

export default LoggedOut;
