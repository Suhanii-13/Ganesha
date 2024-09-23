const express = require ("express");
const app = express();
const port = 8080;
app.set("view engin" , "ejs");

app.use(express.static("public"));

app.get("/" , (req,res)=>{
    res.render("index.ejs");
});

app.listen(port,(req,res)=>{
    console.log(`app is listning on ${port}` )
})

