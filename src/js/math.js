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

function calcAlturaTriangulo(lado1, base) {
    if (base == lado1) {
        console.warn('Este no es un triangulo isosceles');
    } else {
        // Formula h = sqrt((a**2 - (b**2/4))
        return altura = Math.sqrt((lado1 ** 2) - ((base ** 2)/4));
    }
}

console.log(calcTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulobase, alturaTriangulo));
console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTriangulobase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});
console.groupEnd('Triangulo');
console.log(calcAlturaTriangulo(6, 6));


// RETO#1 - Triángulo Escaleno (Todos sus lados son diferentes)
// Descripción: Sabiendo lo que miden los 3 lados, encuentra
// la altura.
const lado1Base = 6;
const lado2 = 8;
const lado3 = 10;

// Ecuaciones:
// h = ((2/lado1Base)*(Math.sqrt(s*(s-lado1Base)*(s-lado2)*(s-lado3)));
// s = ((lado1Base+lado2+lado3) / 2);

function calcAlturaEscaleno(lado1Base, lado2, lado3) {
    if (lado1Base != lado2 && lado2 != lado3 && lado1Base != lado3) {
        const s = ((lado1Base+lado2+lado3) / 2);
        return ((2/lado1Base)*(Math.sqrt(s*(s-lado1Base)*(s-lado2)*(s-lado3))));
    } else {
        console.log('Este no es un triángulo Escaleno');
    }
}

function semiperimetro(lado1Base, lado2, lado3) {
    return ((lado1Base+lado2+lado3) / 2);
}

console.log(calcAlturaEscaleno(lado1Base, lado2, lado3));

// ------  ------


// Sección Porcentaje
const button = document.querySelector('.calc');
const result = document.querySelector('.result');

const price = document.querySelector('#price');
const discount = document.querySelector('#discount');

button.addEventListener('click', calcPorcentaje);

function calcPorcentaje() {
    if(price.value == '' || discount.value == ''){
        alert('Favor rellenar los campos');
    }

    let res = ((Number(price.value) * (100 - Number(discount.value)) / 100)).toFixed(2);
    
    if(res > 0){
        result.innerText = `El precio final del producto es: $${res} con un descuento aplicado del ${discount.value}%`;
    
        price.value = '';
        discount.value = '';
        res = 0;
    }
}
