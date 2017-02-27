// ===================================================
// Página creada por : Maria Antonia Martínez García
// Fecha: 27/02/2017
// versión : v2.0
// ===================================================
// Descripción: Un pedido está compuesto de los siguientes datos:
// - Una fecha de pedido
// - Un número total de artículos
// - Un total de pedido
// - Una dirección de entrega
// - Una dirección de facturación
// ===================================================
function Pedido(fechaPedido,
								numArticulos,
								totalPedido,
								dirEntrega,
								dirFacturacion){
	//Propiedades (Estado)
	this.fechaPedido = fechaPedido;
	this.numArticulos = numArticulos;
	this.totalPedido = totalPedido;
	this.dirEntrega = dirEntrega;
	this.dirFacturacion = dirFacturacion;
	// Métodos (Comportamiento)
	// Método para conocer la fecha del pedido.
	this.getFecha = function (){
		return this.fechaPedido;
	}
	//Método para modificar la fecha del pedido
	this.setFechaPedido = function(nuevaFechaPedido){
		this.fechaPedido= nuevaFechaPedido;
	}
	// Método para conocer el número de artículos del pedido.
	this.getNumArticulos = function (){
		return this.numArticulos;
	}
	//Método para modificar el número de artículos del pedido
	this.setNumArticulos = function(nuevoNumArticulos){
		this.numArticulos= nuevoNumArticulos;
	}
	// Método para conocer el total del pedido.
	this.getTotal = function (){
		return this.totalPedido;
	}
	//Método para modificar el total del pedido
	this.setTotal = function(nuevoTotal){
		this.totalPedido= nuevoTotal;
	}
	// Método para conocer la dirección de entrega del pedido.
	this.getDirEntrega = function (){
		return this.dirEntrega;
	}
	//Método para modificar la dirección de entrega
	this.setDirEntrega = function(nuevaDirEntrega){
		this.dirEntrega = nuevaDirEntrega;
	}
	// Método para conocer la dirección de facturación del pedido.
	this.getDirFacturacion = function (){
		return this.dirFacturacion;
	}
	//Método para modificar la dirección de facturación
	this.setDirFacturacion = function(nuevaDirFacturacion){
		this.dirFacturacion = nuevaDirFacturacion;
	}
}