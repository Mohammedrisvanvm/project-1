import mongoose from "mongoose";



 function dbConnect() {
    mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb://127.0.0.1:27017/crudApp")
    .then(console.log("db connected  !!!!"))
    .catch((err) => console.log(err));
}
export default dbConnect
