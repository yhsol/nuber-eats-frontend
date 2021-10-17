import { useRouter } from "next/dist/client/router";
import React from "react";

function LoggedOut() {
  const router = useRouter();

  return <div>Logout</div>;
}

export default LoggedOut;
