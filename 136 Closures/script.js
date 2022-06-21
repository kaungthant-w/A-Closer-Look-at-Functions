const secureBook = function() {
    let pessengerCount = 0;

    return function() {
        pessengerCount++;
        console.log(`${pessengerCount} persons`)
    }
}

const booker = secureBook();

booker();
booker();
booker();

console.dir(booker);