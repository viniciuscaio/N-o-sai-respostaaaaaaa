function calcularSoma() {
    const input = document.getElementById("numbersSoma").value;
    const numeros = input.split(',').map(Number);
    console.log('Números para soma:', numeros);  // Adicionado log
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    console.log('Soma calculada:', soma);  // Adicionado log
    return soma;
}

function calcularDivisao() {
    const input = document.getElementById("numbersDivisao").value;
    const numeros = input.split(',').map(Number);
    console.log('Números para divisão:', numeros);  // Adicionado log

    if (numeros.length === 1) return numeros[0];

    const divisao = numeros.reduce((acc, num) => acc / num);
    console.log('Divisão calculada:', divisao);  // Adicionado log
    return divisao;
}

function calcularMediaFinal() {
    const soma = calcularSoma();
    const divisao = calcularDivisao();

    console.log('Soma:', soma);  // Adicionado log
    console.log('Divisão:', divisao);  // Adicionado log

    if (divisao === 0 || isNaN(divisao)) {
        document.getElementById("resultadoMedia").textContent = "Erro: Divisão por zero ou entrada inválida.";
    } else {
        const media = soma / divisao;
        console.log('Média calculada:', media);  // Adicionado log
        document.getElementById("resultadoMedia").textContent = `A média aritmética é: ${media}`;
    }
}