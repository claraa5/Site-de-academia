const form = document.getElementById("form-imc");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (peso <= 0 || altura <= 0) {
    resultado.innerHTML = "Por favor, insira valores válidos!";
    resultado.style.color = "red";
    return;
  }

  const imc = peso / (altura * altura);

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Magreza";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade Grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade Grau II";
  } else {
    classificacao = "Obesidade Grau III";
  }

  resultado.innerHTML = `
    Seu IMC é: <strong>${imc.toFixed(2)}</strong><br>
    Classificação: <strong>${classificacao}</strong>
  `;
  resultado.style.color = "#1e90ff";
});
