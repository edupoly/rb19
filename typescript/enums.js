var CarColor;
(function (CarColor) {
    CarColor[CarColor["CherryRed"] = 0] = "CherryRed";
    CarColor[CarColor["DimiondWhite"] = 1] = "DimiondWhite";
    CarColor[CarColor["SeagulBlue"] = 2] = "SeagulBlue";
    CarColor[CarColor["NightBlack"] = 3] = "NightBlack";
    CarColor[CarColor["SilverGrey"] = 4] = "SilverGrey";
})(CarColor || (CarColor = {}));
var mycarColor;
mycarColor = CarColor.NightBlack;
console.log(mycarColor);
console.log(CarColor[mycarColor]);
