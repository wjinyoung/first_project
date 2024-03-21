const mongoose = require("mongoose");

const chatSchema = new monggose.Schema(
    { //메시지 정보
        chat: String,
        user: {
          id: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
          },
          name: String,
        },
    },
    { timestamp: true }
);

module.exports = mongoose.model("Chat", chatSchema);
