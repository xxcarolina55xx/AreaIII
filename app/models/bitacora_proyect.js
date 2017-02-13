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
			"CREATE TABLE `bitacora_proyec` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`proyecto_id` INT(30) NOT NULL," +
				"`personal_id` INT(30) NOT NULL," +
				"PRIMARY KEY (`id`)," +
				"INDEX (`proyecto_id`),"+
				"INDEX (`personal_id`)"+
				") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla bitacora_proyec");
			else
				console.log("la tabla bitacora_proyec ya existe");
					
		});
	}
}
