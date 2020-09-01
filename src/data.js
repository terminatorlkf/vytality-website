// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const request = require('request');
// const fetch = require('node-fetch');
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.post('/signup', (req, res) => {
//   const { email } = req.body;

//   // Make sure fields are filled
//   if (!email) {
//     return;
//   }

//   // Construct req data
//   const data = {
//     members: [
//       {
//         email_address: email,
//         status: 'subscribed',
//       }
//     ]
//   };

//   const postData = JSON.stringify(data);

//   fetch('https://usX.api.mailchimp.com/3.0/lists/<AUDIENCE_ID>', {
//     method: 'POST',
//     headers: {
//       Authorization: 'auth <API_KEY>'
//     },
//     body: postData
//   })
//     .catch(err => console.log(err))
// })

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`Server started on ${PORT}`));