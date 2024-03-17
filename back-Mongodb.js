const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://easwarasdf:easwarasdf@cluster0.gxxp2vi.mongodb.net/new")
.then(()=>{
    console.log("connect")
})
.catch((e)=>{
    console.log(e,"failed");
})

const newSchema=new mongoose.Schema({
    msg:{
        type:String,
        required:true
    },
    name: {  // Define the new field 'name'
        type: String,
        required: false
    }
})

const collection=mongoose.model("krithi",newSchema)
module.exports=collection