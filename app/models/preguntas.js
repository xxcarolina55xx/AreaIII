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
			// suficientemente inteligente como para ver un
			// string de varias lineas
			"CREATE TABLE `preguntas` (" +
				"`id` int(11) NOT NULL," +
				"`pregunta` varchar(100) NOT NULL" +
			") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;", function(err) {
			if (!err)
				console.log("creando la tabla preguntas");
			else
				console.log("la tabla preguntas ya existe");
		});
	}
}