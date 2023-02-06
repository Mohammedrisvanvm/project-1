

export function getuser(req, res) {
  console.log("11");

  res.render("login");
}

let user = {
  Email: "faizan@gmail.com",
  Password: "9876",
};

export function postuser(req, res) {
  console.log(req.body);
  if (req.body.Email === user.Email && req.body.Password === user.Password) {
    res.render("index");
    console.log("10");
  } else {
    console.log("00");
    res.redirect("/");
  }
}
export function getsignup(req, res) {
  res.render("signup");
}
export function postsignup(req, res) {
  console.log(req.body);

  adduser(req.body);

  res.render("signup");
}
export function postlogin(req, res) {
  console.log(req.body);
  res.render("login");
}

export function userlogout(req, res) {
  res.render("login");
}

// function adduser(data) {
//     console.log('hai');
//     const user= new User(data)
//      user.save().then(()=>{
//         console.log("user saved");
//     })
// }
