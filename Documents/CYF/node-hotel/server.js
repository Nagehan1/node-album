const express = require("express");
const cors = require("cors");
let moment = require("moment");
const app = express();

app.use(express.json());
app.use(cors());

//Use this array as your (in-memory) data store.
const bookings = require("./bookings.json");
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateDate(checkin, checkout) {
  return moment(checkin).isBefore(checkout);
}
app.get("/", function (request, response) {
  response.send("Hotel booking server.  Ask for /bookings, etc.");
});

// TODO add your routes and helper functions here
app.get("/bookings", (req, res) => {
  res.send(bookings);
});

app.post("/bookings", (res, req) => {
    
let newBooking=req.body
 bookings.push(newBooking);
 res.json(newBooking);
});

app.get("/bookings/:id", (req, res) => {
  let bookingId = Number(req.params.id);
  let booking = bookings.filter((booking) => booking.id == bookingId);
  res.send(booking);
})




app.get("/booking/search", (req, res) => {
  const search = req.query.date;
  if (search) {
    let result = bookings.filter((booking) => {
      return moment(search).isBetween(
        booking.checkInDate,
        booking.checkOutDate
      );
    });
    res.send(result);
  } else {
    res.send("No search term provided");
  }
});



app.delete("/bookings/:id", (req, res) => {
  let booking = bookings.find(
    (booking) => booking.id === parseInt(req.params.id)
  );

  if (!booking) {
    res.status(404).send("booking not found");
  }
});

const listener = app.listen(3001, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
