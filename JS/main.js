// Crear variables para almacenar el stock, el precio y el total de cada producto
let stockPantalones = 0;
let precioPantalones = 100;
let stockChaquetas = 0;
let precioChaquetas = 150;
let stockCamperas = 0;
let precioCamperas = 200;
let stockRemeras = 0;
let precioRemeras = 50;
let total = 0;

carritoDeCompras()

function carritoDeCompras() {
    // Crear un bucle que se ejecute mientras el usuario no ingrese "Fin" para finalizar la compra
    while (true) {
      // Pedir al usuario que elija un producto
      let producto = prompt("Por favor elija un producto: Pantalones, Chaquetas, Camperas, Remeras o Fin para finalizar la compra");
   // Si el usuario elige Fin, mostrar el total de todos los productos comprados y terminar el proceso de compra
   if (producto === "Fin") {
    alert("El total de todos los productos comprados es $" + total);
    return;
  }

  // Pedir al usuario que ingrese la cantidad del producto elegido
  let cantidad = prompt("Por favor ingrese la cantidad del producto elegido:");

  // Determinar qué producto ha elegido el usuario y agregar la cantidad especificada al stock correspondiente
  switch (producto) {
    case "Pantalones":
      stockPantalones += cantidad;
      total += cantidad * precioPantalones;
      alert ("Producto agregado al carrito");
      break;
    case "Chaquetas":
      stockChaquetas += cantidad;
      total += cantidad * precioChaquetas;
      alert ("Producto agregado al carrito");
      break;
    case "Camperas":
      stockCamperas += cantidad;
      total += cantidad * precioCamperas;
      alert ("Producto agregado al carrito");
    }
    }
}