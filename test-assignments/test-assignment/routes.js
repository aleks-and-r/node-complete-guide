const fs = require("fs");

const handleRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Test assignment Node server</title></head>");
    res.write("<body>");
    res.write("<h1>Hello from test assignment</h1>");
    res.write(
      '<form method="POST" action="/create-user"><input type="text" name="username" /> <button type="submit">Send</button>  </form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Test assignment Node server</title></head>");
    res.write(
      "<body> <ul><li>User 1</li> <li>User 2</li> <li>User 3</li></ul> </body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];

      console.log(username);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
};

module.exports = {
  handler: handleRoutes,
};
