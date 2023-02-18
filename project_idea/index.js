require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const cohere = require("cohere-ai");

cohere.init(process.env.key);
router.get("/", async function (req, res) {
  const topic = req.query.topic;
  const options = {
    method: "POST",
    url: "https://api.cohere.ai/generate",
    headers: {
      accept: "application/json",
      "Cohere-Version": "2022-12-06",
      "content-type": "application/json",
      authorization: `Bearer ${process.env.COHERE_API_KEY}`,
    },
    data: {
      max_tokens: 300,
      model: "command-xlarge-nightly",
      return_likelihoods: "NONE",
      truncate: "END",
      prompt: `Give 5 project idea on the topic ${topic} for the hacakthon participants`,
      num_results: 10,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.send({ description: response.data.generations.text });
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
