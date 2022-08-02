import {Carro, saludar}  from "./moduloa";

let carrito: Carro = new Carro('Ford');

console.log(carrito.getMarca);
carrito.acelerar();

saludar();