console.group('Cuadrado');
// Calcular el perimetro de un cuadro
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado ** 2;

function calcCuadrado(ladoCuadrado) {
    return {
        perimetro: ladoCuadrado *4,
        area: ladoCuadrado **2,
    }
}

console.log(calcCuadrado(ladoCuadrado));

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});
console.groupEnd('Cuadrado');
console.group('Triangulo');
// Calcular el Triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulobase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo =ladoTriangulo1 + ladoTriangulo2 +ladoTriangulobase;
const areaTriangulo = (ladoTriangulobase * alturaTriangulo) / 2;

function calcTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,

    }
}

console.log(calcTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulobase, alturaTriangulo));
console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTriangulobase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});
console.groupEnd('Triangulo');
//Formulas del circulo
console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo **2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCirculo
})

function calcCirculo (radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI.toFixed(2),
        area: radioAlCuadrado * Math.PI.toFixed(2),
    }
}
console.log(calcCirculo(radioCirculo));
console.groupEnd('circulo');