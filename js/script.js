const container = document.querySelector('.entrada.abertura');
const mudar = document.querySelector('.btn');
const popUp = document.querySelector('.fechar');
const retornar = document.querySelector('.saida.sair')
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const nome = document.querySelector('#Nome');
const saida = document.querySelector('.resultado');

mudar.addEventListener('click', ()=>{
    container.style.display = "none";
    retornar.style.display = "flex";

    event.preventDefault();

    let name = nome.value;
    let valor1 = parseFloat(nota1.value);
    let valor2 = parseFloat(nota2.value);
    let valor3 = parseFloat(nota3.value);

    let valorFinal = (valor1 + valor2 + valor3) / 3;

    if(valorFinal>=7){
        saida.innerHTML = `<h1>${name} Aprovado ${valorFinal.toFixed(2)}</h1>`;
    }else if(valorFinal<7 && valorFinal>=4){
        saida.innerHTML = `<h1>${name} Final ${valorFinal.toFixed(2)}</h1>`;
    }else{
        saida.innerHTML = `<h1>${name} Se fudeu ${valorFinal.toFixed(2)}</h1>`;
    }
    
});

popUp.addEventListener('click', ()=>{
    container.style.display = "flex";
    retornar.style.display = "none";
});

