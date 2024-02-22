import React from "react";
import  Login  from "../../components/Login/Login";
import loginImage from "../../assets/images/login.png";

function LoginPage ()  {
    return (
        <div style={{ display: "flex" }}>
            <Login />
            <img
                style={{ maxHeight: "100vh", width: "50vw" }}
                src={loginImage}
                alt="Login cover"
            />
        </div>
    )
}

export default LoginPage;