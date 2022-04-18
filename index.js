const express = require("express");
const http = require("http");
const mail = require("nodemailer");

let transport = mail.createTransport({
    service: "outlook",
    auth: {
        user: "defenestration1@outlook.com",
        pass: "NOPE!"
    }
});

const app = express(), server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/emails", (req, res) => {
    if (!req.body || !req.body.to || (typeof req.body.to) !== "string" || !req.body.subject || (typeof req.body.subject) !== "string" || !req.body.body || (typeof req.body.body) !== "string") return res.send("Invalid POST json request (one or more params not present)."); //So readable :)
    req.body.to = req.body.to.toLowerCase();
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(req.body.to)) return res.send("Invalid \"to\" address.");

    let options = {
        from: "defenestration1@outlook.com",
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.body
    };
    transport.sendMail(options, (error, info) => {
        if (error) {
            res.send("Your email could not be sent due to an error. You may have formatted the email wrong or entered an invalid one.");
            console.log(error);
        } else {
            res.send(`Successfully sent email to ${req.body.to}.`);
            console.log(`Successfully sent email to ${req.body.to}.`);
        }
    });
    
});

server.listen(80, () => console.log("Up on http!"));