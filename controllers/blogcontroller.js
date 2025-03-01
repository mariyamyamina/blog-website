const Blog = require("../models/blog");
const mongoose = require("mongoose");
//home page
const blog_index = (req,res)=>{
    Blog.find()
    .sort({createdAt:-1}).then((result)=>{
        res.render("blogs/ejsIndex.ejs",{title:"All Blogs",blogs : result});
        console.log("");
    })
    .catch((err)=>{
        console.log(err);
    })
};

//create page for post blogs
const blog_create_post=(req,res)=>{
    console.log(req.body);
    const post_values=new Blog(req.body);
    post_values.save()
    .then((result)=>{
         res.redirect("/")
    })
    .catch((err)=>{
        console.log(err)
    })
}

//rendering the create page
const createBlog =(req,res)=>{
    res.render("ejscreate",{title:"CreateBlogs"})
}

//get details
const blog_details=(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render("blogs/ejsdetails",{title:"Blog details",blog:result})
    })
    .catch((err)=> console.log(err));
}

//blog delete
const blog_delete=(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:"/blogs"})
    }).catch((err)=> console.log(err));
}

module.exports={blog_index,blog_create_post,createBlog,blog_details,blog_delete};