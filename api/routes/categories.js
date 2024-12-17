const Category = require("../models/Category.js")
const express =require("express");
const router =express.Router();



router.post("/",async(req,res)=>{
    try {
        const newCategory = new Category(req.body);//input alanı içerisindeki 
        await newCategory.save();//save diyerek veritabına kaydetmesini söylüyoruz
        res.status(200).json("Item added succcessfully.")//mesjaa fırlattık
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports =router; //server içerisinde çağırmak lazım bu exportladıks