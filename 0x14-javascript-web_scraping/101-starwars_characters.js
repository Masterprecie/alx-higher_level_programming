#!/usr/bin/node
const request = require('request');
<<<<<<< HEAD
const url ='https://swapi-api.hbtn.io/api/films/'+ process.argv[2];
=======
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];
>>>>>>> 7db4ed32abd4e06763b1acd86e920e7df688c6f7
request(url, function (error, response, body) {
  if (!error) {
    const characters = JSON.parse(body).characters;
    printCharacters(characters, 0);
  }
});

function printCharacters(characters, index) {
  request(characters[index], function (error, response, body) {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters.length) {
        printCharacters(characters, index + 1);
      }
    }
  });
}
