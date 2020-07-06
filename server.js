const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is responding");
});

app.listen(PORT, () => {
  console.log(`Shop Anywhere server is running on ${PORT}`);
});
