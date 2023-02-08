import createDocument from "../models/inserttodb.js";
import { users } from "../models/schemaUser.js";

var session;

export async function getadmin(req, res) {
  session = req.session;
  if (session.Emailid) {
    const userinfo = await users.findOne()
    res.render("adminhome",{userinfo});
  } else {
    res.render("adminlogin");
  }
}
export function adduser(req, res) {
 

  res.render("adduser");
}
export function postadduser(req,res){
  console.log(req.body);
  createDocument(req.body)

  res.redirect("/admin")
}
let admin = {
  Name: "risvan",
  Email: "risvan@gmail.com",
  Password: "1234",
};
export async function postadmin(req, res, next) {
  
  const userinfo = await users.find()

  const { Name, Email, Password } = req.body;
  if (req.body.Email === admin.Email && req.body.Password === admin.Password) {
    session = req.session;
    session.Emailid = req.body.Email;

    console.log(200, "success");
    res.render("adminhome", { userinfo });
  } else {
    console.log("failed");
    res.redirect("admin");
  }
}
export async function adminhome(req, res) {
  const userinfo = await users.find()
  res.redirect("/submit",{userinfo});
}
export function adminedit(req, res) {
  res.render("adminedit");
}
export function adminlogout(req, res) {
  req.session.destroy();
  res.redirect("/admin");
}
