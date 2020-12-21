const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

// init webserver
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ----------------------------
// process the kiko web request
app.post('/', async (req, res) => {
  // get the joke from external database
  const randomJoke = await axios.get(
    'https://official-joke-api.appspot.com/random_joke'
  );
  console.log('randomJoke.data:', randomJoke.data);

  // get the kiko server instance url
  const endpointBaseUrl = (req.get('referer') || '//').replace(
    /\/\//g,
    'https://'
  );

  // send two messages to the kiko conversation
  await axios
    .post(`${endpointBaseUrl}/api/v1/conversation/send`, {
      conversationId: req.body.conversationId,
      messages: [
        {
          type: 'message',
          data: {
            type: 'text/plain',
            content: randomJoke.data.setup,
          },
        },
        {
          type: 'message',
          data: {
            type: 'text/plain',
            content: randomJoke.data.punchline,
          },
        },
        {
          type: 'event',
          name: 'endOfConversation',
        },
      ],
    })
    .catch((error) => {
      console.error('ERROR - message:', error.message);
    });
  res.status(200).json({success: true});
});
// ----------------------------

// start the server
const port = process.env.PORT || '8080';
app.listen(port, () => {
  console.log('The container started successfully on port ', port);
});
