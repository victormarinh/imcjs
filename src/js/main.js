const form = document.querySelector("#formulario");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let resultado = document.querySelector("#resultado");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    resultado.innerHTML = "";
    let formResult = showResult();

    if(altura.value == "" || peso.value == ""){
        //resultado.append("");
        resultado.append("Preencha todos o campos acima!");
    }
    else{
        //resultado.append("");
        if(formResult <= 18.5){
            resultado.append(`Seu IMC é: ${formResult.replace('.', ',')}, sua classificação é Magreza`);
        }
        else if(formResult <= 24.9){
            resultado.append(`Seu IMC é: ${formResult.replace('.', ',')}, sua classificação é Normal`);
        }
        else if(formResult <= 29.9){
            resultado.append(`Seu IMC é: ${formResult.replace('.', ',')}, sua classificação é Sobrepeso Grau |`);
        }
        else if(formResult <= 39.9){
            resultado.append(`Seu IMC é: ${formResult.replace('.', ',')}, sua classificação é Obesidade Grau ||`);
        }
        else if(formResult > 40){
            resultado.append(`Seu IMC é: ${formResult.replace('.', ',')}, sua classificação é Obesidade Grau |||`);
        }

        peso.value = "";
        altura.value = "";
        
        //console.log(formResult);
        
    }
});

function calc(){
    let replaceAltura = altura.value.replace(",", ".");
    let calcResult = peso.value / (replaceAltura * replaceAltura);
    return calcResult;
}

function showResult(){
    let showResult = calc().toFixed(1);
    return showResult;
}

