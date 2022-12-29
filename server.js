const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello toys app");
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is fully running on ${port}` );
});
