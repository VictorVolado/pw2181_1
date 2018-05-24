var inicioApp =function(){
	
	var Aceptar = function(){
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		var parametros ="opc=validaentrada"+"&usuario="+usuario+"&clave="+clave+"&id="+Math.random();

		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/validaentrada.php",
			data: parametros,
			success: function(response){
				console.log(response)
				if(response.respuesta){
					$("#secInicio").hide("slow");
					$("#frmUsuarios").show("slow");
					$("#txtNombreUsuario").focus();//posiciona el cursor en el cuadro de texto
				}else{
					alert("usuario o contrasena incorrecta(s)");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				console.log(xhr + ajaxOptions + thrown);

			}
		});
	}

	var buscaUsuario = function(){
		var usuario = $("#txtNombreUsuario").val();
		var parametros = "opc=buscaUsuario"+"&usuario="+"&aleatorio="+random.Math();
		if(usuario != ""){
			$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/buscausuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta){
					$("txtNombreUsuario").val(response.nombre);
					$("txtClaveUsuario").val(response.clave);
				}else{
					$("txtNombre").focus();
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				console.log(xhr + ajaxOptions + thrown);

			}
		});

		}
	}

	var teclaNombreUsuario = function (tecla){
		if(tecla.which == 13){//enter
			buscaUsuario();
		}
	}
	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#frmUsuarios")
}



$(document).ready(inicioApp);