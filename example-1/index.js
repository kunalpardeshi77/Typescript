var no1 = document.getElementById("no1");
var no2 = document.getElementById("no2");
var btn = document.getElementsByTagName("button")[0];
var add = function (a, b) {
    console.log(a + b);
};
btn.addEventListener("click", function () {
    add(+no1.value, +no2.value);
});
