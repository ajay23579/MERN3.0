require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const connectToDatabase = require("./dataBase/index");
const Blog = require("./model/blogModel");
const {storage, multer} = require("./middleware/multerConfig");

const upload = multer({storage: storage});

connectToDatabase();

app.get("/", (req, res) => {
  res.json({
    message: "this is home page",
  });
});

app.post("/blog", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const {title, subtitle, description, image} = req.body;
  if (!title || !description || !subtitle) {
    return res.status(400).json({
      message: "please provide title, description, subtitle, image",
    });
  }

  try {
    await Blog.create({
      title: title,
      subtitle: subtitle,
      description: description,
      image: image,
    }),
      res.status(200).json({message: "The Blog Sucessfully created"});
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating blog",
      error: error.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log("starting in port 3000");
});
