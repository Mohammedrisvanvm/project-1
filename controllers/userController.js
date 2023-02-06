var session;

export function getuser(req, res) {
  session = req.session;
  if (session.Emailid) {
    res.render("index");
  } else {
    console.log("11");

    res.render("login");
  }
}

let user = {
  Email: "faizan@gmail.com",
  Password: "9876",
};

export function postuser(req, res) {
  console.log(req.body);
  const { Name, Email, Password } = req.body;
  if (req.body.Email === user.Email && req.body.Password === user.Password) {
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
  req.session.destroy();
  res.redirect("/");
}