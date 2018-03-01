const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.load()

const ParseServer = require('parse-server').ParseServer;

let api = new ParseServer({
  databaseURI: 'mongodb://' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DATABASE,
  cloud: './cloud/main.js',
  appId: 'appId',
  masterKey: 'masterKey', 
  javascriptKey: 'javascriptKey',
  restAPIKey: 'restAPIKey',
  fileKey: 'optionalFileKey',
  serverURL: 'http://0.0.0.0:1337/parse-docker' 
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ data: 'Resposta do Server' })
});

router.use('/parse', api);

module.exports = router;
