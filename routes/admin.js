import Express, { Router } from "express";
import {
  adduser,
  adminedit,
  adminhome,
  adminlogout,
  adminsearch,
  getadmin,
  postadduser,
  postadmin,
  postadminedit,
  userdelete,
} from "../controllers/admincontrollers.js";

var router = Express.Router();

router.post("/", postadmin);
router.get("/", getadmin);
router.get("/adduser", adduser);
router.post("/adduser", postadduser);
router.get("/adminhome", adminhome);
router.get("/adminedit/:id", adminedit);
router.post("/adminedit/:id",postadminedit)
router.get("/delete/:id",userdelete)
router.get("/adminlogout", adminlogout);
router.post("/adminsearch",adminsearch)

export default router;
