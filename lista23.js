
// let ID = [1, 4, 10, 40, 30]
// ExcluirId(ID)
// function ExcluirId(idParametro) {
//     let resultado = ID.every(function (idParametro) {
//         return (idParametro % 2 == 0)
        
//     })
//     console.log(resultado)
// }
// let ID = [1, 4, 10, 40, 30]
// ExcluirId(ID)
// function ExcluirId(idParametro) {
//     let resultado = ID.some(function (idParametro) {
//         return (idParametro % 2!= 0)
        
//     })
//     console.log(resultado)
// }

//array . sort() ordenar
let numeros = [8,2,5,1,9,100,4,3,7,6,0]
ordenar(numeros)
function ordenar(numerosParametro){
numerosParametro = numeros.sort((a,b)=>{
    return a-b
})
console.log(numeros)
}
