import createDocument from "../models/inserttodb.js";
import { users } from "../models/schemaUser.js";

var session;
let signuperr=null
let loginerr=null

export function getuser(req, res) {
  session = req.session;
  if (session.Emailid) {
    res.render("index");
  } else {
    console.log("11");

    res.render("login",{loginerr})
    loginerr=null;
  }
}

export async function postuser(req, res) {
  console.log(req.body);

  const { Email, Password } = req.body;
  const userinfo = await users.findOne({ Email });
  console.log(userinfo);
  if (!userinfo) {
    console.log("not");
    loginerr="Email or password not exist"
  

    res.redirect("/");
  } else {
    if (Email === userinfo.Email && Password === userinfo.Password) {
      session = req.session;
      session.Emailid = req.body.Email;
      console.log(req.session);

      res.render("index");
      console.log("10");
    } else {
      console.log("00");

      res.redirect("/");
    }
  }
}
export function getsignup(req, res) {
  
  res.render("signup",{signuperr});
  signuperr=null
}

export async function postsignup(req, res) {
  console.log(req.body);
  var Email=req.body.Email
  const userinfo = await users.findOne({Email });
  if(!userinfo){
    createDocument(req.body);
    res.redirect("/");
  }
  else{
    signuperr="Email already registered"
    res.redirect("/signup")


  }
  

 

 
}
export function postlogin(req, res) {
  console.log(req.body);
  res.render("login");
}

export function userlogout(req, res) {
  req.session.destroy();
  res.redirect("/");
}
