var chamarFuncao = 0;	

var expressaoRegular = document.getElementById("expressaoRegular");
expressaoRegular.addEventListener("click",qualFuncaoChamo, true);

function qualFuncaoChamo(evento) {
	
  var comboMetodos = document.getElementById("cobMetodos");

  chamarFuncao = comboMetodos.selectedIndex;

	if(chamarFuncao == 1){
		stringSearch();
	}else if(chamarFuncao == 2){
		regexpExec();
	}else if(chamarFuncao == 3){
		stringReplace();
	}else if(chamarFuncao == 4){
		stringSplit();
	}else if(chamarFuncao == 5){
		regexpTest();
	}else{
    alert("Escolha um método da lista suspensa");
  }  
}	

function mostrarMensagem(str, expressao, n) {
  document.getElementById("stringOriginal").innerHTML = "<b>Frase original</b>: " + str;
  document.getElementById("expressaoUtilizada").innerHTML = "<b>Expressão Regular</b>: " +  expressao;
  document.getElementById("stringResultado").innerHTML =  "<b>Resultado: </b>" + n;    
}

function stringSearch() {

   	var str = "Expressões regulares em JavaScript! na DevMedia!";
    var expressao = "/[a+]/i"
   	var n = str.search(/[a+]/ig);

   	mostrarMensagem(str, expressao, n);
 	}

function regexpExec() {
 	var str = "Expressões regulares em JavaScript na DevMedia!";
  var expressao = "/[r+]/ig";
 	var regexp = new RegExp(/[r+]/ig);
 	var n = regexp.exec(str);

  mostrarMensagem(str, expressao, n); 	
}

function stringReplace() {
 	var str = "Expressões regulares em JavaScript na DevMedia!";
 	var expressao =  "/[a-j]/ig";
  var n = str.replace(/[a-j]/ig, "0");
 	
  mostrarMensagem(str, expressao, n);   
}

function stringSplit() {
	var str = "Expressões regulares em JavaScript na DevMedia!";
	var expressao =  "/[\\s]/i";
  var n = str.split(/[\s]/i);
  
  mostrarMensagem(str, expressao, n);   	
}

function regexpTest() {
    var str = "Expressões regulares em JavaScript na DevMedia!";
    var expressao =  "/[0-9]/i";
    var regexp = new RegExp(/[0-9]/i);        
    var n = regexp.test(str);
  
    mostrarMensagem(str, expressao, n);        
}