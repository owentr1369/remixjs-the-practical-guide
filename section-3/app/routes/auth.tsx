import React from "react";

import authStyles from "~/styles/auth.css";
import { LinksFunction } from "@remix-run/node";
import AuthForm from "~/components/auth/AuthForm";
export const link: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];

const AuthPage = () => {
  return (
    <div>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
