const $ = require('jquery');
const{BrowserWindow}=require('electron').remote
const app = require('electron').app
const path = require('path')
const url = require('url')

let pantallaMaterias;


function inicia(){
  var usuario = $("#txtUsuario").val();
  var contraseña = $("#txtContraseña").val();
  var periodoActual = "";
  var usuarioValida = "";


  $.ajax({
    url: 'http://itculiacan.edu.mx/dadm/apipaselista/data/validausuario.php?usuario=' + usuario + '&clave=' + contraseña,
    dataType:'json',
    success: function(data){
      if(data.respuesta){
          periodoActual = data.periodoactual;
          usuarioValida = data.usuariovalida;

          require('electron').remote.getGlobal('informacion').usuario = usuario;
          require('electron').remote.getGlobal('informacion').periodo = periodoActual;
          require('electron').remote.getGlobal('informacion').token = usuarioValida;

          pantallaMaterias = new BrowserWindow({width:800,heigth:600})
          pantallaMaterias.loadURL(url.format({
            pathname: path.join(__dirname,'grupos.html'),
            protocol:'file',
            slashes:true
          }));
          pantallaMaterias.show();
      }else{
        alert('ERROR');
      }
    }
  });
}

$("#btnEntrar").on("click",inicia);
