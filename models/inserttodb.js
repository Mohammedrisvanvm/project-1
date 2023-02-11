import { users } from "./schemaUser.js";


//create or insert data
const createDocument = async (data) => {
  console.log(data.Name);
  const Email=data.Email
  const userinfo = await users.findOne({Email });
  if (userinfo!=Email){
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
  }else{
    console.log("email matched")
  }
  }


 
export default createDocument;
