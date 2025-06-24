/* ATIVIDADE 1

let nivel = Number(prompt("Qual o seu nivel?"))
let horas = Number(prompt("Quantas horas voce trabalhou?"))
if(nivel == 1){
    alert(horas * 12)
}
else if(nivel == 2){
    alert(horas * 17)
}
else if(nivel == 3){
    alert(horas * 25)
}
else{
    alert("Digite um nivel existente")
}
*/

let comb = prompt("Escolha seu combustivel entre Alcool e Gasolina [A/G]")
let litros = Number(prompt("Quantos litros de Combustivel você deseja?"))
let desconto

if(comb == "A" || comb == "a"){
    if(litros <= 20){
        alert("Seu pedido foi de " + litros + "L" + " de " + "álcool, tendo um desconto de 3%")
        alert("preço em R$ a ser pago: " + (litros * 4.29  - litros * 0.03).toFixed(2))
    }
    else if(litros > 20){
        alert("Seu pedido foi de " + litros + "L" + " de " + "álcool, tendo um desconto de 5%")
        alert("preço em R$ a ser pago: " + (litros * 4.29  - litros * 0.05).toFixed(2))}
}
if(comb == "G" || comb == "g"){
    if(litros <= 20){
        alert("Seu pedido foi de " + litros + "L" + " de " + "gasolina, tendo um desconto de 4%")
        alert("preço em R$ a ser pago: " + (litros * 5.15  - litros * 0.04).toFixed(2))}
    else if(litros > 20){
        alert("Seu pedido foi de " + litros + "L" + " de " + "gasolina, tendo um desconto de 6%")
        alert("preço em R$ a ser pago: " + (litros * 5.15  - litros * 0.06).toFixed(2))
    }
} 1