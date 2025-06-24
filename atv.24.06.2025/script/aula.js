const aula = document.getElementById("aula")


function clicar(){
    aula.style.background = 'red'
    aula.innerText ='Clicou'
    aula.style.color = 'white'
}
function passou(){
    aula.style.backgroundColor = 'yellow'
     aula.style.color = 'black'
    aula.innerText = 'entrou'
}
function saiu(){
    aula.style.backgroundColor = 'gray'
    aula.innerText = 'botao'
}