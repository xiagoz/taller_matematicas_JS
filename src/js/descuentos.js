const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

// const arrayUObjecto = undefined; // ['cupones': descuento] {}?

const couponObj = {
  'navidad': 50,
  'black friday': 70,
  'aniversario': 30,
};

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = "Favor llena el formulario";
    return;
  }

  let discount;

  if (couponObj[]) {
    //
  } else {
    //
  }

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
