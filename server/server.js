require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
