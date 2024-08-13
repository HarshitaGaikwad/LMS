import express from "express";
import User from '../models/UserSchema.js';
import bcrypt from 'bcrypt';
import { homeController ,register,signIn} from "../Controller/homeController.js";
// import cors from 'cors'; // Import cors

const router = express.Router();
const app= express();

// app.use(cors());
// app.use(express.json());

// Home page
router.get("/home", homeController)

//signUp page 
router.post("/register",register);


// signIn page
router.post("/signIn",signIn );

export default router;