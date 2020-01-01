

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

const getEmpleado = (id)=>{

    // re retorna aca , no es necesario el return al final
     return new Promise((resolve,reject)=>{

        const empleadoDB = empleados.find( empleado => empleado.id === id);
        if (!empleadoDB) {
            return reject(`No existe empleado con el id ${id}`);
        } else {
            return resolve(empleadoDB);
        }
    
    });
};


const getSalario = (empleado)=>{

    return new Promise((resolve , reject)=>{

        const salarioDB = salarios.find( salario => salario.id === empleado.id);
        if (!salarioDB) {
    return reject(`No se encontro Salario con el Empleado : ${empleado.nombre}`)
} else {
    return resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
    });
}
        
    });
    


};

// llamado para devolver los parametros de resolve y el reject
getEmpleado(1)
.then(getSalario)
.then(console.log)

.catch(err =>{
    console.log(err);
});