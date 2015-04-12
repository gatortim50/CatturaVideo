var x = 4;

(function () {
    console.log("i) " + x);
})();

(function () {
    var x = 7;

    console.log("ii) " + x);
})();

(function () {
    console.log("iii) " + x);

    var x = 7;
})();

(function () {
    var x;

    console.log("iv) " + x);

    x = 7;
})();

