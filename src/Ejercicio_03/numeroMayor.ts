
//@ts-check

let numero :number [] = [1,2,3]

function obtenerMayor (...numbers : number[]){

   let mayor : number = numbers[0];

    for (let i : number = 0; i < numbers.length; i ++) {
        if (mayor < numbers[i]) {
            mayor = numbers[i]
            console.log(...numbers)
        } 
    }

    return console.log(`El valor mayor es ${mayor}`)

}


obtenerMayor(4,6,1)

