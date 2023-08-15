import express from "express"
import { addPfp } from "../controllers/user.js"

const router = express.Router()

router.post("/pfp", addPfp )


export default router