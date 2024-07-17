function calcular(){
    let val1 = parseFloat(document.getElementById("imput1").value);
    let val2 = parseFloat(document.getElementById("imput2").value);
    let result = document.getElementById("result");
    let grau = document.getElementById("grau");

    let imc = val1 / (val2 * val2);
    result.innerHTML = "Seu IMC é " + imc.toFixed(1);

    if (imc < 18.5){
        grau.innerHTML = "Classificação: Magreza";
    } else if (imc < 24.9){
        grau.innerHTML = "Classifiação: Normal";
    } else if (imc < 29.9){
        grau.innerHTML = "Classificação: Sobrepeso";
    } else if (imc < 39.9){
        grau.innerHTML = "Classificação: Obesidade";
    } else {
        grau.innerHTML = "Classificação: Obesidade Grave";
    }
}