const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(234, "Jenish");
lufthansa.book(546, "John");

const eurowings = {
  airline: "Eurowings",
  iatacode: "EV",
  bookings: [],
};

const airindia = {
  airline: "AirIndia",
  iatacode: "AI",
  bookings: [],
};

const book = lufthansa.book;

// This will not work (The reason is this keyword used in book method)
// book(456, "Williams");

// Call method
book.call(eurowings, 456, "Williams");

// Apply method (Apply method takes array as an input)
const flightData = [756, "Rohit"];
book.apply(airindia, flightData);

book.call(eurowings, ...flightData);

// Bind method
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
const bookAI = book.bind(airindia);

bookLH(297, "Rahul");
