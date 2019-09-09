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

//Função que verifica os campos radio e checkbox
function verificaCampos(campo) {
	
	//variável que verifica os radios
	var checados = false;
	//verifica os radios
	for(var i = 0; i < campo.length; i++){
		if(campo[i].checked){
			checados = true;
		}
	}

	if(!checados){
		alert("Marque o campo " + campo[0].name);
		cancela_evento(evento);
		return false;
	}

}

function formValid(event) {
	
	//pega os campos text, select, radio e checkbox
	var campoNome = formE1.txtname.value,
		campoCidade = formE1.cidades,
		campoRadios = formE1.sexo,
		campoCheckbox = formE1.rede;	

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

	//Chama a função verificaCampos para o radio
	verificaCampos(campoRadios);

	//Chama a função verificaCampos para o checkbox
	verificaCampos(campoCheckbox);
	
	alert("O Formulário será enviado");
	return true;
}