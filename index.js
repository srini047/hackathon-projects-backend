require("dotenv").config();
const express = require("express");
// const carDescription = require("./car_description");
const projectIdeas = require("./project_ideas");
const projectIdea = require("./project_idea");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/projectIdeas", projectIdeas);
app.use("/projectIdea", projectIdea);


app.listen(port, () => console.log(`App running on port ${port}`));
