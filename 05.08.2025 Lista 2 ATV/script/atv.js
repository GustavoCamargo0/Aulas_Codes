// LISTA 2

/* ATIVIDADE 1
let numfato = Number(prompt("Quantos numeros devem ser lidos?: "))
let soma = 1

for (let index = 1; index <= numfato; index++){
    let fato = Number(prompt("Qual o numero a ser fatorado? "))
    for (fato; fato >= 1 ; fato--) {
        soma *= fato
    }
alert(soma)
soma = 1
}
*/

/* ATIVIDADE 2 

let numlidos = Number(prompt("Quantos numeros serão lidos?"))
let num0_25 = 0
let num26_50 = 0
let num51_75 = 0
let num76_100 = 0
let num = 0

for (let index = 1; index <= numlidos ; index++) {
    num = (prompt("numero a ser lido:"))
    if(num >= 0 && num <= 25){
        num0_25++
    }
    else if(num >= 26 && num <= 50){
        num26_50++
    }
    else if(num >= 51 && num <= 75){
        num51_75++
    }
    else
        {num76_100++}

}
console.log("numeros entre 0 e 25:" + num0_25)
console.log("numeros entre 26 e 50:" + num26_50)
console.log("numeros entre 51 e 75:" + num51_75)
console.log("numeros entre 76 e 100:" + num76_100)
*/

/* ATIVIDADE 3
let posneg = 0
let somaneg = 0

for (let index = 1; index <= 10 ; index++) {
    posneg = Number(prompt("Digite um valor"))
    if (posneg < 0){
        somaneg += posneg}
}
alert("soma dos negativos:" + somaneg)
*/

/* ATIVIDADE 4
let chico = 1.50
let juca = 1.10
let anos = 0

while (chico > juca) {
    chico += 0.02
    juca += 0.03
    anos++
}
alert("em " + anos + " anos juca irá passar chico em altura")
*/

/* ATIVIDADE 5
let num = 1
let num100_200 = 0
while (num != 0){
 num = prompt("Digite um numero")
 if(num >= 100 && num <= 200){
    num100_200++}
}
alert(num100_200 + " numeros entre 100 e 200 foram digitados.")
*/

/* ATIVIDADE 6
let  cont = 1
for (let index = 0; index <= 64; index++) {
    alert(cont)
    cont *= 2
}
*/

/* ATIVIDADE 7
let num = 0
let maior = 0
while (num != -1) {
    num = prompt("Digite um numero")
    if(maior < num){
        maior = num
    }
}
alert("o maior numero digitado foi: " + maior)

*/
