import { users } from "./schemaUser.js";


//create or insert data
const createDocument = async (data) => {
  console.log(data.Name);

  try {
    const userData = new users({
      Name: data.Name,
      Email: data.Email,
      Password: data.Password,
    });
    await userData.save();
  } catch (err) {
    console.log(err);
  }
};
export default createDocument;
