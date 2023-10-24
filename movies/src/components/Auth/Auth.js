import React from "react";
import AuthForm from "./AuthForm";
import { sendUserAuthRequest } from "../../api-helpers/api-helpers";

const Auth = () => {
  const getData = (data) => {
    console.log("Auth: ", data);
    sendUserAuthRequest(data.inputs, data.signup).then((res)=>
    console.timeLog(res)
    ).catch(err=>console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default Auth;
