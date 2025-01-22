const Blog = require("../models/blog");
const blog_index = (req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render("blogs/ejsIndex.ejs",{title:"All Blogs",blogs : result});
        console.log("");
    })
    .catch((err)=>{
        console.log(err);
    })


};

module.exports=blog_index;