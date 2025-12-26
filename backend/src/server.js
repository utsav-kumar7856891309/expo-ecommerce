import express from "express";
import path from "path";

import { ENV } from "./config/env.js";
const app=express();
const __dirname=path.resolve();
app.get("/api/health",(req,res)=>{
    res.status(200).send("OK");
})

if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../admin/dist")));
    app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
   });
}

app.listen(ENV.PORT,()=>{
    console.log("server is running on port 3000");
})