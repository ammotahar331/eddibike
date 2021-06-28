import React from "react";

import Login from "@modules/Login";

interface Props {
  title: string;
}

const MyAccount: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Login />
    </>
  );
};

export default MyAccount;
