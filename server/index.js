const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config({ path: ".env" });
const Post = require("./mongodb/post.js");
const connectDB = require("./mongodb/connect.js");
const bodyParser = require("body-parser");
const dalleRoutes = require("./routes/dalleroutes.js");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());
app.use(
  cors()
);



app.use("/api/v1/dalle", dalleRoutes);






app.post("/mongo", async (req, res) => {
  // console.log(req.body);
  try {
    const { prompt, image, model } = req.body;

    const newPost = await Post.create({
      prompt,
      image,
      model,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});

app.get("/posts", async (req, res) => {
  try {
    // const posts = await Post.find({ steps: 20 });
    const posts = await Post.aggregate([{ $sample: { size: 7 } }]);

    // const posts = await Post.aggregate([
    //   { $match: { model: { $ne: "dalle" } } },
    //   { $sample: { size: 4 } },
    // ]);

    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to get posts, please try again",
    });
  }
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const posts = await Post.find({ _id: id });
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to get posts, please try again",
    });
  }
});

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
