
import express from 'express'
import sum from './sum'
const http = require ('http')
const app = express()
const axios = require ('axios')

app.get('/', function (req, res) {
 // res.send('Hello World!');

 /*
  http.get('http://www.gambrinus-bd.com/api/newsfeed/search.php', resp => {
   
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(data)
    });
 
  
  }); */

/*
  axios.get('http://www.gambrinus-bd.com/api/newsfeed/search.php')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
  */
  res.send('Done')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

const promise1 = new Promise((resolve, reject) => {
  var x = Math.random();
  if (x > .5) {
    resolve('Over '+x);
  } else {reject('under '+x)
}
  
});

promise1.then((value) => {
  console.log('1: '+value);
  // expected output: "foo"
},
(value) => {
  console.log('2: '+value)
});

