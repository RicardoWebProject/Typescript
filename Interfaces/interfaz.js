function caminar(persona) {
    console.log("La persona ".concat(persona.nombre, " est\u00E1 caminando."));
}
var funcionGeneral;
funcionGeneral = function (nombre, apellido, edad) {
    console.log("Bienvenido ".concat(nombre, " ").concat(apellido, ". Tu edad es de ").concat(edad, " a\u00F1os."));
};
var persona = { nombre: 'Ricardo', apellido: 'Fuentes' };
caminar(persona);
funcionGeneral('Ricardo', 'Fuentes', 28);
