//Clases
var Vehículo = /** @class */ (function () {
    function Vehículo(marca, fecha, puertas) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }
    Vehículo.prototype.acelerar = function () {
        console.log('Acelerando');
    };
    Vehículo.prototype.frenar = function () {
        console.log('Frenando');
    };
    Vehículo.prototype.getMarca = function () {
        console.log(this.marca);
    };
    return Vehículo;
}());
var auto = new Vehículo('Ford', '12/07/98', 2);
auto.acelerar();
auto.frenar();
auto.getMarca();
