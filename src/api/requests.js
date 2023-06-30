import axios from "axios";

const link = "http://localhost:8888/"; // server link
const login = link + "login"; // login route
const register = link + "register"; // login route
// prettier-ignore
export const API_register = async ({companyName, companyField, companyID, email, phoneNumber, website,password,}) => {
  let response;
  await axios.post(register, {companyName,companyField,companyID,email,phoneNumber,website,password}).then((res)=>{
    response = {status: true};
  }).catch((error) => {
    if(error.message){
      if (error.response) {
        response = { error: error.response.data.error };
      } else {
        response = { error: error.message };
      }
    }else{
      response = { error: error.response.data.error };
    }
  });

  return response;
};

export const API_login = async ({ email, password }) => {
  let response;
  await axios
    .post(login, { email, password })
    .then((res) => {
      response = { field: res.data.userData.companyField.toLowerCase() };
    })
    .catch((error) => {
      if (error.message) {
        if (error.response) {
          response = { error: error.response.data.error };
        } else {
          response = { error: error.message };
        }
      } else {
        response = { error: error.response.data.error };
      }
    });
  return response;
};
