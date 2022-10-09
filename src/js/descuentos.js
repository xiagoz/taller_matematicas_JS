const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

// const arrayUObjecto = undefined; // ['cupones': descuento] {}?

// Con Objetos
// const couponObj = {
//   "navidad": 50,
//   "black friday": 70,
//   "aniversario": 30,
// };

// Con arrays
const couponList = [];
// Como en la función preguntamos es por el nombre del cupon
// entonces trabajamos agregando objetos al array, para obtener ese valor
couponList.push({
  name: 'navidad',
  discount: 50
});
couponList.push({
  name: 'black friday',
  discount: 70
});
couponList.push({
  name: 'aniversario',
  discount: 30
});

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;
  let discount;

  if (!price || !coupon) {
    pResult.innerText = "Favor llena el formulario";
    return;
  }
  function isAValidCoupon(couponElement) { // {name, discount}
    return couponElement.name == coupon;
  }

  // const couponInArray = couponList.filter(isAValidCoupon); // devuelve un array: [{}]
  const couponInArray = couponList.find(isAValidCoupon); // devuelve un objeto: {}

  //Lógica del copun con array / Método FILTER

  // if (couponInArray.length > 0) {
  //   discount = couponInArray[0].discount;
  // } else {
  //   pResult.innerText = 'El cupon ingresado no es valido';
  // }

  //Lógica del copun con un objeto / Método FIND

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = 'El cupon ingresado no es valido';
  }

  console.log({
    coupon,
    discount,
    couponInArray,
    couponList,
  });

  // if (couponObj[coupon]) { //busca por el nombre del cupopn
  //   discount = couponObj[coupon];
  // } else {
  //   pResult.innerText = 'El cupon ingresado no es valido';
  //   return;
  // }

  // switch (coupon) {
  //   case "JuanDC_es_Batman":
  //     discount = 30;
  //     break;
  //   case "no_le_digas_a_nadie":
  //     discount = 25;
  //     break;
  //   default:
  //     pResult.innerText = "El cupón no es válido";
  //     return;
  // }

  // if (coupon == 'JuanDC_es_Batman') {
  //   discount = 30;
  // } else if (coupon == 'no_le_digas_a_nadie') {
  //   discount = 25;
  // } else {
  // pResult.innerText = 'El cupón no es válido';
  // return;
  // }

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}
