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
// app.get("/:city/pharmacies", (req, res) => {
//     let city = req.params.city;
//     if (city === "harrow") {
//       res.send(harrow.pharmacies);
//     } else if (city === "stratford") {
//       res.send(stratford.pharmacies);
//     } else if (city === "heathrow") {
//       res.send(heathrow.pharmacies);
//     } else {
//       res.send("no city found");
//     }
// })
// app.get("/:city/doctors", (req, res) => {
//   let city = req.params.city;
//   if (city === "harrow") {
//     res.send(harrow.doctors);
//   } else if (city === "stratford") {
//     res.send(stratford.doctors);
//   } else if (city === "heathrow") {
//     res.send(heathrow.doctors);
//   } else {
//     res.send("no city found");
//   }
// });
// app.get("/:city/colleges", (req, res) => {
//   let city = req.params.city;
//   if (city === "harrow") {
//     res.send(harrow.colleges);
//   } else if (city === "stratford") {
//     res.send(stratford.colleges);
//   } else if (city === "heathrow") {
//     res.send(heathrow.colleges);
//   } else {
//     res.send("no city found");
//   }
// });
// app.get("/:city/hospitals", (req, res) => {
//   let city = req.params.city;
//   if (city === "harrow") {
//     res.send(harrow.hospitals);
//   } else if (city === "stratford") {
//     res.send(stratford.hospitals);
//   } else if (city === "heathrow") {
//     res.send(heathrow.hospitals);
//   } else {
//     res.send("no city found");
//   }
// });
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







