import performQuery from "../db.js"
import  jwt  from "jsonwebtoken";


export const addPfp = (req,res) => {
    const token = req.cookies.access_token
    if (!token)
    {
        return res.status(401).json("not authenticated")
    }
    jwt.verify(token, "jwtkey", (err,userInfo) => {
    if(err) return res.status(403).json("token is not valid")
    
    const q = "UPDATE users SET img = ? WHERE id = ?"
    console.log([req.body.uimg][0])
    performQuery(q,[req.body.uimg, req.body.id], (err,data) =>{
        if (err)
        {
            console.log(err);
            return res.status(500).json(err)
        } 
        return res.status(200).json("user Img uploaded")
    })
})
}