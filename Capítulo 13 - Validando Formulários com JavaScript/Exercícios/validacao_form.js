//pega o elemento form
var formE1 = document.getElementById("meuForm");

ChamaEvento(formE1, "submit",ValidarCampos);

function ChamaEvento(objeto, evento, funcao) {	
	
	if(objeto.addEventListener){
		objeto.addEventListener(evento,funcao, true);
	}

	//Teste attachEvent
	else if(objeto.attachEvent){
		var evento = 'on' + evento;
		objeto.attachEvent(evento, funcao);
	}

}

function ValidarCampos(event) {
	
	var campoLogin = formE1.txtLogin.value,
		campoSenha = formE1.txtSenha.value;

	if(campoLogin.length == 0){
		alert("Campo Login obrigatório");
		return false;
	}		

	if(campoSenha.length == 0){
		alert("Campo Senha obrigatório");
		return false;
	}else if(campoSenha.length < 8){
		alert("Campo Senha deve ter no minimo 8 caracteres");
		return false;
	}

	alert("Dados sendo enviados");
	return true;
}
