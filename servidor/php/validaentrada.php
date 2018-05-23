<?php
include 'conexiones.php';//incluye el archivo
function valida(){
	$respuesta = false;
	$usuario = $_POST["usuario"];
	$clave = md5($_POST["clave"]);
	//conectarnos al servidor de base de datos.
	$con= conecta();
	$consulta=" select * from usuarios where usuario= '".$usuario."' and clave='".$clave."' limit 1";
	//echo $consulta;
	$resConsulta=mysqli_query($con,$consulta);
	if(mysqli_num_rows($resConsulta)>0){
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta );
	print json_encode($salidaJSON);
}

$opc =  $_POST["opc"];
switch ($opc) {
	case 'validaentrada':
		valida();
		break;
	
	default:
		# code...
		break;
}

?>