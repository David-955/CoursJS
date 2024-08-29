// 1_ Déclaration d'une variable
let temps;

// 2_ Assigner une valeur à la variable
temps = "pluvieux";

// Vérification de la valeur dans la console
console.log(temps);

alert("Super, tu es arrivé sur mon site !");
window.alert("J'affiche une nouvelle boite de dialogue");

// Ecrire sur la page
document.write("<h1>C'est stylé le javascript !</h1>");

// Demander à l'utilisateur 
let answer = prompt("Question: on est quel jour aujourd'hui ?");
// window.prompt("Question: on est quel jour aujourd'hui ?");
document.write(`<p>la réponse est :${answer}`);

let weatherofday;

// CamelCase
let weatherOfDay;

// PascalCase
let WeatherOfDay;

// SnakeCase
let weather_of_day;

// POssibilité de réassigner une nouvelle valeur à notre variable de base
temps = "nuageux";
console.log(temps);


// LES TYPES DE VARIABLES //

// 1. Chaine de caratères (string)
let holidays = "2020";
let destination = "Egypte";

// 1. Un nombre entier (integer ou int)
let year = 2015;

// 3. un nombre décimal (float)
let number = 3.55;

// 4. Un booléen (boolean VRAI/FAUX = TRUE/FALSE)
let condition = false;

// 5. Une constante
const PAYS = "France"; // string
const YEAR = 2021; // integer

// 6. Connaître le type d'une variable avec typeof
console.log(typeof YEAR);
console.log(typeof holidays);

// NUMBER => STRING
let otherNumber = 20;
otherNumber = otherNumber.toString();
console.log(typeof otherNumber);

// STRING => NUMBER
let number2 = "36";
number2 = parseInt(number2);
console.log(typeof number2);

// version float
let number2 = "36.5";
number2 = parseFloat(number2);