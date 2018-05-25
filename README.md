# pw2181_1
Repositorio del servidor para la materia de PW.

$.ajax({
        url:'http://itculiacan.edu.mx/dadm/apipaselista/data/asignaincidencia.php?usuario='+usuario+'&usuariovalida='+token+'&periodoactual='+periodo+'&materia='+materia+'&grupo='+grupo+'&ncontrol='+numcontrol+'&incidencia='+incidencia,
        dataType: 'json',
        success: function (data) {
            
            console.log(data.respuesta);
            if (data.respuesta) {
                var resultadoasistencia;
                if(data.respuesta==true){
                    resultadoasistencia="A";

                }else if(data.respuesta==true){
                    resultadoasistencia="F";

                }
                $("#lstAlumnos").append(resultadoasistencia);

            } else {
                alert('Error');
            }
        }
    })
}
