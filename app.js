const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const router = require("./routes/blogRoutes");
var app = express();

//mongoDb connection
const dbUrl =
  "mongodb+srv://Yamina:Yamina2005@cluster0.ygonf.mongodb.net/nodejs-project?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbUrl)
  .then((result) => {
    console.log("Db connected");
    console.log("port listening on 3000");
    app.listen(3000);
  })
  .catch((err) => {
    console.log("error:", err);
  });
app.set("view engine", "ejs");
app.use((req, res, next) => {
  console.log("MiddleWare Started");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);
  next(); //go to next middleware
});

app.use((req, res, next) => {
  console.log("The Next Middleware");
  next();
});
//to find files inside the public folder without specifing the entire path
app.use(express.static("public"));
app.use(express.static('views/assets'));
app.use(express.urlencoded({ extended: true }));
//middleware is viewing the request.body & this works to navigate all url.

//to display in home page

// app.get("/", (req, res) => {
//   // res.sendFile("./views/index.html", { root: __dirname })
//   // res.render("./blogs/ejsIndex");
//   const blogs = [
//     {
//       title: "Atomic Habits",
//       snippet: "An Easy and Prover way to Build Good Habits",
//     },
//     {
//       title: "The Alchemist",
//       snippet: "A Fable about following your dream",
//     },
//     {
//       title: "Ikigai",
//       snippet: "A Japanese secret to a long and happy life",
//     }
//   ];
//   res.render("./blogs/ejsIndex", { blogs , title:"home"});
// });

//Sandbox routes

// app.get("/add-blogs", (req, res) => {
//   const Dbblogs = new Blog({
//     title: "The psychology of money",
//     snippet: "Timeless lessons on wealth,greed and happiness",
//     body: "Explores how people's emotions,experiences and background influence in their financial decision",
//   });
//   Dbblogs.save()
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/",(req,res)=>{
  res.redirect("/blogs");
})
app.use("/blogs", router);

app.get("/about", (req, res) => {
  //     res.sendFile("./blogs/ejsAbout", { root: __dirname })
  res.render("./blogs/ejsAbout.ejs",{title:'About Us'});
});

// app.get('/404', (req, res) => {
//     res.sendFile("./views/404.html", { root: __dirname })
// })

app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});
