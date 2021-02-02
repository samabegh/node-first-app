const express = require("express");
const app=express();

const PORT=4300;
// app.listen(PORT, function()
// {
//     console.log("server is listening at PORT",PORT)
// })
app.listen(PORT, ()=>
{
    console.log(`server is listening at PORT ${PORT}`)})
    app.get("/", function(req,res){
        console.log("Server Listening at PORT"+PORT)
    }
    )
