
//esta funcion revisa si hay campos en blanco
export const checkFormFields = (obj) => {

    let n = 0;
    Object.values(obj).forEach( (val, i) => {

        if(val == ''){
            console.log('Campo vacío: ', val, i)
            n++;
        }
    })

    return n
}

//funcion para revisar si existe la contraseña introducida

export const checkIfPassword = (arr, pwd) => {

    let n=0;
    let cod='';
    //vamos a recorrer el array comparando cada valor con la contraseña introducida
    arr.forEach( val => {
        if(val.codigoPersonal == pwd){
            cod = val.codigoPersonal
            n=1
        }
    })

    return {n, cod};
}

export const searchName = (arr, text) => {
    
    let res = arr.filter( val => val.nombrePaciente.toLowerCase().includes(text.toLowerCase()))

    //console.log(res)

    return res
    
}