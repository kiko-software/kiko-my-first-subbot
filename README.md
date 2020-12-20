# My first Kiko subbot

## Init
npm install

## Test
open a terminal

```console
export PORT=8081
npm run start
```

expected output: "The container started successfully on port  8081"

open a second terminal

```console
export PORT=8081
npm run test
```
expected output
- on terminal 2 "1 test passed"
- on terminal 1 "randomJoke.data: ... and ERROR - error: connect ECONNREFUSED 127.0.0.1:443"

## Deploy
Use the cloud-code cloud-run extension of your code editor (Visual Studio Code or Google Cloud Shell Editor).
- Click "Cloud Code" in the footer of the editor.
- Click "Deploy to Cloud Run".
- Choose your preferred region and click "Deploy".
- Use the result URL i.e.: URL: https://my-first-subbot-....a.run.app as your external subbot webservice endpoint URL.
