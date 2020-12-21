# My first Kiko subbot

## Introduction
With the Kiko software you can create your own chatbot - https://www.kiko.bot 

Some chatbot responses require external data sources. Kiko forwards such a user request to a so-called external subbot. The external subbot is an individual web service that fetches the required data from the external data source and then sends the response text back to the Kiko server. From there, the answer is sent to the user's chat.

Here we show an example web service based on nodejs. The web service can be hosted at e.g. Google Cloud Run.

## Look at the code
The processing of the request from the Kiko server takes place in the file index.js.

At the beginning the web server is initialised.

A joke record is fetched from an external database.
To answer the intent, a server request is sent to Kiko.
The destination address is determined from the referer address of the subbot request.
To ensure that the answer appears in the correct chat with the requesting user, the ConversationId from the request must be used in the answer.
In this example, two chat messages are sent. 
The last element in the request is an event that ends the conversation with the subbot.
The following user requests are no longer sent to this subbot.

At the end of the script is the code to start the web service. 

## Test
If you have nodejs installed on your environment (version>=12), you can test the web service locally.

Please use the Google Cloud Shell Editor or the IDE Visual Studio Code for the following steps.

Open a first terminal, go to the web service folder and install the service.
```console
npm install
```

Start the web service.
```console
npm run start
```
Expected output: "The container started successfully on port  8080"

Now you can open a second terminal and start the local tests.
```console
npm run test
```
Expected output:
- on terminal 2 - "1 test passed"
- on terminal 1 - "randomJoke.data: ... and ERROR - error: connect ECONNREFUSED 127.0.0.1:443"

## Deploy
Use the cloud-code cloud-run extension of your code editor.
- Click "Cloud Code" in the footer of the editor.
- Click "Deploy to Cloud Run".
- Choose your preferred region and click "Deploy".
- Use the result URL i.e.: URL: https://my-first-subbot-....a.run.app as your external subbot web service endpoint URL.

## Kiko Integration
- Create your own Kiko CMS account: https://www.kiko.bot/kostenlos-registrieren-chatbot-cms/
- Create an external subbot with the name "subbot-jokes" in the CMS via the menu "Botlist". 
- Enter the URL of the published web service in the subbot via the submenu item "Edit webhooks" in the field "Receive message".
- Create an intent with the name "Joke telling" via the "Content" menu in the "metabot" and enter "subbot-jokes" as the subbot's forwarding.
- For recognition, create the entity type "topic" with the entity value "Joke".

## Test
When entering "Joke" in the test chat at the bottom right, a joke should now appear as the answer. 
