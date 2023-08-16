const container = document.querySelector('.entrada.abertura');
const mudar = document.querySelector('.btn');
const popUp = document.querySelector('.fechar');
const retornar = document.querySelector('.saida.sair')
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const nome = document.querySelector('#Nome');
const saida = document.querySelector('.resultado');
const texto = document.querySelector('#texto');
const saudar = document.querySelector('#saudar');
const saudar2 = document.querySelector('#saudar2')

mudar.addEventListener('click', () => {
    const valor1 = parseFloat(nota1.value);
    const valor2 = parseFloat(nota2.value);
    const valor3 = parseFloat(nota3.value);

    let dataHoraSistema = new Date();
    let extrairHoras = dataHoraSistema.getHours();

    if(extrairHoras >= 0 || extrairHoras <= 12){
        saudar.innerHTML = "Bom dia!";
        if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
            texto.innerHTML = 'Prencha todos os campos!';
        } else {
            container.style.display = "none";
            retornar.style.display = "flex";
            
            let name = nome.value;
            let valorFinal = (valor1 + valor2 + valor3) / 3;

            if (valorFinal >= 7) {
                saudar2.innerHTML = "Bom dia!";
                saida.innerHTML = `<h1>${name} sua nota foi ${valorFinal.toFixed(2)} você foi aprovado</h1>`;
            } else if (valorFinal < 7 && valorFinal >= 4) {
                saudar2.innerHTML = "Bom dia!";
                saida.innerHTML = `<h1>${name} sua nota foi ${valorFinal.toFixed(2)} você foi para final</h1>`;
            } else {
                saudar2.innerHTML = "Bom dia!";
                saida.innerHTML = `<h1>${name} Sua nota foi ${valorFinal.toFixed(2)} você foi reprovado</h1>`;
            }
        }
    }else if (extrairHoras >= 13 || extrairHoras <= 18){
        saudar.innerHTML = "Boa tarde!";
        if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
            texto.innerHTML = 'Preencha todos os campos!';
        } else {
            container.style.display = "none";
            retornar.style.display = "flex";
            
            let name = nome.value;
            let valorFinal = (valor1 + valor2 + valor3) / 3;

            if (valorFinal >= 7) {
                saudar2.innerHTML = "Bom tarde!";
                saida.innerHTML = `<h1>${name} sua nota foi ${valorFinal.toFixed(2)} você foi aprovado</h1>`;
            } else if (valorFinal < 7 && valorFinal >= 4) {
                saudar2.innerHTML = "Bom tarde!";
                saida.innerHTML = `<h1>${name} sua nota foi ${valorFinal.toFixed(2)} você foi para final</h1>`;
            } else {
                saudar2.innerHTML = "Boa tarde!";
                saida.innerHTML = `<h1>${name} Sua nota foi ${valorFinal.toFixed(2)} você foi reprovado</h1>`;
            }
        }
    }else{
        saudar.innerHTML = "Boa noite!";
        if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
            texto.innerHTML = 'Preencha todos os campos!';
        } else {
            container.style.display = "none";
            retornar.style.display = "flex";
            
            let name = nome.value;
            let valorFinal = (valor1 + valor2 + valor3) / 3;

            if (valorFinal >= 7) {
                saudar2.innerHTML = "Bom noite!";
                saida.innerHTML = `<h1>${name} sua nota foi ${valorFinal.toFixed(2)} você foi aprovado</h1>`;
            } else if (valorFinal < 7 && valorFinal >= 4) {
                saudar2.innerHTML = "Bom noite!";
                saida.innerHTML = `<h1>${name} sua nota foi ${valorFinal.toFixed(2)} você foi para final</h1>`;
            } else {
                saudar2.innerHTML = "Boa noite!";
                saida.innerHTML = `<h1>${name} Sua nota foi ${valorFinal.toFixed(2)} você foi reprovado</h1>`;
            }
        }
}
});

popUp.addEventListener('click', () => {
    container.style.display = "flex";
    retornar.style.display = "none";
});
