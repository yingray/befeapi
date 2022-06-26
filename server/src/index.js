const express = require("express");

const app = express();

// app.get("/api/pet", (req, res) => {
//   res.json([{ id: 1, name: "a" }]);
// });

app.get("/api/pets", (req, res) => {
  return res.status(501);
});

app.listen(5010, () => console.log("server start!"));
