var http = require("http");
var qs = require("querystring");

var server = http.createServer((req, res) => {
  console.log(req.method);

  switch (req.method) {
    case "GET":
      res.end("fetchujemy");
      break;
    case "POST":
      servResponse(req, res);
      break;
  }
});

servResponse = (req, res) => {
  var allData = "";

  req.on("data", data => {
    console.log("data: " + data);
    allData += data;
  });

  req.on("end", () => {
    var finish = qs.parse(allData);
    finish.msg = "nie";
    res.end(JSON.stringify(finish));
  });
};

server.listen(3000, () => {
  console.log("serwer startuje na porcie 3000");
});
