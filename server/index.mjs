import express from "express";
const app=express();
import dotenv from "dotenv";
dotenv.config()

const PORT= process.env.PORT||5000;


app.get('/',(req,res)=>(
    res.send("b-end")
));
app.listen(PORT, () => {
    console.log(`Server running on port "http://localhost:${PORT}`);
});
  