const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,            
        required: true,         
        unique: true,            
        trim: true,              
    },
    email: {
        type: String,           
        required: true,          
        unique: true,            
        trim: true,              
        lowercase: true,        
    },
    password: {
        type: String,            
        required: true,          
    },
    role_id: {
        type: String,           
        default: "user",         
        enum: ["user", "admin", "Sadmin"],  
    },
},
{
    timestamps: true,           
});


const User = model("User", userSchema);

module.exports = User;
