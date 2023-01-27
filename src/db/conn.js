const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
uri = "mongodb+srv://sau:JX2ppXt7t7TMa6YG@cluster0.d4vbz2e.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true,

});

// const mongo=mongoose.connect("mongodb://127.0.0.1:27017/Onboardingform",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
    
// }).then(()=>{
//     console.log(`connection successful`);
// }).catch((e)=>{
//     console.log(e);
//  });

