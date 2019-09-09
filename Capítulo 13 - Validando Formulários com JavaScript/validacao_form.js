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

function cancela_evento(evento) {
	if(event.preventDefaut){
		event.preventDefaut();
	}else{
		window.event.returnValue = false;
	}
}

function formValid(event) {
	
	//pega os campos text e select
	var campoNome = formE1.txtname.value,
		campoCidade = formE1.cidades;	

	//Verifica campo de texto
	if(campoNome.length == 0){
		alert("O campo Nome é obrigatório");
		return false;
	}

	//Laço que percorre todas as opções
	for(var i = 0; i < campoCidade.length; i++){

		if(campoCidade[i].selected){
			if(campoCidade[i].value == ""){
				alert("Selecione uma opção.");
				cancela_evento(evento);
			}
		}

	}

	alert("O Formulário será enviado");
	return true;
}