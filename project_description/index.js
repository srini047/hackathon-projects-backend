require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const cohere = require("cohere-ai");

cohere.init(process.env.key);
router.get("/", async function (req, res) {
  const name = req.query.name;
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
      prompt: `Generate a mesmerizing project description on ${name} to get a brief idea of the project working in about 80-100 words`,
      num_results: 10,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.send({ description: response.data});
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
