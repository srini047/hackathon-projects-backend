require("dotenv").config();
const express = require("express");
// const carDescription = require("./car_description");
const projectIdeas = require("./project_ideas");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/projectIdeas", projectIdeas);
// app.use("/", );

app.get("/", function (req, res) {
  res.json({ "message": "hello world" });
});


app.listen(port, () => console.log(`App running on port ${port}`));
