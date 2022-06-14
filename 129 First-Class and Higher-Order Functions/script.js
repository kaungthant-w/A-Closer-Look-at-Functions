//functions return functions

const greet = function (greeting) {
    return function (name) {
        console.log (`${greeting} ${name}`);
    }
}

const greethey = greet("Hey");
greethey("Johnas");
greethey("Barlen");
greethey("Allen");

greet("Hello")("Darlen");
greet("Mingalarpar")("Kyaw");


// challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr("ANyaSaYaw")("MuTu");


// the call & apply method
const lufthansa = {
    airline : "lufthansa",
    iataCode : "LH",
    bookings : [],
    book(flightnum, name) {
        console.log(`
        ${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}
        `);

    this.bookings.push({flight : `${this.iataCode}${flightnum}`, name});    
    },

}


lufthansa.book(232, "Jonas Schmedtmann");
lufthansa.book(512, "Mr. John Smith");

console.log(lufthansa);


const erowings = {
    name : "Eurowings",
    iataCode : "HW",
    bookings : []
}

const bookew = lufthansa.book;
bookew.call(erowings, 23, "Sarah Willims");
console.log(erowings);

// call method
bookew.call(erowings, 532,"Mary");
console.log(erowings);


const swiss = {
    airline : "swiss air lines",
    iataCode : "SW",
    bookings : []
};

bookew.call(swiss, 595, "Mary Copper");
console.log(swiss);


// Apply Method
const flightData = [593, 'GeorageCooper'];
bookew.apply(swiss, flightData);
console.log(swiss);

bookew.call(swiss, ...flightData);