// window.alert('Meu primeiro programa');
// window.confirm('Você está gostando do curso de JS?');
// var nome = window.prompt('Qual é seu nome?');
// alert(`Olá, ${nome}!`);

// var n1 = Number(window.prompt('Digite um número: '));
// var n2 = Number(window.prompt('Digite outro número: '));
// var s = n1 + n2;
// window.alert(`A soma dos valores é: ${s}`);

// var nome = window.prompt('Qual é seu nome?');
// document.write(`Seu nome é ${nome} e tem ${nome.length} letras.`);

var n1 = 1545.5;

// console.log(n1.toFixed(2));
console.log(n1.toLocaleString('pt-BR', {style: "currency", currency: 'BRL'}));
