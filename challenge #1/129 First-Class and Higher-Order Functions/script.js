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
    airline : "Eurowings",
    iataCode : "HW",
    bookings : []
}

const book = lufthansa.book;
book.call(erowings, 23, "Sarah Willims");
console.log(erowings);

// call method
book.call(erowings, 532,"Mary");
console.log(erowings);


const swiss = {
    airline : "swiss air lines",
    iataCode : "SW",
    bookings : []
};

book.call(swiss, 595, "Mary Copper");
console.log(swiss);


// Apply Method
const flightData = [593, 'GeorageCooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//bind method
const bookEW = book.bind(erowings);
bookEW(23, "Steven Willims");

const booksw = book.bind(swiss);
booksw(3232,"Steven swiden");

const booksh = {
    airline : "swiss air lines",
    iataCode : "SW",
    bookings : []
}

bookSH = book.bind(booksh);
bookSH (331, "Shron Elan");


const bookEW45 = book.bind(erowings, 45);
bookEW45("Steven Alone");
bookEW45("Along Mine");


// with event listeners
lufthansa.planes = 35;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}




