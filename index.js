const express = require("express");
const http = require("http");

const app = express(), server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/emails", (req, res) => {
    console.log(req.body);
    if (!req.body || !req.body.to || (typeof req.body.to) !== "string" || !req.body.subject || (typeof req.body.subject) !== "string" || !req.body.body || (typeof req.body.body) !== "string") return res.send("Invalid POST json request (one or more params not present)."); //So readable :)
    req.body.to = req.body.to.toLowerCase();
    if (!/^[a-z\.]+@[a-z]+\.[a-z]+$/.test(req.body.to)) return res.send("Invalid \"to\" address.");
    console.log(req.body);
});

server.listen(80, () => console.log("Up on http!"));