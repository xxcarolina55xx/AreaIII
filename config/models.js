// la siguiente funcion es exportada, ella recibe la instancia
// de expressjs
"use strict";

// base de datos
var dbs = require("../app/models/dbs.js");

// en orden de letra para facilitar busquedas en el editor

var avance_proyec = require("../app/models/avance_proyec.js");
var bitacora_proyect = require("../app/models/bitacora_proyect.js");
var clientes = require("../app/models/clinetes.js");
var faces = require("../app/models/faces.js");
var moneda = require("../app/models/moneda.js");
var personal = require("../app/models/personal.js");
var personas = require("../app/models/personas.js");
var proyecto = require("../app/models/proyecto.js");
var usuarios = require("../app/models/tipo_proyecto.js");