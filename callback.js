
// .-70 ===== CALLBACKS =========


const getUsuarioById = (id, callback)=>{

    const usuario ={
        nombre:"Nicolas",
        id,
    };


    if (id === 20) {
        console.log(`El Usuario con el ${id} , No Existe`);
    }else{
        callback(null ,usuario);

    }


};

getUsuarioById(1,(err , user)=>{

    if (err) {
        return console.log(err);
    }

    console.log("Usuario de BDD" ,user);
});






