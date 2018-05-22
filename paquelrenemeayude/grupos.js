const $ = require('jquery'),
{ BrowserWindow } = require('electron').remote,
app = require('electron').app,
path = require('path'),
url = require('url');

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
        resultado = "<li>" +" Clave De Materia :"+ claveMateria[i] + "-- Clave Grupo : " + claveGrupo[i] + "--Nombre Materia : " + nombreMateria[i];
        materias[i]=new datosGrupos(claveMateria,claveGrupo,nombreMateria);
        $("#lstgrupo").append(resultado);

      }
    }
  })
}
inicia();
