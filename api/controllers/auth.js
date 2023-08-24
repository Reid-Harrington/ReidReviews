import performQuery from "../db.js";
import bycrypt from "bcryptjs"
import  jwt  from "jsonwebtoken";
export const register = (req,res) =>
{
    //check existing user 
    const q = "SELECT * FROM users WHERE email= ? OR username = ?"

    performQuery(q,[req.body.email, req.body.username], (err,data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("User already exists")

        const salt = bycrypt.genSaltSync(10);
        const hash = bycrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES(?)"
        const values = [
            req.body.username,
            req.body.email,
            hash

        ]

        performQuery(q,[values],(err,data) => {
            if (err) return res.json(err)
            return res.status(200).json("user has been created")

        })
    })
}

export const login = (req,res) =>{
   
    const q = "SELECT * FROM users WHERE username = ?"
    performQuery(q,[req.body.username], (err, data) => {
         //check if user exists
        if (err)
        {
            return res.json(err);
        }
        if (data.length === 0) 
        {
            return res.status(404).json("User not found")
        }
        //check passowrd
        const isPass = bycrypt.compareSync(req.body.password, data[0].password);

        if (!isPass)
        {
            return res.status(400).json("Wrong Username or password")
        }

        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { password, ...other } = data[0];
        res.cookie("access_token", token, {
            httpOnly: true,
            sameSite:"none",
            secure:true,
            domain: "https://reidreviews.netlify.app",
        }).status(200).json(other);

        console.log(other)
    })
    

    
}
export const logout = (req,res) =>{

    res.clearCookie("access_token", 
    {
        sameSite:"none",
        secure: true,

    }).status(200).json("User has been logged out")
}
