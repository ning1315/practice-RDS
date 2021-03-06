var models = require("../models");

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          /* do something */
          res.send(err);
        }
        res.json(results);
      });
    },
    post: function(req, res) {
      var params = [req.body.text, req.body.username, req.body.roomname];
      models.messages.post(params, function(err) {
        if (err) {
          /* do something */
          res.send(err);
        }
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function(req, res) {
      models.users.get(function(err, results) {
        if (err) {
          /* do something */
        }
        res.json(results);
      });
    },
    post: function(req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err) {
        if (err) {
          /* do something */
        }
        res.sendStatus(201);
      });
    }
  }
};
