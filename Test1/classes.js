var Character = /** @class */ (function () {
    function Character(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    Character.prototype.greet = function (name) {
        if (name) {
            return "Hi! " + name + "! my name is " + this.fullname;
        }
        else {
            return "Hi! my name is " + this.fullname;
        }
    };
    return Character;
}());
var spark = new Character("Jacob", "Keyes");
var msg = spark.greet();
alert(msg); // "Hi! my name is Jacob Keyes"
var msg1 = spark.greet("Dr. Halsey");
alert(msg1); // "Hi! Dr. Halsey! my name is Jacob Keyes"
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (arg) {
        if (typeof console.log === "function") {
            console.log(arg);
        }
        else {
            alert(arg);
        }
    };
    return Logger;
}());
var logger = new Logger();
logger.log("le log en test !!!");
var user = {
    name: "",
    password: "" // error property password is missing
};
