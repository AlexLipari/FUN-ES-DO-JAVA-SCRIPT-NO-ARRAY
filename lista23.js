
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
// let numeros = [8, 2, 5, 1, 9, 100, 4, 3, 7, 6, 0]
// let nomes = ["Ligia", "cris", "bianca", "Sara", "Fabiana", "Eliane"]
// ordenar(numeros, nomes)
// function ordenar(numerosParametro, nomeParametro) {
//     numerosParametro = numeros.sort((a, b) => {
//         return a - b
//     })
//     nomeParametro = nomes.sort((a, b) => {
//         return a.localeCompare(b)
//     })
//     console.log(numeros, nomes)
// }

//array.map,filter e reduce
let produtos = [
    { id: 1, nome: "detergente", valor: 2.00, categoria: "limpeza" },
    { id: 4, nome: "Amaciante", valor: 6.50, categoria: "Limpeza" },
    { id: 3, nome: "Pão", valor: 2.00, categoria: "Alimento" },
    { id: 5, nome: "Queijo", valor: 8.00, categoria: "Alimento" },
    { id: 2, nome: "Leite", valor: 4.00, categoria: "Alimento" },
]
categoriaArrays()
function categoriaArrays(idParametro, nomeParametro, valorParametro, categoriaParametro) {
    idParametro = produtos.map(idParametro => idParametro.id)
    console.log(idParametro)
    nomeParametro = produtos.map(nomeParametro => nomeParametro.nome)
    console.log(nomeParametro)
    valorParametro = produtos.map(valorParametro => valorParametro.valor)
    console.log(valorParametro)
    categoriaParametro = produtos.map(categoriaParametro => categoriaParametro.categoria)
    console.log(categoriaParametro)
}
