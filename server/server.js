require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

// importing database connection
const db = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

//Get all posts
app.get("/api/posts", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM post");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        posts: results.rows,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

// Get one post
app.get("/api/posts/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM post WHERE post_id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      data: {
        post: results.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
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
