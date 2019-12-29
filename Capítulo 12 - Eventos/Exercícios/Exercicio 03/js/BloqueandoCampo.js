window.addEventListener("load", function () {
	
	var segmento = document.getElementById("segmento");

	segmento.addEventListener("mouseout",function (event) {

		var segmento = document.getElementById("segmento").value;
		
		if(segmento == "GGC"){
			document.getElementById("labelExemplo").disabled = true;
		}else{
			document.getElementById("labelExemplo").disabled = false;
		}

	});
})