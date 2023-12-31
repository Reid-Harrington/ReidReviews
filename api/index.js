import express from "express";
import  postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();


app.use(express.json())
app.use(
    cors({
      origin: "https://reidreviews.netlify.app", // Replace with the correct URL of your frontend
      credentials: true, // Enable credentials (cookies, authorization headers, etc.)
    })
  );
  

app.use(cookieParser());
/*/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
/*/
app.post("/api/upload", function (req, res) {
  const imgLink = req.body.imgLink;
  res.status(200).json(imgLink);

});

app.use("/api/auth/", authRoutes)
app.use("/api/users/", userRoutes)
app.use("/api/posts/", postRoutes)




app.listen(8800, ()=>{
    console.log("connected");

})