const express = require('express');
const app = express();
const morgan = require('morgan');

// bring routes
const {getPosts} = require('./routes/post');

// Middleware
app.use(morgan('dev'));
// const myMiddlware = (req, res, next) => {
//     console.log("Middleware applied");
//     next();
// }
// app.use(myMiddlware);


app.get("/",getPosts);
const port = 3000;

app.listen(port, () => {console.log(`A Node JS API is listning on port: ${port}`)});
