const $ = require('jquery');
const{BrowserWindow}=require('electron').remote
const app = require('electron').app
const path = require('path')
const url = require('url')

function datosGrupos(claveMateria,claveGrupo,nombreMateria){
  this.claveMateria = claveMateria;
  this.claveGrupo = claveGrupo;
  this.nombreMateria = nombreMateria;
}

var materias;

function inicia(){
  var usuarioValida = require('electron').remote.getGlobal('informacion').token;
  var usuario = require('electron').remote.getGlobal('informacion').usuario;
  var periodo = require('electron').remote.getGlobal('informacion').periodo;
  var claveMateria="";
  var claveGrupo="";
  var nombreMateria="";
  var resultado="";
console.log(usuarioValida) //<------------ esto si lo imprime

  $.ajax({
    url:'http://itculiacan.edu.mx/dadm/apipaselista/data/obtienegrupos2.php?usuario=' + usuario + '&usuariovalida=' + usuarioValida + '&periodoactual=' + periodo,
    dataType:'json',
    seccess: function (data) {
      console.log(usuarioValida) //<------------ esto si lo imprime
    if (data.respuesta) {
      for (var i = 0; i < 3; i++) {
        materias = new array(3);
        claveMateria = data.grupos[i].clavemateria;
        claveGrupo = data.grupos[i].grupo;
        nombreMateria = data.grupos[i].materia;
        resultado = "<li>" + claveMateria[i] + " " + claveGrupo[i] + " " + nombreMateria;
        $("#lstGrupos").append(resultado);
        materias[i]=new materias(claveMateria,claveGrupo,nombreMateria);
        console.log(z), //<---------esto no
        alert("error")  //<---------esto tampoco
      }
    }else {
      alert("error")
    }
    }
  })
}
inicia();
