require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 5001;

//Get all posts
app.get("/api/posts", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      post1: {
        postTitle: "Hello",
        postMessage: "Hi there, my name is Mansor Almossa",
      },
      post2: {
        postTitle: "Hello",
        postMessage: "Hi there, my name is Mansor Almossa",
      },
    },
  });
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
