// Need to work a bit more..

require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");

router.get("/", async function (req, res) {
    const desc = req.query.desc;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  // const openai = new OpenAIApi(configuration);
  const options = {
    method: "POST",
    url: "https://api.opeanai.com/v1/completions",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    data: {
      max_tokens: 256,
      model: "text-davinci-003",
      prompt: `Give me the tech stack on how to work on the project description: ${desc}`,
      temperature: 0
    },
  };
  // const options = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: `Give me the tech stack on how to work on the project description: ${desc}`,
  //   max_tokens: 7,
  //   temperature: 0,
  // });

  axios
    .request(options)
    .then(function (response) {
      console.log(response);
      res.send({ description: response.choices });
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
