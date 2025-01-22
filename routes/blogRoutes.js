const express=require("express");
const router=express.Router();
const Blog=require("../models/blog");
const blog_index = require("../controllers/blogcontroller");

router.get("/",blog_index);

module.exports=router;