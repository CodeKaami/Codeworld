const express = require("express");
require("./db/conn");
const User = require("./models/userdata") 
const app = express();
const path = require('path');
const hbs = require('hbs');
// setting the path for static way
const staticpath = path.join(__dirname, "../public")

const templatespath = path.join(__dirname, "../templates/views")
const  partialspath  = path.join(__dirname, "../templates/partials")
// midelwire
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs");
app.set("views",templatespath)
hbs.registerPartials(partialspath) 



// db connection file require
const port = process.env.PORT || 8000;


// routing part first step
// app,get(path , callback)

app.get("/",(req ,res) =>{
res.render("index");
})

// app.get("/contact",(req ,res) =>{
//     res.render("contact");
//     })
app.post("/contact", async (req ,res) =>{
  try {
    // res.send(req.body);
    const userdat = new User(req.body);
    await userdat.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(500).send(error);
  }
})
// app.get("/about",(req ,res) =>{
//     res.send("hii i  am about and this is a testing");
//     })

// server creat 
// app.get(port , callbacdck )

app.listen(port,()=>{
console.log(`server is running at port no ${port}`)
})