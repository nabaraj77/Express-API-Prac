const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("Server Created");
  res.end("Hello Nabaraj Dahal");
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port no 3000..");
});
