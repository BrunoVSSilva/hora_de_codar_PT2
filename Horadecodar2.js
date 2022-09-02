/* resposta 1
var a =parseInt(prompt("Insira o valor A"));
var b =parseInt(prompt("Insira o valor B"));

if(a > b){
document.write(a)
} else if(b > a){
document.write(b)
};
*/

/* resposta 2
var a =parseInt(prompt("Insira o valor A"));

if(a > 0){
    alert("positivo")
}
else if(a < 0){
    alert("negativo")
}
else{
    alert("igual a 0")
}
*/

/* resposta 3
var a =parseInt(prompt("Insira o valor A"));
var b =parseInt(prompt("Insira o valor B"));
var c =parseInt(prompt("Insira o valor C"));

if(a > b && a > c){
    document.write(a)
} else if (b > c && b > a ){
    document.write(b)
}
 else if (c > b && c > a ){
    document.write(c)
}
*/

/* resposta 4
var a =parseInt(prompt("Insira o valor A"));
var b =parseInt(prompt("Insira o valor B"));
var c =parseInt(prompt("Insira o valor C"));
var d;

if(a > c && b > c){
    alert(a + b);
}
else if(b > a && c > a){
    alert(b + c);
}
else if(c > b && a > b){
    alert(c + a);
}
*/
/* Primeira condição o C é o menor de todos, segunda condição A é o menor, terceira condição B é o menor de todos.*/

/* resposta 5
var v1 =parseInt(prompt("Primeiro valor"));
var v2 =parseInt(prompt("Segundo valor"));
var v3 =parseInt(prompt("Terceiro valor"));
var v4 =parseInt(prompt("Quarto valor"));
var v5 =parseInt(prompt("Quinto valor"));
var v6 =parseInt(prompt("Sexto valor "));
var vt = (v1 + v2 + v3 + v4 + v5 + v6) / 6;
alert("Valores inseridos: " + v1 + ", " + v2 + ", " + v3 + ", " + v4 + ", " + v5 + ", " + v6 + " Média aritmética: " + vt);
*/

/* resposta 6
var a =parseInt(prompt("Primeiro valor"));
var b =parseInt(prompt("Segundo valor"));
var c =parseInt(prompt("Terceiro valor"));
var d =parseInt(prompt("Quarto valor"));

alert("Primeiro Valor: " + a);
alert("Quarto Valor: " + d);

if(a > b && a > c && a > d){
    alert("Maior Valor " + a);
} else if (b > c && b > a && b > d){
    alert("Maior Valor " + b);
}
 else if (c > b && c > a && c > d){
    alert("Maior Valor " + c);
}
else if (d > b && d > a && d > c){
    alert("Maior Valor " + d);
}
*/

/* resposta 7
var v1 =parseInt(prompt("Primeiro valor"));
var v2 =parseInt(prompt("Segundo valor"));
var v3 =parseInt(prompt("Terceiro valor"));
var v4 =parseInt(prompt("Quarto valor"));
var v5 =parseInt(prompt("Quinto valor"));
var v6 =parseInt(prompt("Sexto valor "));
var acum = 0


if( v1 <72){
    acum += v1
}
if( v2 <72){
    acum += v2
}
if( v3 <72){
    acum += v3
}
if( v4 <72){
    acum += v4
}
if( v5 <72){
    acum += v5
}
if(  v6 <72){
    acum += v6
}
alert("Os valores informados " + v1 + " " + v2 + " " + v3 + " " + v4 + " " + v5 + " " + v6 + " Soma de todos: " + acum)
*/

/* resposta 8
var v1 =parseInt(prompt("Primeiro valor"));
var v2 =parseInt(prompt("Segundo valor"));
var v3 =parseInt(prompt("Terceiro valor"));
var v4 =parseInt(prompt("Quarto valor"));
var acum = 0


if(v1 > 0 && v1 < 10){
    acum += v1
}
if(v2 > 0 && v2 < 10){
    acum += v2
}
if(v3 > 0 && v3 < 10){
    acum += v3
}
if(v4 > 0 && v4 < 10){
    acum += v4
}

var med = acum/4


if(med > 5){
alert("Você passou no teste");
}
else{
alert("Tente novamente");
}
*/

/* resposta 9
var v1 =parseInt(prompt("Insira o ano do seu nascimento"));

if(v1 < 2006){
    alert("Você pode votar, lembre-se que Com grandes poderes vêm grandes responsabilidades")
}
else{
    alert("Você não pode votar ainda")
}
*/

/* resposta 10
var g =parseInt(prompt("Informe seu gênero, sendo (1) feminino e (2) masculino"));
var h =parseFloat(prompt("Informe sua altura"));
var f = 1
var m = 2
var fh = (h * 62.1) - 44.7
var mh = (h * 72.7) - 58

if(g == f){
    alert("Seu peso ideal é: " + fh);
}
if(g == m){
    alert("Seu peso ideal é: " + mh);
}
*/

/* resposta 11
var oper =parseInt(prompt(" (1) Adição, (2) Subtração, (3) Divisão, (4) Multiplicação "));
var valor1 =parseFloat(prompt("Insira o primeiro número"));
var valor2 =parseFloat(prompt("Insira o segundo número"));
var adi = valor1 + valor2
var sub = valor1 - valor2
var div = valor1 / valor2
var multi = valor1 * valor2

if(oper == 1){
    alert(adi);
}
if(oper == 2){
    alert(sub);
}
if(oper == 3){
    alert(div);
}
if(oper == 4){
    alert(multi);
}
*/