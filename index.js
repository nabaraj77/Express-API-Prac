const express = require("express");
const app = express();

//To show default index.html file while running the server. Code Started--- make aboutUs.html & index.html inside public Folder
app.use(express.static(`${__dirname}/public`));
//Code Completed

//Importing userRouter
const userRouter = require("./route/userRouter");
app.use("/users", userRouter);

//Requiring Body Parser
const parser = require("body-parser");
app.use(parser.json());

// app.get("/", (req, res) => {
//   console.log("Server Created");

//   res.header("Content-Type", "text-html");

//   res.statusCode = 200;
//   res.end("Hello Nabaraj Dahal");
// });

//MAKING API

app.listen(3000, "localhost", () => {
  console.log("Listening to port no 3000..");
});
