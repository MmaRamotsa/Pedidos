// ===================================================
// Página creada por : Maria Antonia Martínez García
// Fecha: 27/02/2017
// getsión : v1.0
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
	//Estado
	this.fechaPedido = fechaPedido;
	this.numArticulos = numArticulos;
	this.totalPedido = totalPedido;
	this.dirEntrega = dirEntrega;
	this.dirFacturacion = dirFacturacion;
	//Comportamiento
	// Método para conocer la fecha del pedido.
	this.getFecha = function (){
		return this.fechaPedido;
	}
	// Método para conocer el número de artículos del pedido.
	this.getNumArticulos = function (){
		return this.numArticulos;
	}
	// Método para conocer el total del pedido.
	this.getTotal = function (){
		return this.totalPedido;
	}
	// Método para conocer la dirección de entrega del pedido.
	this.getDirEntrega = function (){
		return this.dirEntrega;
	}
	// Método para conocer la dirección de facturación del pedido.
	this.getDirFacturacion = function (){
		return this.dirFacturacion;
	}

	//Método para modificar la dirección de entrega
	this.setDirEntrega = function(nuevaDirEntrega){
		this.dirEntrega = nuevaDirEntrega;
	}
	//Método para modificar la dirección de facturación
	this.setDirFacturacion = function(nuevaDirFacturacion){
		this.dirFacturacion = nuevaDirFacturacion;
	}
}