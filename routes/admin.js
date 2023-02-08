import Express, { Router } from "express";
import {
  adduser,
  adminedit,
  adminhome,
  adminlogout,
  getadmin,
  postadduser,
  postadmin,
} from "../controllers/admincontrollers.js";

var router = Express.Router();

router.post("/submit", postadmin);
router.get("/", getadmin);
router.get("/adduser", adduser);
router.post("/adduser",postadduser);

router.get("/adminhome", adminhome);
router.get("/adminedit", adminedit);
router.get("/adminlogout",adminlogout);

export default router;
