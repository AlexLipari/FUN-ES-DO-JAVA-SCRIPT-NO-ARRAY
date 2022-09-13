
// let ID = [1, 4, 10, 40, 30]
// ExcluirId(ID)
// function ExcluirId(idParametro) {
//     let resultado = ID.every(function (idParametro) {
//         return (idParametro % 2 == 0)
        
//     })
//     console.log(resultado)
// }
let ID = [1, 4, 10, 40, 30]
ExcluirId(ID)
function ExcluirId(idParametro) {
    let resultado = ID.some(function (idParametro) {
        return (idParametro = !  2 == 0)
        
    })
    console.log(resultado)
}