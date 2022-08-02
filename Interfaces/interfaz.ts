interface Persona {
    //Readonly son parámetros solo lectura
    readonly nombre: string;
    readonly apellido: string;
    readonly edad?: number;
    //Con el signo ? definimos parámetros o atributos opcionales
}

function caminar(persona: Persona): void{
    console.log(`La persona ${persona.nombre} está caminando.`);
}

//Interfaces para funciones
interface General {
    (nombre: string, apellido: string, edad: number): void;
}

let funcionGeneral: General;

funcionGeneral = (nombre: string, apellido: string, edad: number) => {
    console.log(`Bienvenido ${nombre} ${apellido}. Tu edad es de ${edad} años.`);
}

let persona = {nombre: 'Ricardo', apellido: 'Fuentes'};

caminar(persona);

funcionGeneral('Ricardo', 'Fuentes', 28);