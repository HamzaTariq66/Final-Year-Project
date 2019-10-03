import axios from "axios";
export const contact = contactUser => {
  return axios
    .post("http://localhost:3000/api/contacts/submit", {
      full_name: contactUser.full_name,
      email: contactUser.email,
      subject: contactUser.subject,
      message: contactUser.message
    })
    .then(response => {
      console.log("contacted.");
    });
};
