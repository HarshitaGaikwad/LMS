import mongoose from "mongoose";
mongoose.connect("mongodb+srv://harshitagaikwad5151:Harhita%408642@cluster0.utqx0kd.mongodb.net/FT").then(()=>
{
    console.log("connected to database");
}).catch((err)=>
{
    console.log("error connecting to the database",err)
});