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
		var parametros = "opc=buscaUsuario"+"&usuario="+usuario+"&aleatorio="+Math.random();
		if(usuario != ""){
			$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/buscausuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					$("#txtNombre").val(response.nombre);
					$("#txtClaveUsuario").val(response.clave);
				}else{
					$("#txtNombre").focus();
					$("#txtNombre").val("");
					$("#txtClaveUsuario").val("");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){

			}
		});

		}
	}

	var teclaNombreUsuario = function (tecla){
		if(tecla.which == 13){//enter
			buscaUsuario();
		}

	var Guardar = function(){
		var usuario =$("#txtNombreUsuario").val();
		var nombre =$("#txtNom").val();
		var clave =$("#txtClaveUsuario").val();
		if(usuario!="" && nombre!="" && clave!=""){
			var usuario = $("#txtNombreUsuario").val();
		var parametros = "opc=buscaUsuario"+"&usuario="+usuario+"&aleatorio="+Math.random();
		if(usuario != ""){
			$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/buscausuario.php",
			data: parametros,
			success: function(response){
			
			},
			error:function(xhr,ajaxOptions,thrownError){

			}
		});

		}else{
			alert("Llene todos los datos")
		}
	}
	}
	$("#btnAceptar").on("click",Aceptar);
	$("#btnGuardar").on("click",Guardar)
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#frmUsuarios")
}



$(document).ready(inicioApp);