function sumar(a: number, b: number): number{
    return (a+b);
}

let suma: number = sumar(1,2);
console.log(suma);

//Tipos de funciones:
//Común
function mostrar(): void {
    console.log("Muestra función común");
}
//Arrow
const mostrar2 = (): void => {
    console.log("Muestra función arrow");
}

//Parámetros opcionales
const parametrosO = (nombre: string, edad: number, apellido?:string): void => {
    if(apellido){
        console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
    }
    else{
        console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);
    }
}

//Parámetros por default
const parametrosD = (nombre: string, edad: number, apellido:string = "Fuentes"): void => {
    if(apellido){
        console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
    }
    else{
        console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);
    }
}

//Parámetros REST
const cartapostres = (postre:string, ...frutas:string[]): void => {
    console.log(`El postre es ${postre} y tiene ${frutas}`);
}

mostrar();
mostrar2();
parametrosO('Ricardo', 28);
parametrosO('Ricardo', 28, 'Fuentes');
parametrosD('Ricardo', 28);
parametrosD('Ricardo', 28, 'Orozco');
cartapostres('Postre1', 'naranja', 'frambuesa', 'limón');