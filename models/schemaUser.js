import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//create collection
const users = new mongoose.model("User", userSchema);

//create or insert data
const createDocument = async (data) => {
    console.log(data.Name);
 
  try {
    const userData = new users({
      Name: data.Name,
      Email:data.Email,
      Password: data.Password,
    });
    await userData.save();
  } catch (err) {
    console.log(err);
  }
};
export default createDocument
