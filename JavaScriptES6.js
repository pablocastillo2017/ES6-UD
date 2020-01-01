// 3.- ====== DECLARACION DE VARIABLES VAR VS LET=======

/*let mensaje = "Hola Mundo"; // las variables con LET siempre deben 
                            // inicializarse primero
console.log(mensaje);*/


// 4.- ====== NO HAY RE-DECLARACIONES============

// var mensaje = "123";
// var mensaje = "12";

// var mensaje = "Hola";
// var mensaje = "Hola Mundo";
// let mensaje = "43";
// console.log(mensaje);

// let mensaje = "Hola";

// if (true) {

//     let mensaje ="que tal";
//     console.log(mensaje);

// }
// console.log(mensaje);


//.-5 =============== DECLARACIONES CONST ============

/*const IMPUESTO_SV = 15.2;

console.log(IMPUESTO_SV);

const PERSONA = {
    nombre:"Pablo",
    apellido:"Castillo",
    edad:34
};

PERSONA.apellido ="Astudillo"; // se puede cambiar la propiedad de un 
                            // objeto dentro de una CONST

console.log(PERSONA.apellido);*/

//.-6 ====== DECLARACIONES DE VARIABLES DE CICLO ============

    // for ( let i =0; i<=10; i++){
    //     //
    //     //
    // }

    // console.log(i);


//.-7 ====== DECLARACIONES DE FUNCIONES DE CICLO ============

//     var funciones= [];

//     for ( let i=0; i<10; i++){
    
//         funciones.push(function() { console.log(i); } );

//         // funciones.push(
//         // (function(valor){
//         //         return function(){
//         //             console.log(valor);
//         //             }
//         // })(i)  

//     }
// funciones.forEach(function(func) {
//     func();
// });


// .-8 =====SEGMENTO DE CARACTERES - startWitch - endWith - includes===

/*var saludo = "Hola Mundo!";

console.log( saludo.startsWith("H")); 
console.log(saludo.endsWith("!"));
console.log(saludo.includes("a"));

console.log(saludo.startsWith("Mu",5));
console.log(saludo.endsWith("o!",11));*/



// 9.- =====REPETICIONES DE STRING- REPEAT===

/*let texto ="Hola";
console.log(texto.repeat(2));

const ESPACIOS = 12;

let nombres = ["Pablo","Alejandra","Maximo"];
let telefonos =["17283982","12330011","8389281"];

for (i in nombres){
    let dif = ESPACIOS - nombres[i].length;

    console.log( nombres[i]+ " ".repeat(dif) + "|" + telefonos[i]);

}*/

// 10.- ===== Plantillas Literales TEMPLATE ===


/*function obtenerNombre() {
    return "Maria Perez";
}

let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);


let nombreCompleto2 = `El nombre Completo es ${nombre} ${apellido}`;
console.log(nombreCompleto2);


let nombreCompleto3 = `El nombre Completo es ${obtenerNombre()}`;
console.log(nombreCompleto3);

let multiLinea =`<h1 class="Algo">${nombre}</h1>
<p>Hola Mundo ${apellido}</p>`;

console.log(multiLinea);*/

// 11.- ===== TEMPLATES CON TAGS ===

/*function etiqueta(literales , ...subtituciones) {

    console.log(arguments);

    let resultado ="";

    console.log(literales);
    console.log(subtituciones);

    for( let i =0; i < subtituciones.length; i++){

        resultado += literales[i];
        resultado += subtituciones[i];
    }

    
    return resultado;
}

let unidades = 5,
    costo_unitario =10;

let mensaje = etiqueta `${unidades} lapices cuestan ${unidades*costo_unitario} pesos.`
console.log(mensaje);*/

// 12.- ===== USANDO VALORES "RAW" (crudos) ===



// 13.- ===== PARAMETROS POR DEFECTOS ===

/*function saludo(mensaje = "Hola Mundo",tiempo = 3000) {
    
    // mensaje = mensaje || "Hola Mundo"; >>ES5
    //mensaje = ( typeof mensaje != "undefined")? mensaje : "HOla Mundo!"; >>ES5

    setTimeout(function () {
        console.log( mensaje );
    },tiempo);

}

saludo();



function saludar(fn = fnTemporal ,persona = {} ) {
    
    console.log(typeof fn)

    if ( typeof fn === "undefined") {
        console.error("No es una funcion")
        return;
    }
    fn();
    console.log(persona);
}

function fnTemporal() {
    console.log("Hola Fn temporal")
}
var persona = {
    nombre:"Pedro Picapiedra"
}
saludar(fnTemporal,persona);*/



// 14.- =====COMO AFECTAN LOS VALORES POR DEFECTO AL "ARGUMENTS" ===

/*function sumar(a,b) {
    console.log(arguments)
}

sumar(1,2,3,4 ,{nombre:"PABLO"},[1,2,4,"pedro"],true) 
// hay que tener cuidado al usar "arguments" , ya que permite
// regresar cualquier parametro a la funcion*/


// 15.- =====PARAMETROS REST - PARAMETROS SIN NOMBRE ===

/*function agregar_alumno(arr_alumnos, ...alumnos) {
    console.log(arguments);

    for(let i = 0; i< alumnos.length; i++){
        arr_alumnos.push(alumnos[i]);
    }
        return arr_alumnos;
}


let alumnos_arr = ["Maximo","Liam","Castillo","Arias",0.1,"22.007.078-7"];

let alumnos_arr2 = agregar_alumno(alumnos_arr,"Pablo","Nicolas");

console.log(alumnos_arr );*/

// 16.- =====RESTRICCIONES DEL PARAMETRO REST ===
    // 1- Solo puede existir un parametro rest en la Funcion
    // 2- El Parametro Rest debe de ir siempre como ultimo parametro

    // function juntar_nombre(nombre,...apellidos) {
        

    // }

    
// 17.- ===== OPERADOR "SPREAD" =====

// let num1 =[1,738,9382,88,82728];
    
//var max = Math.max.apply(Math ,num1);
// let max = Math.max(...num1);


// console.log(max);

// 18.- ===== ROMPER RELACION DE REFERENCIA DE OBJETOS =====

/*let persona1 ={
    nombre:'Fernando',
    edad:36
}
// con el Spread(...) podemos hacer una copia del objeto
// pero asinando nuevas propiedades
let persona2 ={...persona1}


persona2.nombre = 'Pedro';
persona2.edad = 77;

console.log(persona1,persona2);*/

// 19.- ===== Anadir Propiedades a un Objeto a partir de otros objetos =====

/*let persona1 ={
    nombre:'Fernando',
    edad:36
}

let persona2 ={
    nombre:'Pedro',
    edad:45,
    direccion:'Los Laureles #465 ,salinas THNO',
    conduce:true,
    vehiculo:true,
    vegetariano:false,
    casado:true

};

persona1 ={
// agregamos con el SPREAD(...)todas las proiedades de persona 2
// y conservamos la de persona1
    ...persona2, 
    ...persona1
}

console.log(persona1);
console.log(persona2);*/

// 20.- ===== DIFERENCIA ENTRE REST Y SPREAD =====

    // REST >> junta todos los elementos en un arreglo
    // SPREAD >> esparce los elementos como si fueran
        // enviados de forma separada


/*function saludarRest(saludo,...nombres) {
    for(i in nombres){
        console.log(`${saludo} ${nombres[i]}` );
    }
    
}

function saludarSpread(saludo,...nombres) {
    console.log(`${saludo} ${nombres}` );
    
}

saludarRest("Hola","Pedro","Paco","Luis");

let personas=["Goku","Vegeta","Trunks"];

saludarSpread("Que tal!!!",personas);


//OTRO EJEMPLO DE SPREAD

let partes = ["Brazos","Piernas"];
let cuerpo = ["Cabeza","Cuello",...partes, "Pies","Dedos"];

console.log(cuerpo);*/

// 21.- =====Doble comportamiento de las funciones =====

/*function Persona(nombre) {
 // esta validacion nos asegura que nuestro objeto siempre sea llamado
 // con el NEW cuando lo necesitamos.

    if ( typeof new.target !== "undefined") {
        this.nombre = nombre;
    } else {
        throw new Error('Esta funcion, debe ser utilizada con el NEW')
        
    }

    this.nombre = nombre;
}

    var persona = new Persona("PAblo");
 


// var persona = new Persona("Fernando");

// var noPersona = Persona("Fernando");*/

// 22.- ===== FUNCIONES DE FLECHA ( => ) =====

    // Cambio Principales
        //1.- No hay Creacion de This,Super,Arguments y new.Target
        //2.- NO pueden ser llamados con NEW
        //3.- NO tienen Prototipos
        //4.- NO pueden cambiar el "THIS"
        //5.- NO hay objetos "ARGUMENTS"
        //6.- NO pueden tener nombres DUPLICADOS a la hora de mandar parametros


// 23.- ===== EJEMPLOS DE FUNCIONES DE FLECHA ( => ) =====

// EcmaScript 5
/*var miFuncion2 = function (valor) {
    return valor;
}

// EcmaScript 6
let miFuncion1 = valor => valor;

console.log(miFuncion2);
console.log(miFuncion1);

//=========== 0============


// EcmaScript 5 con Parametros
var sumar2 = function (num1,num2) {
    return num1+num2;
}
// EcmaScript 6 con Parametros
let sumar1 = (num1 , num2 ) => num1 + num2;

//=========== 0============

// EcmaScript 5 Sin Parametros
var saludar2 = function () {
    return "Hola Mundo";
}

// EcmaScript 6 Sin Parametros
let saludar1 = () => "Hola Mundo";

//=========== 0============


// EcmaScript 5 
var saludarPersona = function (nombre) {
    var salida = "Hola, " + nombre;
    return salida;
}
console.log( saludarPersona("Pablo"));


// EcmaScript 6 
let saludarPersona2 = nombre => {
    let salida = `Hola, ${nombre}`;
    return salida;
}
console.log( saludarPersona2("Maximo"));

//=========== 0============

// EcmaScript 5 
var obtenerLibro = function (id) {
    return {
        id:id,
        nombre:"Harry POtter"
    }
}

// EcmaScript 6 

let obtenerLibro2 = id => ({id:id, nombre:"Lord Of The Ring"});*/


// 24.- ===== CREANDO FUNCIONES ANONIMAS =====

    // EcmaScript 5 funciones anonimas 

/*var saludo1 = function (nombre) {
    return "Hola  "+ nombre;
}("Fernando"); // se ejecutan de forma inmediata en el ("Fernando")
console.log(saludo1);

    // EcmaScript 6 funciones anonimas
let saludo2 = (nombre =>`Hola ${nombre}`)("PAblo");
console.log(saludo2);*/

// 25.- ===== NO HAY CAMBIOS EN EL OBJETOS THIS=====

    // EcmaScript 5 

// var manejador = {
//     id : "123",

//     init: function () {
//         document.addEventListener("click",(function (event) {
//             this.clickEnPagina( event.type);
//             console.log(this);
//         }).bind(this),false);
//     }, // fin init

//     clickEnPagina: function (type) {
//         console.log("Manejando " + type + " para el id: " + this.id);
//     }
// };
// manejador.init();



        // EcmaScript 6

/*let manejador = {
    id : "123",

    init: function () {
      document.addEventListener("click",
        event => this.clickEnPagina(event.type));
    }, 

    clickEnPagina: function (type) {
        console.log("Manejando " + type + " para el id: " + this.id);
    }
};
manejador.init();*/


// 26.- ===== Funciones de Flecha y Arreglos =====

    // EcmaScript 5
 /*var arreglo =[2,64,23,67,8,3];

 var ordenadoES5 = arreglo.sort(function (a,b) {
     return a-b;
 })
console.log(ordenadoES5);

    // EcmaScript 6

    let ordenadoES6 = arreglo.sort((a,b) =>a-b);

    console.log(ordenadoES6);*/


// 27.- ===== Identificando Funciones de flecha =====

 /* var restar = (a,b) => a-b;

  console.log( typeof restar);
  console.log( restar instanceof Function);

  //var restar2 = new restar(1,3); en las funciones de => no es para NEW

  function ejemplo(x,y) {
     
    ((a,b)=>{
        console.log( arguments[0])

    })();
  }

  ejemplo(10,34);*/



  // 28.- ===== Extenxiones en los Objetos =====

        // EcmaScript 5

  /*function crearPersona(nombre,apellido,edad) {
      return {
        nombre:nombre,
        apellido:apellido,
        edad:edad

      }
  };
 console.log(crearPersona("Pablo","Castillo",36));

 var persona1 = crearPersona("Alejandra ","Arias",34)
 console.log(persona1);


     // EcmaScript 6

     function crearPersona(nombre,apellido,edad) {
        return {
          nombre,
          apellido,
          edad
  
        }
    };
   console.log(crearPersona("Pablo","Castillo",36));
  
   let persona1 = crearPersona("Alejandra ","Arias",34)
   console.log(persona1);*/



// 28.- ===== Metodos Consisos o SIMPLES =====

// var persona ={
//     nombre:"Liam",
//     getNombre(){
//         console.log(this.nombre);
//     }
// }

// persona.getNombre();

// 29.- ===== NOMBRES DE PROPIEDADES COMPUTADAS =====


// EcmaScript 5

/*var persona = {};
var apellido = "apellido";

persona["primer"] = "Nicolas";
persona[apellido] = "Castillo";


console.log( persona["primer"] );
console.log( persona[apellido]);

// EcmaScript 6

var apellido = "primer nombre";

var persona ={
    "primer nombre" : "Andres",
    [apellido] : "Arias"
}
    
console.log( persona["primer nombre"]);
console.log( persona[apellido]);


var subFijo = "nombre";

var persona = {
    ["primer" + subFijo ] :"Pedro",
    ["segundo" + subFijo ] :"Carlos"
   
}
console.log( persona["primer" + subFijo ]);
console.log( persona["segundo" + subFijo ]);*/

// 31.- ===== NUEVO METODO OBJECT.IS() =====

/*console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0,-0))

console.log("=====");

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN,NaN));


console.log("===5 igual a 5==");

console.log(5 == 5);
console.log(5 == "5");
console.log(5 === 5);
console.log(5 === "5");

console.log(Object.is(5,"5"));*/


// 32.- ===== NUEVO METODO OBJECT.assing() =====

/*function mesclar(objReceptor ,objDonador) {
   
    Object.keys(objDonador).forEach(function (key) {
        objReceptor[key] = objDonador[key]
    });

    return objReceptor;
}

var objReceptor = {};
var objDonador  ={
    // nombres: "mi-archivo.js",
    // apellidos:"mi-archivo-apellido.js",

        get nombre(){
            return "mi-archivo.js"
        }

}

console.log(Object.assign(objReceptor,objDonador));
    

let westeros ={
    cersei:'Lanister',
    arya:'Stark',
    jhon:'Snow',
    briene:'Tarth',
    theon:'Greyjoy',
    ramsay:'Bolton'
}

let keys = Object.keys(westeros);
let vals = Object.values(westeros);

console.log('keys',keys);
console.log('vals',vals);



const target = { a: 1, b: 2 };
const source = { b: 4, a: 5 };

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }*/


// 33.- ===== ORDEN DE ENUMERACION DE LAS PROP DE UN OBJECT =====
        // 1- Todas las llaves van en orden ascendente
        // 2- Todas las llaves tipo string van odedenadas
            //en la manera que fueron agregadas

        // 3- Todos los simbolos en el orden que fueron agregados al
            //objeto
       

/*var objeto ={
    c:1,
    0:1,
    x:1,
    15:1,
    r:1,
    3:1,
    b:1
    
};
objeto.d =1;
objeto["2"] =1;
objeto["a"] =1;

console.log(Object.getOwnPropertyNames(objeto).join(","));
console.log(Object.keys(objeto));
console.log(JSON.stringify(objeto));*/

// 34.- ===== CAMBIAR EL PROTOTIPO DE UN OBJETO =====

/*let gato ={
    sonido(){
        console.log("Miau!");
    },

    chillido(){
        console.log("MIAU!!!");
    }
}

let perro ={
    sonido(){
        console.log("Guau");
    }
};

let angora = Object.create(gato);
console.log( Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido();
// recive 2 parametros 
    // el primero es el objeto en el cual quiero cambiar el prototipo
    // el segundo parametro es de quien obtener todo el prototipo
    // se puede cambiar el prototipo con esta funcion.

Object.setPrototypeOf (angora ,perro);

console.log( Object.getPrototypeOf(angora) === gato);

angora.sonido();*/

// 35.- ===== ACCESO AL PROTOTIPO CON LA REFERENCIA SUPER =====

/*let persona ={
    saludar(){
        return "Hola";
    }
};

let amigo ={
    saludar(){
    // ECMA Script 5
// return Object.getPrototypeOf(this).saludar.call(this) + ", Saludos!";
        return super.saludar() + ",Saludos!!";

    }
};

Object.setPrototypeOf(amigo,persona);

console.log(amigo.saludar());*/


// 36.- ===== DESTRUCTURACION DE OBJETOS =====

/*let ajustes ={
    nombre:"Fernando Herrera",
    email:"fernando.herrera86@gmail.com",
    facebook:"fernando.herrera.777",
    google:"fernando.her.123",
    premium:true
}

// cambiar nombre a una propiedad "premium:dePago"
// inicializar variables de la destructuracion twitter ="fernando___2019"

let{ twitter:cuentaTwit ="fer69",nombre, email,facebook,google,premium:dePago} = ajustes;

console.log(cuentaTwit);*/


// 37.- ===== DESTRUCTURACION DE OBJETOS ANIDADOS =====


/*let autoGuardado ={
    archivo:"app.js",
    cursor:{
        linea:7,
        comlumna:16
    },

    ultimoArchivo:{
        archivo:"index.html",
        cursor:{
            linea:8,
            comlumna:20
        }
    },

    otroNodo:{
        subNodo:{
            cursor:{
                linea:11,
                comlumna:11
            }
        }
    }
};

let { cursor:cursorActivo }= autoGuardado;
console.log(cursorActivo);

let {ultimoArchivo:{cursor:ultimoArchivo}} = autoGuardado;

console.log(ultimoArchivo);

// 1 forma destructuracion 
let {otroNodo:{subNodo:{cursor:superCursor}}} = autoGuardado;

// 2 forma destructuracion
let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;


console.log(superCursor);
console.log(otroSuperNodo2);*/


// 38.- ===== DESTRUCTURACION DE ARREGLOS =====


/*let frutas = ["Banano","Pera","Uva"];

let [ fruta1 , fruta2 ] = frutas;

console.log(fruta1,fruta2)

// para destructurar fruta 3 UVA
let [,,fruta3] = frutas;

console.log(fruta3)

let otraFruta = "manzana";

[otraFruta] = frutas;

console.log(otraFruta);*/

// 39.- ===== DESTRUCTURACION DE ARREGLOS ANIDADOS =====


/*let colores1 = ["rojo",["verde","Amarillo"],"Morado","Naranja"];

// destructuracion de un arreglo dentro de otro arreglo
let [ color1 ,[color2]]= colores1;

// console.log(color1);
// console.log(color2);


let colores2 = ["rojo","verde","amarillo","morado","Naranja"];

// se corta el color rojo , y los demas se utiliza REST para, mostrarlos
// ... rest solo funciona para los arreglos
let [ colorPrincipal,colorSegundario,...demasColores]= colores2


console.log(colorPrincipal);
console.log(colorSegundario);

console.log(demasColores);

// 40.- ===== Valores por defecto en destructuracion =====

let opciones ={
    nombre:"Fernando"
};

let {nombre ,apellido ="Herrera"} = opciones;

console.log(nombre,apellido);*/

// 41.- ===== destructuracion de parametros =====

/*function crearJugador(nickNAme,
    // al llamar la funcion solo se envia 1 parametros
    // se pueden pasar por defecto en la destructuracion
    {hp,sp,clase} = {hp:100,sp:50,clase:"MAgo"}
) {
    
    console.log(nickNAme,hp,sp,clase);

}

crearJugador("LIAM");*/

// 43.- =====SIMBOLOS Y PROPIEDADES =====

/*let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol();


let persona = {
    [segundoNombre] : 'Matias'
};
persona[primerNombre] = 'Fernando';


console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);
console.log(primerNombre);

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

// los simbolos SIEMPRE son diferentes
console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1,simbolo2));

console.log(primerNombre);

    // NO SE PUEDE HACER 

// console.log(" Mi simbolo:" + primerNombre);
// console.log('mi simbolo es : ${primerNombre}'  );*/


// 44.- =====Compartiendo Simbolos Symbol.for()  ,Symbolo.key.for()  =====

// para verificar si el simbolo esta creado y si existiese crearlo 
//Symbol.for("userID");

/*let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = "1234";

console.log(objeto[userID]);
console.log(userID );

let userID2 = Symbol.for("userID");

console.log(Object.is(userID2,userID));

let userID3 = Symbol.for("userID")

console.log(Object.is(userID2,userID,userID3));

// para recuperar la llave de "id unico" Symbol.keyFor(id)

let id = Symbol.for("id unico");

console.log(Symbol.keyFor(id))*/

// 45.- ===== Coecion de Symbols =====


/*let id = Symbol.for("ID");
let numero = 10;
let texto = "10";
let bool = true;
let notNumber = NaN;

console.log( "Mi simbolo es :" + String(id))*/


// 46.- ===== recuperando Propiedades  de los Symbols =====

/*let id = Symbol.for("id");
let activo = Symbol.for("Activo")

let persona = {
    [id] :"123",
    [activo] :"XYCHYW",
    nombre:"Pablo",
    apellido:"Castillo",
    edad:36
};


for( llave in persona){
    console.log(llave ,persona[llave])
};

let simbolos = Object.getOwnPropertySymbols(persona);

console.log(simbolos);

for(i in simbolos){
    console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
}*/


// 48.- ===== Creando sets-agregando items y buscando elementos =====

/*
let items = new Set();

//agregar propiedades al SET

items.add(10);
items.add(110);
items.add(102);
items.add(19);
items.add(13);
items.add(1123);
items.add("10");
items.add(true);
items.add(10);


// para saber el largo
console.log(items.size);

// para saber si existe el elemento
console.log(items.has(10));


console.log(items);
*/

// 49.- ===== Removiendo Valores =====

/*
let items = new Set ([1,2,3,4,5]);

// elimina elementos del SET
items.delete(2);

// Elimina TODOS los elementos del SET
items.clear();
*/

// 50.- ===== forEache() en los SET =====

/*
let persona = new Set(["Fernando","Maria","Susana"]);

persona.forEach(function (valor,llave,setOriginal) {
    
    console.log(valor,llave,setOriginal);
})
*/

// 51.- ===== Convertir un SET en un ARRAY =====

/*
let numeros = [1,2,3,4,5,6,2,3,4,4,4,4,5,5,5];

// let setNumeros = new Set(numeros);

// console.log(setNumeros);

// convierte los SET  en Array
// let arrayNumeros = [...setNumeros];

let arrayNumeros = eliminarDuplicados(numeros);

console.log(arrayNumeros);

    // funcion para eliminar duplicados con 1 sola linea de codigo
function eliminarDuplicados(items) {

    return [...new Set(items)];
}
*/

// 52.- ===== Weekset =====

//  1- NO TIENE ADD() , HAS() , REMOVE() ,KEYS() ,VALUE() ,fOREACH() ,ZISE()
// 2- NO TIENE REPETICIONES O CICLOS FOR


// 52.- ===== Maps y sus Metedos =====

/*
let mapa = new Map();

mapa.set("Nombre","Fernando");
mapa.set("Edad",36);


console.log(mapa);
console.log(mapa.size);

// para recuperar el valor de la llave 
console.log(mapa.get("Nombre")); // Fernando
console.log(mapa.get("Edad")); // 36

// para ver si tiene esa llave
console.log(mapa.has("Nombre"));
console.log(mapa.has("Edad"));

// elimina el valor de la llave
mapa.delete("Fernando");

// Elimina todo el Maps
mapa.clear("Nombre")
*/

// 55.- ===== Inicializacion de los Maps por defecto =====


/*
let mapa = new Map([ ["Nombre" ,"PAblo"] ,["Edad",36]]);

// funcion para barrer el Map
function barriendoMaps(evaluar) {
    console.log(evaluar);
};

mapa.forEach(barriendoMaps);
*/

// 56.- ===== forEach()  de los Map =====

/*
let mapa = new Map([["Nombre","Andres"] ,["Edad",1800]]);

    // barriendo mapa completo  con el forEach() EcmaScript 5
// mapa.forEach(function (valor ,llave ,valorOrigen) {
//     console.log(`Llave : ${llave} , Valor : ${valor}`);  

//});

    // barriendo mapa completo  con el forEach() EcmaScript 6
mapa.forEach(
    (valor,llave)
    => console.log(`Llave : ${llave} , Valor : ${valor}`));
*/

// 57.- ===== Nuevo Ciclo For -Of Barrer Array =====

// let numeros = [100,20,30,50,200];

    // FORMA  1 - para barrer el Array
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
    
// }

    // FORMA  2 - para barrer el Array

// for(let i in numeros){
//     console.log(numeros[i]);
// }

    // NORMAL
// let personas = [
//     {nombre:"Pablo" ,edad:21},
//     {nombre:"Antonio Dance" ,edad:22},
//     {nombre:"Comer Gordas Peralta" ,edad:23},
//     {nombre:"Cura Tato " ,edad:24},
//     {nombre:"Karol Dance Degenereke" ,edad:25},

// ];

        // 1- CON SET

    // let personas = new Set();

    // personas.add({nombre:"Pablo" ,edad:21});
    // personas.add({nombre:"Antonio Dance" ,edad:22});
    // personas.add({nombre:"Comer Gordas Peralta" ,edad:23});
    // personas.add({nombre:"Cura Tato " ,edad:24});
    // personas.add({nombre:"Karol Dance Degenereke" ,edad:25});

    


        // 2- CON MAP
// let personas = new Map([["nombre","Nicolas"],["Apellido","Guajardo"]]);

        



    // NUEVA FORMA FACIL 3 - para barrer el Array

// for ( let detalle of personas){
//     console.log(detalle);
// };


// 60.- ===== Declaracion Basica de una clase en ES6 =====

/*
class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    nombreCompleto(){
        console.log(this.nombre);
    }
}

let pablo = new Persona ("Pablo Castillo Astudillo ");
pablo.nombreCompleto();

console.log( pablo instanceof Persona);
*/

// 62.- ===== Clases como expresiones =====
/*
let Persona = class{

    constructor(){
        this.nombre = "YO";
        this.edad = 36;
        this.direccion = "alkskajksjakjskjas";
    }

    decirNombre(){
        console.log("Hola Mundo");
    }

}

let fernando = new Persona();

console.log(fernando);
console.log( fernando instanceof Persona);
*/


// 63.- ===== Clases como PARAMETROS =====
 
/*
class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }

getArea(){
    return this.lado * this.lado;
}

};

function imprimirValores(cuadrado) {

    if (!(cuadrado instanceof Cuadrado)) {
        console.error("Debe ser una instancia de Cuadrado");
        return;
    };

    console.log(cuadrado.getArea());
}

// let mesa = new Cuadrado(15);

let mesa = "12";
imprimirValores(mesa);

console.log(mesa instanceof Cuadrado);
*/


// 63.- ===== Miembros Estaticos y metodos Computados =====

/*
// metodo computado se puede llamar por su valor "gritarNombre"
// metodos cuyos nombres se puede definir mediante una variable
let nombreMetodo = "gritarNombre";

class Persona{
    constructor(nombre){
       this.nombre = nombre; 
    }

    decirNombre(){
        console.log(this.nombre);
    }
    [nombreMetodo](){
        console.log( this.nombre.toUpperCase() );
    }

    // metodo estatico nos permite ejecutar un metodo que se encuentra
    // dentro de la clase sin instaciarla. 
    static crear(nombre){
        return new Persona(nombre);
    }

}
    let yo = Persona.crear("Pablo");
    console.log(yo);

    let otraPersona = Persona.crear("Andres");
    console.log(otraPersona);
*/

// 65.- ===== Herencia de Clases =====

/*
class Rectangulo{
    constructor(alto,largo){
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return this.alto * this.largo;
    }

}

let rectangulo = new Rectangulo(2,3);
console.log(rectangulo.getArea());

// extends => permite heredar todos los metodos propiedades que tenga la clase padre
// super => para ejecutar el metodo constructor de la Class padre en el const. Class hijo

class Cuadrado extends Rectangulo{
    constructor(alto){
        super(alto,alto);
    }
}

let cuadrado = new Cuadrado(9);
console.log(cuadrado.getArea());

console.log(cuadrado instanceof Cuadrado);
console.log(cuadrado instanceof Rectangulo);


*/

// 66.- ===== SobreEscribiendo Funciones del Padre =====
 
/*
class Rectangulo{
    constructor(alto,largo){
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return this.alto * this.largo;
    }

}

let rectangulo = new Rectangulo(2,3);
console.log(rectangulo.getArea());


class Cuadrado extends Rectangulo{
    constructor(alto){
        super(alto,alto);
    }


    // sobreEscribir el metodo de clase Padre
    getArea(){
        // return "Cuadrado: " + (this.alto * this.alto);

        // ejecuta del metodo heredado
        return  super.getArea();
    }
}


let cuadrado = new Cuadrado(9);
console.log(cuadrado.getArea());

console.log(cuadrado instanceof Cuadrado);
console.log(cuadrado instanceof Rectangulo);
*/

// 67.- ===== Problematica =====

/*
function tareaAsincrona() {
    setTimeout(function() {
        console.log("Proceso Asincrono Terminado");
        resuelto();

    },1500)
}

tareaAsincrona();

console.log("Codigo secuencial");

function resuelto() {
    console.log("TODO OK!!");
}
*/

// 68.- ===== PROMESAS ES6 =====

/*
function tareaAsincrona() {
    let promesa = new Promise((resolve,reject)=>{

        setTimeout(function() {
            console.log("Proceso Asincrono Terminado");
            reject();
        
        },1500)
    })
    return promesa;
}

tareaAsincrona().then((response)=>{
    console.log("Response  : TODO OK!");
})
.catch((error)=>{
    console.error("Rechazo: TODO MAL");
})


console.log("Codigo secuencial");
*/


//=============   ASINCRONO ============ //=============   ASINCRONO ============

//=============   ASINCRONO ============ //=============   ASINCRONO ============


// .-70 ====== Callbacks =======
















