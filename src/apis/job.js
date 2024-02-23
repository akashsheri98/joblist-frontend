//use fetch and axios to call apis
import axios from "axios";
import toast from  'react-hot-toast';
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

export const getJobDetails = async (jobId) => {
  try {
    const reqUrl = `${backendUrl}/job-description/${jobId}`; //add the url of your api here.
    const response = await axios.get(reqUrl);
    return response.data?.data;
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
    toast.success("Job details created successfully!");
    return response;
    
  } catch (error) {
    console.log(error);
    // toast with custom message
  }
};

export const updateJobPost = async(jobId, { companyName, logoUrl, title, description,}) => {
  try {
    const reqUrl = `${backendUrl}/edit/${jobId}`; //add the url of your api here.
    const reqPayload = { companyName, logoUrl, title, description ,};
    debugger;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    console.log(token);
    const response = await axios.put(reqUrl, reqPayload);
    toast.success("Job details updtated successfully!");
    return response;
    
  } catch (error) {
    console.log(error);
    // toast with custom message
  }
};