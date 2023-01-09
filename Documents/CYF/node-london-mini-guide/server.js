const express = require("express");
const app = express();
const port = 3002;
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
app.get("/", (req, res) => {
    res.send("<h1>Welcome to London Mini Guide</h1>");
}

)


app.get("/:city/:category", (req, res) => {
  let city = req.params.city;
  let category = req.params.category;
  if (city === "harrow" ) {
    res.send(harrow[category]);
  } else if (city === "stratford") {
    res.send(stratford[category]);
  } else if (city === "heathrow") {
    res.send(heathrow[category]);
  } else {
    res.send("no city found");
  }
});







