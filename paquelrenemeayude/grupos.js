const $ = require('jquery'),
{ BrowserWindow } = require('electron').remote,
app = require('electron').app,
path = require('path'),
url = require('url');
var tabla= document.getElementById("tablaalumnos");

function datosGrupos(claveMateria,claveGrupo,nombreMateria){
  this.claveMateria = claveMateria;
  this.claveGrupo = claveGrupo;
  this.nombreMateria = nombreMateria;
}

var materias = new Array(3);

function inicia(){
  var usuarioValida = require('electron').remote.getGlobal('informacion').token;
  var usuario = require('electron').remote.getGlobal('informacion').usuario;
  var periodo = require('electron').remote.getGlobal('informacion').periodo;
  var claveMateria="";
  var claveGrupo="";
  var nombreMateria="";

console.log(usuarioValida) //<------------ esto si lo imprime
console.log(usuario)
console.log(periodo)

  $.ajax({
    url:'http://itculiacan.edu.mx/dadm/apipaselista/data/obtienegrupos2.php?usuario='+usuario+'&usuariovalida='+usuarioValida+'&periodoactual='+periodo,
    dataType: 'json',
    success: function (data) {
        for (var i = 1; i < 4; i++) {
        var resultado="";
        claveMateria = data.grupos[i].clavemateria;
        claveGrupo = data.grupos[i].grupo;
        nombreMateria = data.grupos[i].materia;
        resultado = " Clave De Materia :"+ claveMateria + "-- Clave Grupo : " + claveGrupo + "--Nombre Materia : " + nombreMateria;
        materias[i]=new datosGrupos(claveMateria,claveGrupo,nombreMateria);
        
        var row = tablaalumnos.insertRow(i-1);
        var cell1 = row.insertCell(i-1);        
        cell1.innerHTML = resultado;
        $("#tablaalumnos").append(resultado);
        
      }
    }
  })
}
inicia();
