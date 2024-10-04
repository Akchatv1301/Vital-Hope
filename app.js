const express =require("express");
const app =express();
const mongoose =require("mongoose");
const User =require("./models/user.js");

const path =require("path");
const methodOverride= require("method-override");
const ejsMate =require("ejs-mate");

const MONGO_URL ="mongodb://127.0.0.1:27017/vitalhope";


main()
.then(()=>{
    console.log("connected to Db");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect( MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));//data body ke andar aaraha h vo parse ho paye ex show route
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
const profileRoutes = require('./routes/profile');




app.use('/', profileRoutes);




app.get("/testUser",async (req ,res)=>{
    let sampleListing =new User({
       name: "Rishav Chourasia",
       location: "bhubaneswar",
       age: 20,
       contact: 9754065656,
    })

    await sampleListing.save();
    console.log("sample was saved"); 
    res.send("succesful test");
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
})


app.listen(3000,()=>{
    console.log("listening");
});
