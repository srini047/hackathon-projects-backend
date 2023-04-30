require("dotenv").config();
const express = require("express");
const projectIdeas = require("./apis/project_ideas");
const projectIdea = require("./apis/project_idea");
const projectDescription = require("./apis/project_description");
const projectTitle = require("./apis/project_title");
const projectImplement = require("./apis/project_implement");

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", function (req, res) {
  res.json({ "message": "SUCCESS: 200 OK" });
});
app.use("/projectIdeas", projectIdeas);
app.use("/projectIdea", projectIdea);
app.use("/projectDescription", projectDescription);
app.use("/projectTitle", projectTitle);
app.use("/projectImplement", projectImplement);

app.listen(port, () => console.log(`App running on port ${port}`));
