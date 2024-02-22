//use fetch and axios to call apis
import React from "react";
import axios from "axios";
import toast from  'react-hot-toast';
// eslint-disable-next-line no-undef
const backendUrl = process.env.REACT_APP_BACKEND_URL;
// api
export const registerUser = async ({ name, email, mobile, password }) => {
  try {

    const reqUrl = `${backendUrl}/auth/register`;
    const reqPayload = { name, email, mobile, password };
    const response = await axios.post(reqUrl, reqPayload);
    
    return response.data;
  } catch (error) {
    console.log(error);
    // toast with custom message
    toast.error(<div>Invalid Or badrequest</div>);
  }
};

// api
export const loginUser = async ({ email, password }) => {
  try {
    const reqUrl = `${backendUrl}/auth/login`; //add the url of your api here.
    const reqPayload = { email, password };
    const response = await axios.post(reqUrl, reqPayload);
    
    return response.data;
  } catch (error) {
    toast.error(<div>Invalid Or badrequest</div>);
  }
};
