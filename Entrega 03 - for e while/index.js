var idade = 10

// while (idade < 18) {
  //  console.log('voce nao pode entrar aqui com ' + idade + ' anos')
   // idade ++
//} 

// console.log('Agora vc pode entrar aqui')


var h1 = document.getElementById('texto-ola')
console.log(h1)

var a = {
    nome: 'Luiza',
    idade: 21,
    caracteristica: 'muito engracada'
}

var b = {
    nome: 'Janaina',
    idade: 57,
    altura: 1.80
}

/*
function dizerOla() {
    alert('ola')
}

dizerOla()
*/

function quadrado(x) {
    var conta = x * x
    return conta
}


function cubo(x) {
    return x * x * x
}

function somar(a, b) {
    return a + b
}


/*function imprimirDadosPessoa(pessoa) {
    console.log('Nome da pessoa ' + pessoa.nome)
    console.log('Idade da pessoa ' + pessoa.idade)
    console.log('Altura da pessoa ' + pessoa.altura)
}

imprimirDadosPessoa(b)*/

// outra forma de chamar função

function imprimirDadosPessoa(pessoa) {
    console.log('Nome da pessoa ' + pessoa.nome)
    console.log('Idade da pessoa ' + pessoa.idade)
    console.log('Altura da pessoa ' + pessoa.altura)
}

imprimirDadosPessoa(b)

var funcao = imprimirDadosPessoa

function somarDoisNumeros(a,b, calcular) {
    return calcular(a) + calcular(b)
}

/*
console.log(somarDoisNumeros(10,5, quadrado))
console.log(somarDoisNumeros(10, 5, cubo))
*/

var funcoes = {
    a: imprimirDadosPessoa,
    b: somarDoisNumeros
}

funcoes.a(b)
console.log(funcoes.b(10,5, quadrado))

// var elemento = document.getElementById - outra maneira de fazer isso é assim:

var elemento = document.querySelector('h1')
console.log(elemento)

//querySelector te retorna o primeiro elemento do seletor

var item1 = {
    nome: 'geladeira',
    valor: 5.50
}

var item2 = {
    nome: 'livro',
    valor: 150.90
}

var item3 = {
    nome: 'carro',
    valor: 0.50
}


var itemsNoCarrinho = [item1, item2,item3]

/*
agora criamos um loop com while: 
var i = 0
var somaDosValores = 0
while(i < itemsNoCarrinho.length) {
    somaDosValores += itemsNoCarrinho[i].valor
    ++i
}
*/

var somaDosValores = 0
for(var i = 0; i < itemsNoCarrinho.length; i++) {
    somaDosValores += itemsNoCarrinho[i].valor
}

/*console.log('Subtotal  ' + somaDosValores)

for(var i = 0; i < itemsNoCarrinho.length; i++) {
    console.log('nome do produto: ' + itemsNoCarrinho[i].nome)
    console.log('valor do produto: ' + itemsNoCarrinho[i].valor)
}*/



// desafio: percorrer o vetor do final pro começo
for(var i = itemsNoCarrinho.length; i >= 0 ; i--) {
    console.log(itemsNoCarrinho[i])
}