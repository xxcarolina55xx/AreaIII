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
			"CREATE TABLE `personal` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`id_personas` INT(30) NOT NULL," +
				"`Fecha_ingreso` VARCHAR(30) NOT NULL," +
				"PRIMARY KEY (`id`)," +
				"INDEX (`id_personas`)" +
				") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla personal");
			else
				console.log("la tabla personal ya existe");
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