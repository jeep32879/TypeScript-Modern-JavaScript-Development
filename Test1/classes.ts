class Character {
    fullname: string;
    constructor(firstname: string, lastname: string) {
        this.fullname = firstname + " " + lastname;
    }
    greet(name?: string) {
        if (name) {
            return "Hi! " + name + "! my name is " + this.fullname;
        }
        else {
            return "Hi! my name is " + this.fullname;
        }
    }
}
var spark = new Character("Jacob", "Keyes");
var msg = spark.greet();
alert(msg); // "Hi! my name is Jacob Keyes"
var msg1 = spark.greet("Dr. Halsey");
alert(msg1); // "Hi! Dr. Halsey! my name is Jacob Keyes"

// **** Interfaces ****
/*
In TypeScript, we can use interfaces to enforce that a class follow the specification in
a particular contract.
*/
interface LoggerInterface {
    log(arg: any): void;
}
class Logger implements LoggerInterface {
    log(arg) {
        if (typeof console.log === "function") {
            console.log(arg);
        }
        else {
            alert(arg);
        }
    }
}
var logger = new Logger();
logger.log("le log en test !!!")

// with typescript we can use interfaces to declare the type of an object
interface UserInterface {
    name: string;
    password: string;
}
var user: UserInterface = {
    name: "",
    password: "" // error property password is missing
};