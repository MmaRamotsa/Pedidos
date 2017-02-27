// Un pedido estará compuesto de:
// - Una fecha de pedido
// - Un número total de artículos
// - Un total de pedido
// - Una dirección de entrega
// - Una dirección de facturación
function Pedido(fecha, num, total, entrega, facturacion){
	//Estado
	this.fecha = fecha;
	this.numArticulos = num;
	this.total = total;
	this.dirEntrega = entrega;
	this.dirFacturacion = facturacion;
	//Comportamiento
	//Función que permita conocer por la Consola de Google Chrome, 
	// cada uno de los datos del pedido. 
	// Hacer una función diferente por cada dato. 
	this.verFecha = function (){
		console.log("La fecha del pedido es: " + this.fecha );
	}
	this.verNumArticulos = function (){
		console.log("El número de artículos del pedido es: " + this.numArticulos );
	}
	this.verTotal = function (){
		console.log("El total del pedido es: " + this.total );
	}
	this.verDirEntrega = function (){
		console.log("La dirección de entrega del pedido es: " + this.dirEntrega );
	}
	this.verDirFacturacion = function (){
		console.log("La dirección de facturación del pedido es: " + this.dirFacturacion );
	}
	// Debe poderse crear varios pedidos con todos los datos de un pedido, 
	// así como modificar las direcciones en cualquier momento.
}