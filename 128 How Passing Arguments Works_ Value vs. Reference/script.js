"use strict";

const flight = "LH320";
const jonas = {
    name : "Jonas Balen",
    passport : 323211
}

const checkIn = function(flightNum, passenger) {
    flightNum = "LB32";
    passenger.name = "Mr. " + passenger.name;

    if(passenger.passport === 323211) {
        alert("Check In");
    } else {
        alert("Wrong Passport!");
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// is the same as doing...
const flightNum = flight;
const  passenger = jonas;


const newPassport = function(person) {
    // person.passport = Math.trunc(Math.random() * 1000000000);
    person.passport = 323211

}

newPassport(jonas);
checkIn(flight, jonas);