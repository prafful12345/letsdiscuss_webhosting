const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");

const Register = require("./models/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");

app.get("/",(req, res)=>{
    res.render("index");
});
app.get("/section1",(req, res)=>{
    res.render("section1");
});
app.get("/section2",(req, res)=>{
    res.render("section2");
});
app.get("/section3",(req, res)=>{
    res.render("section3");
});

app.get("/register",(req, res)=>{
    res.render("register");
})
//for creating new user in db
app.post("/register",async (req, res)=>{
    try {
        const password = req.body.password;
        const cpassword = req.body.comfirm_password;
        if(password === cpassword)
        {
           const registerEmployee = new Register({
            full_name: req.body.full_name,
            email: req.body.email,
            password: password,
            comfirm_password: cpassword 
           })
           const letsdiscuss = await registerEmployee.save();
           res.status(201).render("index");
        }
        else{
            res.send("password are not matching")
        }

    } catch (error) {
        res.status(400).send(error);
        
    }
    
})
//login validation
app.get("/login",(req, res)=>{
    res.render("login"); 
})

app.post("/login", async(req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
       
        if(useremail.password===password)
        {
            res.status(201).render("index");
        }
        else
        {
            res.send("password are not matching");
        }
    } catch (error) {
        res.status(400).send("invalid email")
        
    }
})




app.listen(port, ()=>{
    console.log('server is running  at port no 3000');
})