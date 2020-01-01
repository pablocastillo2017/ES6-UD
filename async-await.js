

const getNombre = async()=>{

return new Promise((resolve ,reject)=>{

    setTimeout(() => {
        
        resolve("Nicolas");

    },3000);

})

}

const saludo = async()=>{

    const nombre = await getNombre();

    return `Hola ${nombre} , como estas`;
}

saludo().then(mensaje =>{
    console.log(mensaje);
});


// getNombre().then( nombre =>{
//     console.log(nombre)
// });