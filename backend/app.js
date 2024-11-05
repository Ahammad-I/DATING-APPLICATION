const express = require("express");
const app= express();
app.use("/h",(req,res)=>
{
    res.send("pora puka");
})
app.listen(3000,()=>
{
    console.log("ahammad");
})   