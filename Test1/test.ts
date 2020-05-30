var t: number = 1;
// *** var, let, const ***
var mynum : number = 1; // scoped to the nearest function block (or global, if outside a function block).
let myIsValid : boolean = true; // scoped to the nearest enclosing block (or global if outside any block)
const myApiKey : string = "0E5CE8BD-6341-4CC2-904D-C4A94ACD276E"; // constants are block scoped

// ***  data types  ***
var isDone: boolean = false;

var height: number = 6;

var nom: string = "bob";
nom = 'smith';

var list_1: number[] = [1, 2, 3];
var list_2:Array<number> = [1, 2, 3];

enum Colors {Red, Green, Blue};
var c: Colors = Colors.Green;

// *** type any used to represent a javaScript value ***
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

var list:any[] = [1, true, "free"]; // *** array with a mixt of different types
list[1] = 100;

// *** The opposite in some ways to any is void ***
function myWarnUser(): void {
    alert("This is my warning message");
    }
    var TestVar; // variable is declared but not initialized
    alert(TestVar); // shows undefined
    alert(typeof TestVar); // shows undefined
    var TestVar = null; // variable is declared and value null is assigned as value
    alert(TestVar); // shows null
    alert(typeof TestVar); // shows object


// **** union types ****
var path : string[]|string;
path = '/temp/log.xml';
path = ['/temp/log.xml', '/temp/errors.xml'];
// path = 1; // Error

// **** type aliases ****

type PrimitiveArray = Array<string|number|boolean>;
type MyNumber = number;
type NgScope = ng.IScope;
type Callback = () => void;

// **** Type guards ****

var x: any = { /* ... */ };
if(typeof x === 'string') {
    console.log(x.splice(3, 1)); // Error, 'splice' does not exist on 'string'
    }
    // x is still any
    x.foo(); // OK

// ****************************************
// **** **** Ambient declarations **** ****
// ****************************************
/*
    In the following code snippet, we will declare an interface that is implemented by the
customConsole object. We then use the declare operator to add the customConsole
object to the scope:
*/
interface ICustomConsole {
    log(arg : string) : void;
    }
    declare var customConsole : ICustomConsole;

customConsole.log("A log entry!"); // ok

/*
TypeScript includes, by default, a file named lib.d.ts that provides interface
declarations for the built-in JavaScript library as well as the DOM.
Declaration files use the file extension .d.ts and are used to increase the TypeScript
compatibility with third-party libraries and run-time environments such as Node.js
or a web browser.
*/