let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

g();
f();
console.dir(f);

const h = function () {
    const b = 54;
    f = function () {
        console.log(b * 2);
    }
}

h();
f();

console.dir(f);


const broadPassengers = function(n, wait) {
    // const perGroup = n/12;

    setTimeout(() => {
        console.log(`We are boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
broadPassengers(180, 3);