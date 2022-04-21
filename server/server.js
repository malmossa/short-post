require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 5001;

app.get("/getallposts", (req, res) => {
  res.json({
    status: 200,
    postTilte: "Hello there",
    postMessage: "My name is Mansor",
  });
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
