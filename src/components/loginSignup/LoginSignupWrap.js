import React from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useCookies } from "react-cookie";

const LoginSignupWrap = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["connect.sid"]);
  // console.log(setCookie);

  return (
    <>
      //!nav바와 헤더부분을 넣을건지 말건지
      <h2>Welcome to Tuning</h2>
      <GoogleLoginButton
        onClick={() => {
          window.location.href =
            "https://accounts.google.com/o/oauth2/auth?client_id=603162325798-hb44n9gjugoc6aoinmb0964ovrqi8uqe.apps.googleusercontent.com&redirect_uri=https://www.myspaceti.me/api/google_callback&scope=https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&response_type=code&access_type=offline";
        }}
      ></GoogleLoginButton>
    </>
  );
};
export default LoginSignupWrap;
