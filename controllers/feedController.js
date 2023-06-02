const Feed = require("../models/feedModel");

const feedController = {
  index: (req, res) => {
    Feed.find()
      .sort({ createdAt: -1 })
      .then((messages) => {
        const error = req.query.error;
        res.render("index", { messages, error });
      })
      .catch((err) => {
        console.log(err);
        res.send("An error occurred.");
      });
  },
  create: (req, res) => {
    const { name, message } = req.body;
    let error = "";

    if (name.length > 15) {
      error = "Name cannot be longer than 15 characters.";
    }

    if (message.length > 40) {
      error = "Message cannot be longer than 40 characters.";
    }

    if (error) {
      return res.redirect(`/feed?error=${encodeURIComponent(error)}`);
    }

    const newMessage = new Feed({
      name,
      message,
    });

    newMessage
      .save()
      .then(() => {
        res.redirect("/feed");
      })
      .catch((err) => {
        console.log(err);
        res.send("An error occurred.");
      });
  },

  show: (req, res) => {
    const messageId = req.params.id;

    Feed.findById(messageId)
      .then((message) => {
        res.render("show", { message });
      })
      .catch((err) => {
        console.log(err);
        res.send("An error occurred.");
      });
  },

  edit: (req, res) => {
    const messageId = req.params.id;

    Feed.findById(messageId)
      .then((message) => {
        res.render("edit", { message });
      })
      .catch((err) => {
        console.log(err);
        res.send("An error occurred.");
      });
  },

  update: (req, res) => {
    const messageId = req.params.id;
    const { name, message } = req.body;

    Feed.findByIdAndUpdate(messageId, { name, message, updatedAt: Date.now() })
      .then(() => {
        res.redirect(`/feed/${messageId}`);
      })
      .catch((err) => {
        console.log(err);
        res.send("An error occurred.");
      });
  },

  delete: (req, res) => {
    const messageId = req.params.id;

    Feed.findByIdAndDelete(messageId)
      .then(() => {
        res.redirect("/feed");
      })
      .catch((err) => {
        console.log(err);
        res.send("An error occurred.");
      });
  },
};

module.exports = feedController;
