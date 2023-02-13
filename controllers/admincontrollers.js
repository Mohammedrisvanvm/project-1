import createDocument from "../models/inserttodb.js";
import { users } from "../models/schemaUser.js";
import { search } from "../models/search.js";

var adminsession;
var searchData;
export async function getadmin(req, res) {
  
  if (req.session.admin) {

    let userinfo = await users.find().lean();
    console.log(searchData);
    if (searchData == null) {
      res.render("adminhome", { userinfo });
    } else {
      userinfo = searchData;
      res.render("adminhome", { userinfo });
      searchData = null;
    }
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
  Name: "admin@gmail.com",
  Email: "admin@gmail.com",
  Password: "admin@gmail.com",
};
export async function postadmin(req, res, next) {
  const { Name, Email, Password } = req.body;
  if (req.body.Email === admin.Email && req.body.Password === admin.Password) {
    
    req.session.admin= req.body.Email;
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
  users.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
    if (err) {
      console.log("not get");
      next(err);
    } else {
      console.log("updated successfullyyy");
      res.redirect("/admin");
    }
  });
}
export function userdelete(req, res) {
  users.findByIdAndDelete({ _id: req.params.id }, req.body, (err, data) => {
    if (err) {
      console.log("not get");
      next(err);
    } else {
      console.log("deleted successfullyyy");
      res.redirect("/admin");
    }
  });
}

export async function adminsearch(req, res) {
  //console.log(req.body.search);
  const result = await search(req.body.search);
  // console.log(result);
  searchData = result;

  res.redirect("/admin");
}
export function adminlogout(req, res) {
  req.session.admin=null
  console.log("hai");
  res.redirect("/admin");
}
