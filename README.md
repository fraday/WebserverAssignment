# WebserverAssignment
Built in node.js
### Dependencies:
- express.js
- http
- nodemailer

When run on my machine, this node app listens to the https://fraday.net domain and any POST to /emails with JSON body including the properties "to", "subject", and "body". If the to address is a valid email, it will send an email from defenstration1@outlook.com to the specified email address. The email will contain the specified subject line and body from the POST request.
<br /><br />
You can run this node app by installing node, downloading this repo, and using the command "node ." in the project's root directory. The project will not work properly unless on my machine, however (duh).
