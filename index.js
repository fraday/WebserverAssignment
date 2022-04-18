const express = require("express");
const http = require("http");

const app = express(), server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));


server.listen(80, () => console.log("Up on http!"));