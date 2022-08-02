export class Carro {
    private marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    acelerar(): void{
        console.log('Acelerando');
    }

    get getMarca():string {
        return this.marca;
    }
}

export function saludar(): void{
    console.log('Saludos');
}