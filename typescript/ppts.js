var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["orange"] = 3] = "orange";
})(Color || (Color = {}));
console.log(Color.green);
