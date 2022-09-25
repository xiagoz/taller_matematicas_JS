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
const cupon1 = document.querySelector('#cupon1');
const cupon2 = document.querySelector('#cupon2');
const cupon3 = document.querySelector('#cupon3');

let selectedCupon;

button.addEventListener('click', calcPorcentaje);

function calcPorcentaje() {
    let discount = isChecked();

    if(price.value == '' || discount == '') {
        alert('Favor ingrese un precio o seleccione un descuento');
    }


    // if (Number(discount.value) > 100){
    //     alert('El descuento no puede ser mayor al 100% corrije el número');
    // }

    let res = ((Number(price.value) * (100 - Number(discount)) / 100)).toFixed(2);
    
    if(res > 0){
        result.innerText = `El precio final del producto es: $${res} con un descuento aplicado del ${discount}%`;
        
        price.value = '';
        disableChecked();
        res = 0;
    }
}

function isChecked() {
    if(cupon1.checked) {
        selectedCupon = 1;
        return Number(cupon1.value);
    } else if(cupon2.checked) {
        selectedCupon = 2;
        return Number(cupon2.value);
    } else if(cupon3.checked) {
        selectedCupon = 3;
        return Number(cupon3.value);
    } else {
        return ' ';
    }
}

function disableChecked() {
    if(selectedCupon==1) {
        selectedCupon = 0;
        return cupon1.checked = false;
    } else if(selectedCupon==2) {
        selectedCupon = 0;
        return cupon2.checked = false;
    } else if(selectedCupon==3) {
        selectedCupon = 0;
        return cupon3.checked = false;
    }
}
