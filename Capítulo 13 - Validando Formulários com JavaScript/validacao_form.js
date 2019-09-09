//pega o elemento form
var formE1 = document.getElementById("meuForm");

//chama a função captura_eventos
captura_eventos(formE1,"submit",formValid);

//Função para capturar eventos
function captura_eventos(objeto, evento, funcao) {
	
	//Teste addEventListener
	if(objeto.addEventListener){
		objeto.addEventListener(evento, funcao, true);
	}

	//Teste attachEvent
	else if(objeto.attachEvent){
		var evento = 'on' + evento;
		objeto.attachEvent(evento, funcao);
	}

}

function formValid(event) {
	
	if(document.forms[0].txtname.value.length == 0){
		alert("O campo Nome é obrigatório");

		if(event.preventDefaut){
			event.preventDefaut();
		}else{
			window.event.returnValue = false;
		}

		return false;
	}else{
		alert("Olá " + document.forms[0].txtname.value);
		return true;
	}
}




