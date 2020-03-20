// require('dnscache')({ enable: true });
//imports at the top
var SplunkLogger = require("splunk-logging").Logger;
var request = require("request");

var endpoints = [
  {
  tagURL: 'http://34.210.83.47/api/2.0/channels/events/.json',
  splunkToken: '',
  interval: 1000,
  },
  {
  tagURL: 'http://34.210.83.47/api/2.0/channels/statistics/.json',
  splunkToken:'',
  interval: 1000,
  },
];

const perf = require('execution-time')();
perf.start('apiCall');

var options = {
  "method": "GET",
  // "url": "http://34.210.83.47/api/2.0/channels/events/.json",
  // http://34.210.83.47/api/2.0/channels/statistics/.json
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic QWRtaW46QWRtaW4=",
  }
};

// setting up splunk logging
var config = {
  token: "D501804E-837A-492F-A329-708CBBD4BE84",
  url: "https://http-inputs-fox.splunkcloud.com:443",
};

var Logger = new SplunkLogger(config);

// Counter is your API iterator. This will increase incrementally on the console after each call. 
let counter = 0; 

const run = (tagURL)=> () => {
  // paste options here:
  var options = {
    "method": "GET", 
    "url": tagURL,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic QWRtaW46QWRtaW4=",
    }
  };

  return request(options, function (error, response) { 
    if (error) throw new Error(error);
    const body = JSON.parse(response.body) 
    
    var payload = {
        // Message can be anything; doesn't have to be an object
        message: {
          // "endpoint": "Channel Events",
          "requestURL": options.url,
          "event": body,
          "httpStatus": response.statusCode,
          "error": response.error,
          "hello": "world",
          "executionTime": results.preciseWords,
          // "runtime": end,
        }
    };
    
    console.log("Sending payload", payload);
    Logger.send(payload, function(err, resp, body) {
        // If successful, body will be { text: 'Success', code: 0 }
    console.log("Response from Splunk", body);
    });

    console.log(JSON.stringify(body, null , 2))
    // console.log(response.body);
    console.log(response.error)
    console.log(response.statusCode)
    console.log("DONE")
    console.log(`with API call ${counter}. Next call will be logged in 10 seconds`);
    console.log("=======================")
    console.log(options.url)
    counter++;
  });
};

// Set 10 second interval for each API call
endpoints.forEach(endpoint => setInterval(run(endpoint.tagURL), endpoint.interval))
// setInterval(run, 1000);

const results = perf.stop('apiCall');
console.log(results.time);  // in milliseconds
console.log(results.preciseWords);  // in words


// TO DO: 1. Set up a push to splunk. Post the JSON response of each API call. 
