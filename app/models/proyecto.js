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
			"CREATE TABLE `proyecto` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`cliente_id` INT(30) NOT NULL," +
				"`estatus_id` INT(30) NOT NULL," +
				"`tipo_proyecto` VARCHAR(30) NOT NULL," +
				"`Nombre_proyecto` VARCHAR(30) NOT NULL," +
				"`descripccion_proyecto` VARCHAR(180) NOT NULL," +
				"`costo` varchar(30) NOT NULL," +
				"`moneda_id` INT(30) NOT NULL," +
				"PRIMARY KEY (`id`)," +
				"INDEX (`cliente_id`)" +
				") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla proyecto");
			else
				console.log("la tabla proyecto ya existe");
			    
		});
	}
	agregar() {
		console.log("luego se creara");
	}
	eliminar() {
		console.log("luego se creara");
	}
	editar() {
		console.log("luego se creara");
	}
	ver() {
		console.log("luego se creara");
	}

}	