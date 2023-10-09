var proxy = require("express-http-proxy");
var app = require("express")();
var PORT = process.env.PORT || 4000;
var cors = require("cors");

app.use(cors());
app.use("/proxy", proxy("https://api.bongo-solutions.com"));

app.get("/", (req, res) => {
  res.send({ msg: "hello" }).status(200);
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
