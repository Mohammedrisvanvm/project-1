import express, { Router } from "express";
import {
  getsignup,
  getuser,
  postlogin,
  postsignup,
  postuser,
  userlogout,
} from "../controllers/userController.js";


var router = express.Router();

router.post("/", postuser);
router.get("/", getuser);
router.get("/signup", getsignup);
router.post("/signup", postsignup);
router.post("/login", postlogin);
router.get("/logout", userlogout);

export default router;
