import createDocument from "../models/inserttodb.js";
import { users } from "../models/schemaUser.js";

var session;

export async function getadmin(req, res) {
  session = req.session;
  if (session.Emailid) {
    const userinfo = await users.find().lean();
    res.render("adminhome", { userinfo });
  } else {
    res.render("adminlogin");
  }
}
export function adduser(req, res) {
  res.render("adduser");
}
export function postadduser(req, res) {
  console.log(req.body);
  createDocument(req.body);

  res.redirect("/admin");
}
let admin = {
  Name: "risvan",
  Email: "risvan@gmail.com",
  Password: "1234",
};
export async function postadmin(req, res, next) {
  const { Name, Email, Password } = req.body;
  if (req.body.Email === admin.Email && req.body.Password === admin.Password) {
    session = req.session;
    session.Emailid = req.body.Email;
    const userinfo = await users.find();

    console.log(200, "success");
    res.render("adminhome", { userinfo });
  } else {
    console.log("failed");
    res.redirect("admin");
  }
}
export async function adminhome(req, res) {
  const userinfo = await users.find().lean();
  res.redirect("/admin", { userinfo });
}
export function adminedit(req, res, next) {
  console.log(req.params.id);
  users.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        console.log("not get");
        next(err);
      } else {
        res.render("adminedit", { data });
      }
    }
  );
}
export function postadminedit(req, res) {
  users.findByIdAndUpdate
    ({ _id: req.params.id },
    req.body,
    (err, data) => {
      if (err) {
        console.log("not get");
        next(err);
      } else {
        console.log("updated successfullyyy");
        res.redirect("/admin");
      }
    })
  ;
}
export function userdelete(req, res) {
  users.findByIdAndDelete
    ({ _id: req.params.id },
    req.body,
    (err, data) => {
      if (err) {
        console.log("not get");
        next(err);
      } else {
        console.log("deleted successfullyyy");
        res.redirect("/admin");
      }
    })
  ;
}
export function adminlogout(req, res) {
  req.session.destroy();
  res.redirect("/admin");
}
