import Express, { Router } from "express";
import {
  adduser,
  adminedit,
  adminhome,
  getadmin,
  postadmin,
} from "../controllers/admincontrollers.js";

var router = Express.Router();

router.post("/", postadmin);
router.get("/", getadmin);
router.get("/adduser", adduser);
router.post("/adminhome", adminhome);
router.get("/adminedit", adminedit);

export default router;
