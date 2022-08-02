//Clases
class Vehículo {
    private marca:string;
    private fecha:string;
    private puertas:number;

    constructor(marca:string, fecha:string, puertas:number){
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }

    acelerar(): void{
        console.log('Acelerando');
    }

    frenar(): void{
        console.log('Frenando');
    }

    get getMarca(): string{
        return this.marca;
    }

    set setMarca(marca: string) {
        this.marca = marca;
    }
}

//Clase abstracta
abstract class Padre {
    abstract caminar(): void;
    abstract gatear(): void;

    saludar(saludo: string):string{
        return saludo;
    }
}

class Hijo extends Padre {
    caminar(): void {
        console.log('Estoy caminando.');
    }
    gatear(): void {
        console.log('Estoy gateando.');
    }
}

const auto = new Vehículo('Ford', '12/07/98', 2);

auto.acelerar();
auto.frenar();
auto.getMarca;