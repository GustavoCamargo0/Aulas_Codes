

function calc(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = document.getElementById("result")
    const opera = document.getElementById("opera")
    let soma 
    if(opera.value === "soma" ){
        soma = num1 + num2
    }
    else if(opera.value === "sub"){
        soma = num1 - num2
    }
    else if(opera.value === "multi"){
        soma = num1 * num2
    }
    else if(opera.value === "div"){
        if(num2 === 0){
            result.innerText = "Disivao por zero não é permitida"; 
        }
      else{soma = num1 / num2
        }
    }
    

    result.innerText = soma;
}