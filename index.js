const express = require('express');

const app = express();
const multer = require('multer');
const PORT = process.env.PORT || 5005;
const path = require("path");
require("./src/db/conn");
const Onboard = require("./src/models/schema");
const static_path = path.join(__dirname, "/public");
const static_pa = path.join(__dirname, "/uploads");
const pic = app.use(express.static(static_pa));
app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send("onboarding form");
});
const  Storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    },
});
const upload = multer({
    storage:Storage
}).single('picture')
app.post('/viewprofile',upload, async (req, res) => {
        const profile = new Onboard({
            picture:req.file.filename,
            fullname: req.body.fullname,
            headline: req.body.headline,
            companyname: req.body.companyname,
            position:req.body.position,
            dateofjoin: req.body.dateofjoin,
            dateofresign: req.body.dateofresign,
            workdescription: req.body.workdescription,
            usedskills: req.body.usedskills,
            skills: req.body.skills,
            yearofexperience: req.body. yearofexperience,
            projecttitle: req.body.projecttitle,
            projecturl: req.body.projecturl,
            projectdescription: req.body.projectdescription,
            projectduration: req.body.projectduration,
            licensen: req.body.licensen,
            organization: req.body.organization,
            link: req.body.link,
            issuedate: req.body.issuedate,
            
            course: req.body.course,
            
            courseorganization: req.body.courseorganization,
            email: req.body.email,
            phone:req.body.phone,
            skype:req.body.skype,
        });
         profile.save()
         .then(result=>{console.log(result);res.status(201).json({result})})
.catch ((error) =>{
    res.status(400).send(error);
}
)})
app.get('/view', async (req, res) => {
    const Mydata =await Onboard.find({});
    res.status(200).json ({Mydata}) ;


});
app.listen(PORT, () => {
    console.log(`${PORT}server is running`);
  })
