const numero1 = document.getElementById('valor1');
const numero2 = document.getElementById('valor2');
const somar = document.getElementById('somar');
const resultado = document.getElementById('resultado');

function soma(){
    let valor1 = parseFloat(numero1.value);
    let valor2 = parseFloat(numero2.value);
    let valor = valor1 + valor2;
    resultado.textContent = `O resultado + ${valor}`
}
somar.addEventListener('click',soma);