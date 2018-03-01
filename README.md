# Init

* Run `git clone https://github.com/daviddguedes/node-parse.git`
* `cd path/to/app`
* `mv .env.example .env`
* Edit your .env file
* Run `docker build -t parseimg .`
* Run `docker run -d -p 3000:3000 --name parse parseimg`
* Run `curl -X POST \
  -H "X-Parse-Application-Id: appId" \
  -H "X-Parse-REST-API-Key: restAPIKey" \
  -H "Content-Type: application/json" \
  -d '{"score":1337,"playerName":"Sean Plott","cheatMode":false}' \
  http://localhost:3000/api/v1/classes/GameScore`

* Run `curl -X GET \
  -H "X-Parse-Application-Id: appId" \
  -H "X-Parse-REST-API-Key: restAPIKey" \
  http://localhost:3000/api/v1/classes/GameScore`
