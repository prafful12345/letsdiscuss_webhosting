const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    full_name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String, 
        required:true
    },
    comfirm_password: {
        type:String,
        required:true
    }
    
})

//create collection
const Register = new mongoose.model("Register", employeeSchema);
module.exports= Register;