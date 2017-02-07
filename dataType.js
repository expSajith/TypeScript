var color = "blue";
color = 'red';
console.log(color);
var list = [1, 2, 3];
console.log(list);
var list1 = [1, 2, 3];
console.log(list1);
var x;
x = ["helloo world", 123];
console.log(x);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
console.log("enum value of " + Color[c], c);
var value;
value = "value is now a string";
console.log(value);
value = 100;
console.log("value =", value);
var messages = function () {
    console.log("This is from a function");
};
messages();
var sayHello = function () {
    var msg = "this from function";
    return msg;
};
var Print = sayHello();
