const express = require('express');
const app = express();

// bring routes

const {getPosts} = require('./routes/post');

app.get("/",getPosts);
const port = 3000;

app.listen(port, () => {console.log(`A Node JS API is listning on port: ${port}`)});
