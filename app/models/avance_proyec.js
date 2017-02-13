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
			"CREATE TABLE `avance_proyec` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`proyectos` VARCHAR(30) NOT NULL," +
				"`avances_id` INT(30) NOT NULL," +
				
				"PRIMARY KEY (`id`)," +
				") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla avance_proyecto");
			else
				console.log("la tabla avance_proyecto ya existe");
			
		});

	}
}


			