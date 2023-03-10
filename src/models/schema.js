const mongoose = require("mongoose");
const onboardingSchema =new mongoose.Schema({
     picture:{
        data:Buffer,
    contentType:String
     },
    fullname:{
        type:String,
      required:true
    },
    headline:{
        type:String,
        required:true
    },
    companyname:{
        type:String,
         required:true
    },
    position:{
        type:String,
         required:true
    },
    dateofjoin:{
        type:String,
         required:true,
        
    },
    dateofresign:{
        type:String,
         required:true,
        
    },
    workdescription:{
        type:String
    },
    usedskills:{
        type:String
    },
    skills:{
        type:String,
         required:true
    },
    yearofexperience:{
        type:Number
    },
    projecttitle:{
        type:String,
         required:true
    },
    projecturl:{
        type:String,
         required:true
    },
    projectdescription:{
        type:String,
         required:true
    },
    projectduration:{
        type:Number,
         required:true
    },
    licensename:{
        type:String
    },
    organization:{
        type:String,
         required:true
    },
    link:{
        type:Array,
         required:true
    },
    issuedate:{
        type:String,
         required:true
    },
    course:{
        type:String
    },
    courseorganization:{
        type:String,
         required:true
    },
    email:{
        type:String,
        required:true,
         unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    skype:{
        type:String,
         required:true
    }



})
 
module.exports = mongoose.model("Onboard",onboardingSchema);