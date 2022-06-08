var subtrair = document.getElementById('subtrair');
var adicionar = document.getElementById('adicionar');
var reseta = document.getElementById('reseta');
var numero = document.getElementById('numero');
var total = 0;

subtrair.addEventListener('click', () => {
    total = total - 1;
    numero.innerHTML = total;
})

adicionar.addEventListener('click', () => {
    total = total + 1;
    numero.innerHTML = total;
})

reseta.addEventListener('click', () => {
    total = 0;
    numero.innerHTML = total;
})

/*RESOLVIDO E IMPLEMENTADO NOVAS FUNÇÕES*/