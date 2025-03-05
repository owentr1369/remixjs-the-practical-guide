import React from "react";

import authStyles from "~/styles/auth.css";
import { LinksFunction } from "@remix-run/node";

export const link: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];

const AuthPage = () => {
  return <div>AuthPage</div>;
};

export default AuthPage;
