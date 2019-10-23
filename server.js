var express = require("express");
var app = express();
app.use(express.json());

const PORT = 3000;
let users = [];

app.post("/", (req, res) => {
  res.send(req.body);
});

app.post("/add", (req, res) => {
  async function check(callback) {
    if (users.length == 0) data = false;
    for (let i in users) {
      data = false;
      if (users[i].login == req.body.login) {
        data = true;
        break;
      }
    }
    if (!data) {
      users.push(req.body);
    }
    callback(data);
  }
  function send() {
    check(function(data) {
      res.send(data);
    });
  }
  send();
});

app.post("/get", (req, res) => {
  res.send(JSON.stringify(users));
});

app.post("/delete", (req, res) => {
  function del(callback) {
    for (let i in users) {
      if (users[i].login == req.body.login) {
        users.splice(i, 1);
        break;
      }
    }
    callback();
  }
  function send() {
    del(function() {
      res.send(JSON.stringify(true));
    });
  }
  send();
});

app.listen(PORT, () => {
  console.log("start serwera na porcie " + PORT);
});
