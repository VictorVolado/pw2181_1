const{app,BrowserWindow} = require('electron'),
path = require('path'),
url = require('url');

let pantallaLogin;

global.informacion ={
  usuario:'',
  token:'',
  periodo:''
}

function muestraPantallaLogin(){
pantallaLogin = new BrowserWindow ({width:800,heigth:600});
pantallaLogin.loadURL(url.format({
  pathname: path.join(__dirname,'index.html'),
  protocol: 'file',
  slashes: true
}))
pantallaLogin.show();
}

app.on('ready',muestraPantallaLogin);
