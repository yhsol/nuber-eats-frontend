import { useQuery } from "@apollo/client";
import Link from "next/link";
import ErrorPage from "../../components/error/ErrorPage";
import Loading from "../../components/loading/Loading";
import { isLoggedInVar } from "../../network/apollo/reactive-variables/auth";
import { ME_QUERY } from "../../network/graphql/query/me";
import { Me } from "../../network/graphql/__generated__/Me";

const LoggedInPage = () => {
  const { data, loading, error } = useQuery<Me>(ME_QUERY, {
    skip: !isLoggedInVar(),
  });

  if (loading) {
    return <Loading />;
  }

  if (!data && error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div>{data?.me.role}</div>
    </>
  );
};

export default LoggedInPage;
