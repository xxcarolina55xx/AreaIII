"use strict";
var mysql = require("../../config/mysql.js");

module.exports = new class {
	constructor() {
		this.crear();
	}
	// crear tabla
	crear() {
		mysql.query(
			// esto es una concatenacion ya que javascript no es lo 
			// suficientemente INTeligente como para ver un
			// string de varias lineas
			"CREATE TABLE `clientes` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`rif` VARCHAR(30) NOT NULL," +
				"`nombre` VARCHAR(30) NOT NULL," +
				"`apellidos` VARCHAR(30) NOT NULL," +
				"`cedula` INT(8) NOT NULL," +
				"`direccion` VARCHAR(30) NOT NULL," +
				"`telefono` VARCHAR(30) NOT NULL," +
				"`email` VARCHAR(50) NOT NULL," +
				"`observaciones` VARCHAR(100) NOT NULL," +
				"PRIMARY KEY (`id`)" +
				") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla clientes");
			else

				console.log("la tabla clientes ya existe");
				
		});
	}
	agregar() {
		console.log("luego se creara");
	}
	eliminar() {
		console.log("luego se creara");
	}
	editar() {
		console.log("luego se creara");jh
	}
	ver() {
		console.log("luego se creara");
	}
}