# WebserverAssignment
Built in node.js
### Dependencies:
- express.js
- http
- nodemailer
<br />
When run on my machine, this node app listens to the http://fraday.net domain (https support coming) and any POST to /emails with JSON body including the properties "to", "subject", and "body". If the to address is a valid email, it will send an email from defenstration1@outlook.com to the specified email address. The email will contain the specified subject line and body from the POST request.
