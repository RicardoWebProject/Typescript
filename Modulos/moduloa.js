"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saludar = exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(marca) {
        this.marca = marca;
    }
    Carro.prototype.acelerar = function () {
        console.log('Acelerando');
    };
    Object.defineProperty(Carro.prototype, "getMarca", {
        get: function () {
            return this.marca;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}());
exports.Carro = Carro;
function saludar() {
    console.log('Saludos');
}
exports.saludar = saludar;
