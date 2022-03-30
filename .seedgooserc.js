module.exports = {
    modelBaseDirectory: 'app_api/database/models', // model directory name
    // Include all .js files but not db.js 
    models: ['*.js', '!db.js'], // model matcher
    data: 'data', // data directory name
    db: 'mongodb://localhost:27017/travlr' // db connection url
  };



  /*
  "seedgoose": {
    "modelBaseDirectory": "app_api/models",
    "models": [
      "*.js",
      "!db.js"
    ],
    "data": "data",
    "db": "mongodb://localhost:27017/travlr"
  }
  */