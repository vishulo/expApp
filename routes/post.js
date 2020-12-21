// define the post routes here

const express = require('express');

//bring in controller
const postController = require("../controllers/post");

const router = express.Router();

router.get("/",  postController.getPosts);

module.exports = router;