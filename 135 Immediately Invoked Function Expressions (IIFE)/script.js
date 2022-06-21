const number = function() {
    console.log("sample function.");
}

number();

//IIFE
(function() {
    console.log("invoked function.");
    const isPrivate =32;
})();

{
    const isPrivate = 32;
    var noPrivate = 33;
}

console.log(noPrivate);
// console.log(isPrivate);

(() => console.log("invoked arrrow function."))();