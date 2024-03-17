const express=require("express")
const cors=require("cors")
const collection=require("./Mongodb")
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.post("/",async(req,res)=>{
   
    

    await collection.insertMany(req.body);

})

app.listen(8000,()=>{
    console.log("port connected")
})
