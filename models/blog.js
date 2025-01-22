const request  = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const blogSchema = new schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
//creating mongoose model for this schema
const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;
