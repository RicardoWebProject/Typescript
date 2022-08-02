function sumar(a, b) {
    return (a + b);
}
var suma = sumar(1, 2);
console.log(suma);
//Tipos de funciones:
//Común
function mostrar() {
    console.log("Muestra función común");
}
//Arrow
var mostrar2 = function () {
    console.log("Muestra función arrow");
};
//Parámetros opcionales
var parametrosO = function (nombre, edad, apellido) {
    if (apellido) {
        console.log("Mi nombre es ".concat(nombre, " ").concat(apellido, " y tengo ").concat(edad, " a\u00F1os."));
    }
    else {
        console.log("Mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os."));
    }
};
//Parámetros por default
var parametrosD = function (nombre, edad, apellido) {
    if (apellido === void 0) { apellido = "Fuentes"; }
    if (apellido) {
        console.log("Mi nombre es ".concat(nombre, " ").concat(apellido, " y tengo ").concat(edad, " a\u00F1os."));
    }
    else {
        console.log("Mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os."));
    }
};
//Parámetros REST
var cartapostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es ".concat(postre, " y tiene ").concat(frutas));
};
mostrar();
mostrar2();
parametrosO('Ricardo', 28);
parametrosO('Ricardo', 28, 'Fuentes');
parametrosD('Ricardo', 28);
parametrosD('Ricardo', 28, 'Orozco');
cartapostres('Postre1', 'naranja', 'frambuesa', 'limón');
