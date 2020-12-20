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
use the cloud-code cloud-run extension of your code editor.
