
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "RAHYAB AI",
    status: "online",
    message: "RAHYAB AI Server is running!"
  });
});

app.post("/chat", (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({
      error: "پیام خالی است"
    });
  }

  res.json({
    reply: "پیام شما دریافت شد: " + message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("RAHYAB AI Server running on port " + PORT);
});
