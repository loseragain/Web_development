const Twilio = require('twilio');
const accountSid = "ACd2af1e42ff53841745582293a5ee1c3d";
const authToken = "cd176e2c6ea7eb0739560cdb0349cf65";
const client = new Twilio(accountSid, authToken);
client.messages
  .create({
    body: 'This is the test message sent from VS code!',
    from: '+19388008720',
    to: '+917654767297'
  })
  .then(message => console.log(message.sid));
// const client = new Twilio(accountSid,authToken);
client.messages.list().then(messages => console.log(`The most recent message is ${messages[0].body}`))
console.log("Gathering your message");

// const http = require('http');
// const express = require('express');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const app = express();
// app.get('/sms',(req,res) => {
//     res.send("Hey we are here with Twilio")
// })
// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();
//     console.log(twiml)
//   twiml.message('The Robots are coming! Head for the hills!');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   console.log(res)
//   res.end(twiml.toString());
// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });