//import userSchema from "../models/userSchema";
var session;
export function getadmin(req, res) {
  session = req.session;
  if (session.Emailid) {
    res.render("adminhome");
  } else {
    res.render("adminlogin");
  }
}
export function adduser(req, res) {
  res.render("adduser");
}
let admin = {
  Name: "risvan",
  Email: "risvan@gmail.com",
  Password: "1234",
};
export function postadmin(req, res, next) {
  console.log(req.body);

  console.log(admin.Password);
  console.log(req.body.Password);
  console.log(req.body.Name);
  const { Name, Email, Password } = req.body;
  if (req.body.Email === admin.Email && req.body.Password === admin.Password) {
    session = req.session;
    session.Emailid = req.body.Email;

    console.log("success");
    res.render("adminhome");
  } else {
    console.log("failed");
    res.redirect("admin");
  }
}
export function adminhome(req, res) {


  res.render("adminhome");
}
export function adminedit(req, res) {
  res.render("adminedit");
}
export function adminlogout(req, res) {
  req.session.destroy();
  res.redirect("/admin");
}
