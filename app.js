const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({ ok: true }));

if (require.main === module) {
  // 只有直接运行 app.js 时才监听端口
  app.listen(3000, () => console.log("Listening on 3000"));
}

module.exports = app;
