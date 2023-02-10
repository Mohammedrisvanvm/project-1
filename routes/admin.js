import Express, { Router } from "express";
import {
  adduser,
  adminedit,
  adminhome,
  adminlogout,
  getadmin,
  postadduser,
  postadmin,
  postadminedit,
} from "../controllers/admincontrollers.js";

var router = Express.Router();

router.post("/", postadmin);
router.get("/", getadmin);
router.get("/adduser", adduser);
router.post("/adduser", postadduser);
router.get("/adminhome", adminhome);
router.get("/adminedit", adminedit);
router.post("/adminedit",postadminedit)
router.get("/adminlogout", adminlogout);

export default router;
