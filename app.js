const express = require('express');

const app = express();


app.get("/", (req, res) => {
    res.send("hello node JS");
});

const port = 3000;
app.listen(port, () => {console.log(`A Node JS API is listning on port: ${port}`)});
