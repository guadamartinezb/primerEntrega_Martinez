
let producto = [
    {nombre: "Base MAC", precio: 800, cantidaddisp: 30 },
    {nombre: "Corrector de ojeras", precio: 500, cantidaddisp: 20},
    {nombre: "Labial", precio: 350, cantidaddisp: 4},
    {nombre: "Macara de pestañas", precio: 700, cantidaddisp: 10},
]; 
console.log(producto.length)
let carrito = []

while (prodcutoselec != "si" && prodcutoselec != "no" ) {
   alert("Ingrese si o no")
   prodcutoselec = prompt("Bienvenido, Desae comprar algo? si o no")
  
if (prodcutoselec == "si") {
    alert("Nuestros productos son los siguientes:")
  let productosTodos = producto.map((producto) => producto.nombre + " " + producto.precio + "$")
 
switch (prodcutoselec) {
  case 1:
      seleccionarcantidad = parseFloat(prompt("Usted ha seleccionado la Base MAC, indique la cantidad que desea llevar"))
      total += cantidad (seleccionarcantidad, 800) 
      break;
  case 2:
      seleccionarcantidad = parseFloat(prompt("Usted ha seleccionado el Corrector de ojeras, indique la cantidad que desea llevar"))
      total += cantidad (seleccionarcantidad, 500)
      break;
  case 3:
      cantidad = parseFloat(prompt("Usted ha seleccionado el Labial, indique la cantidad que desea llevar"))
      total += cantidad (seleccionarcantidad, 350)
      break;
  case 4:
      seleccionarcantidad = parseFloat(prompt("Usted ha seleccionado la Mascara de Pestañas, indique la cantidad que desea llevar"))
      total += cantidad (seleccionarcantidad, 700)
      break;
  default:
      break;
}
// prodcutoselec = parseFloat(prompt("1-Base MAC 2-Corrector de ojeras 3-Labial 4-Mascara de pestañas"))

let cantidaddisp = parseInt(prompt("Cuantas unidades del producto desea comprar?"))
carrito.push({producto, cantidaddisp, precio})
console.log(carrito)
}
prodcutoselec = prompt("Desea continuar comprando?")

while(prodcutoselec === "no") { 
alert ("Gracias por su compra, lo esperamos pronto!")
carrito.forEach((carritoFin) => {
    alert(`producto: ${carritoFin.producto}, cantidaddisp: ${carritoFin.cantidaddisp}, Total a pagar por producoto ${carritoFin.cantidaddisp * carritoFin.precio }`)
})
break;
}
}
const total = carrito.reduce((ecc, el) => acc + el.precio * el.unidades, 0)
alert(`Total a pagar es: ${total}`)
