//import userSchema from "../models/userSchema";
export function getadmin(req,res){

    res.render('adminlogin')
}
export function adduser(req,res){

    res.render('adduser')/admin/adminedit
}
let admin={
    Name:"risvan",
    Email:'risvan@gmail.com',
    Password:'1234'
}
export function postadmin(req,res,next){
    console.log(req.body);
    
    console.log(admin.Password)
    console.log(req.body.Password)
    console.log(req.body.Name)


    if (req.body.Email===admin.Email && req.body.Name===admin.Name && req.body.Password===admin.Password) {
        console.log("success");
        res.render('adminhome')
    } else {
        console.log("failed");
        res.redirect('admin')
        
    }
   
}
export function adminhome(req,res){

    res.render('adminhome')
}
export function adminedit(req,res){

    res.render('adminedit')
}


