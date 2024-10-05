const http = require("http");
const fs = require("fs");
const minimist = require("minimist");

// Read the command line arguments
const args = minimist(process.argv.slice(2));

// Default port to 3000 if not provided
const port = args.port || 3000;

let homeContent = "";
let projectContent = "";
let registrationContent = "";

// Read home.html file
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

// Read project.html file
fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

// Read registration.html file
fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

// Create the server
http.createServer((request, response) => {
  let url = request.url;
  response.writeHead(200, { "Content-Type": "text/html" });
  
  switch (url) {
    case "/project":
      response.write(projectContent);
      break;
    case "/registration":
      response.write(registrationContent);
      break;
    default:
      response.write(homeContent);
      break;
  }
  
  response.end();
}).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
