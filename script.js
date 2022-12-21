//sessão 4, aula 1

// exercicio 1
/*let a = 2;
let b = 3;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)*/

//exercicio 2

/*const c = 0;
const d = 1;

if (c > d) {
    console.log(c + ' é maior')
}
else if (c < d){
    console.log(d + ' é maior')
}
else {
    console.log('ambos são iguais');
}*/

//exercicio 3

/*const e = 2
const f = 5
const g = 10

if (e > f && e > g){
    console.log(e + ' é o maior dentre os três')
}
else if (f > e && f > g){
    console.log(f + ' é o maior dentre os três')
}
else if (g > e && g > f){
    console.log(g + ' é o maior dentre os três')
}
else{
    console.log('todos são iguais')
}*/

//exercicio 4

/*const h = -4

if (h > 0){
    console.log('positivo')
}
else if (h < 0){
    console.log('negativo')
}
else{
    console.log('neutro')
}*/

//exercicio 5
/*
const j = 57
const k = 63
const l = 61

if (j + k + l === 180){
    console.log('é um triangulo')
} else{
    console.log('não é um triangulo')
}
*/

//exercicio 6

/*let xadrez = 'torre'

switch (xadrez){
    case 'bispo':
        console.log('diagonal')
        break 
 
    case 'torre':
        console.log('vertical horizontal')
        break
}*/

//exercicio 7

/*const nota = 99

if (nota < 100 && nota > 90){
    console.log('A')
}
else if (nota < 89 && nota > 80){
    console.log('B')
}
else if (nota < 79 && nota > 70){
    console.log('C')
}
else if (nota < 69 && nota > 60){
    console.log('D')
}
else if (nota < 59 && nota > 50){
    console.log('E')
} else{
    console.log('F')
}*/

//exercicio 8

/*const n = 2
const total = n%2
if (total === 0){
console.log('par')
}
else if(total === 1){
    console.log('impar')
}*/

//exercicio 9

/*const custo = 100
const venda = 150


if (custo < 0 || venda < 0){
    console.log('erro');
} 
else{
    const imposto = custo * 0.2
    const custoTotal = custo + imposto
    const lucro = venda - custoTotal
    console.log(1000 * lucro)
}*/
//exercicio 10

const salario = 4000
let salarioLiquido

if (salario <= 1556.93){
    salarioLiquido = salario - 0.08 * salario
}
else if (salario <= 2594.92){
    salarioLiquido = salario - 0.09 * salario
}
else if (salario <= 5189.82){
    salarioLiquido = salario - 0.11 * salario
}
else{
    salarioLiquido = salario - 570.88
}

if (salarioLiquido <= 1903.97){
}
else if(salarioLiquido <= 2826.65){
    salarioLiquido = salarioLiquido - salarioLiquido * 0.075
}
else if(salarioLiquido <= 3751.05){
    salarioLiquido = salarioLiquido - salarioLiquido * 0.15
}
else if(salarioLiquido <= 4664.68){
    salarioLiquido = salarioLiquido - salarioLiquido * 0.225
}
else{
    salarioLiquido = salarioLiquido - salarioLiquido * 0.275
}
console.log(salarioLiquido)