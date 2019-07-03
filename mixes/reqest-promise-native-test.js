const request = require('request-promise-native');
// request('http://www.google.com', function (error, response, body) {
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// });
(async _ => {
    var options = {
        method: 'GET',
        uri: 'http://www.movoto.com/389457348957',
        resolveWithFullResponse: true
    };
    try{
        let r = await request(options);
        console.log(r);
    } catch(err){
        console.log(err);
    }
})();
