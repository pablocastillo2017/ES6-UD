

const empleados =[{
    id:1,
    nombre:"Pablo"
},{
    id:2,
    nombre:"Vegeta"
},{
    id:3,
    nombre:"Kakaroto"
}];

const salarios =[{
    id:1,
    salario:1000
},{
    id:2,
    salario:2000
}];

const getEmpleado = (id , callback)=>{
    const empleadoDB = empleados.find( empleado => empleado.id === id);

    if (!empleadoDB) {
        
        console.log(`El Empleado con la ${id} , no existe`);

    } else {

        callback(null ,empleadoDB);
        
    }


};

// USO

getEmpleado( 3 , (err , empleado)=>{

    if (err) {
        return console.log(err);
    }

    console.log("emple@do",empleado);




} );




// const getEmpleado = (id , callback)=>{

//     const empleadoDB = empleados.find( empleado => empleado.id === id);
//     if (!empleadoDB) {
//         return callback(`No existe empleado con el id ${id}`)
//     } else {
//         return callback(null,empleadoDB);
//     }
// };

// // USO De la funcion getEmpleado

const getSalario = (empleado,callback)=>{

    const salarioDB = salarios.find( salario => salario.id === empleado.id);
        if (!salarioDB) {
    return callback(`No se encontro Salario con el Empleado : ${empleado.nombre}`)
} else {
    return callback(null,{
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
    });
}

};

getEmpleado(2,(err ,empleado)=>{

    if (err) { return console.log(err);}
    getSalario(empleado ,(err ,resp)=>{
        if (err) {
            return console.log(err);
        }
        return console.log(`El Salario de ${resp.nombre} es de ${resp.salario}`);

    });
});

