README

This code is a simple Express.js server that listens for incoming GET requests with a "url" query parameter and makes an HTTPS GET request to the provided URL. If the request is successful, the server will respond with a JSON object that contains the URL that was requested and a Boolean indicating whether or not the connection was secure (i.e., whether or not the request was made over HTTPS). If the request is unsuccessful, the server will respond with a JSON object that contains an error message.

Usage

Start the server by running node index.js in the command line. This will start the server and listen for incoming requests on port 7000.

Send a GET request to the server, including the URL you want to request as a query parameter. For example, if you want to request "https://example.com", you would send a GET request to "http://localhost:7000?url=https://example.com".

The server will respond with a JSON object that contains the following properties:

url: The URL that was requested.
isSecure: A Boolean indicating whether or not the connection was secure.

Error Handling

If no url provided in the query parameter, server respond with json object { error: 'Please provide a URL as a query parameter (e.g., "?url=example.com")' } with status code 400
If any error occur while making https request, server respond with json object { error: error.message } with status code 500.

Requirements

Node.js
express.js
https

Note

This app only listens for incoming requests on http://localhost:7000
It only accepts GET requests
It is only makes request over https.