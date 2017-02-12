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
			"CREATE TABLE `persona` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`created DATETIME`" +
				"`proyectos` varchar(30) NOT NULL," +
				"`avances_id` int(30) NOT NULL," +
				
				"PRIMARY KEY (`id`)," +
				"INDEX (`avances_id`)" +
				") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla proyecto");
			else
				console.log("la tabla proyecto ya existe");
		});