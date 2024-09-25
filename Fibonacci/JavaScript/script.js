function calcularFibonacci() {
    const numero = parseInt(document.getElementById('numberInput').value);
    let resultado = '';

    if (isNaN(numero) || numero < 0) {
        resultado = 'Por favor, digite um número válido.';
    } else {
        let a = 0, b = 1;
        resultado += 'Sequência de Fibonacci até ' + numero + ':<br>';
        while (a <= numero) {
            resultado += a + ' ';
            [a, b] = [b, a + b]; 
        }
    }

    document.getElementById('resultado').innerHTML = resultado;
}