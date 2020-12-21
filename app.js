const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();



//conect to db
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("DB Connected!"));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true });
// const connection = mongoose.connection;
// connection.on('open', () => {
//     console.log('Connected Database Successfully');
// });


// bring routes
//const {getPosts} = require('./routes/post');
const postRoutes = require('./routes/post');
// Middleware
app.use(morgan('dev'));
// const myMiddlware = (req, res, next) => {
//     console.log("Middleware applied");
//     next();
// }
// app.use(myMiddlware);


//app.get("/",getPosts);

app.use("/", postRoutes);
const port = process.env.PORT || 8080;

app.listen(port, () => {console.log(`A Node JS API is listning on port: ${port}`)});
