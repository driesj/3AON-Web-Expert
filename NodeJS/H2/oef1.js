var mijnArray = [];
mijnArray.push(20);
mijnArray.push(30);
mijnArray.push(40);
mijnArray.forEach(function(num) {
    console.log(num);
});
var totaal = 0;
mijnArray.forEach(function(num) {
    totaal += num;
});
console.log(totaal);