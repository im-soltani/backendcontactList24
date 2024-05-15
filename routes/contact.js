const express=require("express")
const router=express.Router()
const Contact=require("../models/Contact")

//test
router.get("/",(req,res)=>{
    res.send ("test")
})
//add contact
//post
router.post("/add",async(req,res)=>{
    const {name,email,phone}=req.body
    const newContact=new Contact({
        name,
        email,
        phone
    })
   const contact=await  newContact.save()
   res.send({msg:"contact added",contact})
})
//get all

router.get("/getall",async(req,res)=>{
    const contacts=await Contact.find()
    res.send({msg:"this is all the contacts",contacts})
})
//delete
router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    const contact= await Contact.findOneAndDelete({_id:id})
    res.send({msg:"user deleted!",contact})
 
})
//edit
router.put("/edit/:id",async(req,res)=>{
    const {id}=req.params
    const contact= await Contact.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
    res.send({msg:"user edited !",contact})
})

module.exports=router