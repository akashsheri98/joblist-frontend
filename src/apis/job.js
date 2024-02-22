//use fetch and axios to call apis
import axios from "axios";
// eslint-disable-next-line no-undef
const backendUrl = `${process.env.REACT_APP_BACKEND_URL}/job`;
//all job api
export const getAllJobs = ({ skills, title }) => {
  try {
    const reqUrl = `${backendUrl}/all?skills=${skills}&title=${title}`; //add the url of your api here.
    const response = axios.get(reqUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
    // toast with custom message
  }
};

export const getJobDetails = (jobId) => {
  try {
    const reqUrl = `${backendUrl}/job-description/${jobId}`; //add the url of your api here.
    const response = axios.get(reqUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
    // toast with custom message
  }
};

export const createJobPost = async({ companyName, logoUrl, title, description }) => {
  try {
    const reqUrl = `${backendUrl}/create`; //add the url of your api here.
    const reqPayload = { companyName, logoUrl, title, description };
    
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    console.log(token);
    const response = await axios.post(reqUrl, reqPayload);
    return response;

  } catch (error) {
    console.log(error);
    // toast with custom message
  }
};
