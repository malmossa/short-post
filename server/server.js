require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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

// Get one post
app.get("/api/posts/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      postTile: "Hi",
      postMessage: "Hello there!!",
    },
  });
});

// Create a post
app.post("/api/posts", (req, res) => {
  console.log(req.body);
  res.send("posr was created.");
});

// Update a post
app.put("/api/posts/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send("post was updated.");
});

// Delete a post
app.delete("/api/posts/:id", (req, res) => {
  console.log(req.params.id);
  res.send("Post was deleted");
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
