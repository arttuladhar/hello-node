const express = require("express");
const app = express();
const port = 9090;

app.get("/", (req, resp) => {
    resp.send("Hello World");
  });

app.get("/hello", (req, resp) => {
  resp.send("Hey User !!");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));