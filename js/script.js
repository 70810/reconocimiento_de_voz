window.onload = function()
{
	var recognition;
	var recognizing = false;
	if (!('webkitSpeechRecognition' in window)) {
		alert("¡API no soportada!");
	} else {

		recognition = new webkitSpeechRecognition();
		recognition.lang = "es-VE";
		recognition.continuous = true;
		recognition.interimResults = true;

		recognition.onstart = function() {
			recognizing = true;
			console.log("empezando a eschucar");
				}
		recognition.onresult = function(event) {

		 for (var i = event.resultIndex; i < event.results.length; i++) {
			if(event.results[i].isFinal)
				document.getElementById("texto").value += event.results[i][0].transcript;
		    }
			
			//texto
		}
		recognition.onerror = function(event) {
			console.log("hay un error");
			alert("error!");
		}
		recognition.onend = function() {
			recognizing = false;
			console.log("terminó de eschucar, llegó a su fin");

		}

	}


	function procesar() {
	var speechSynthesisUtterance = new SpeechSynthesisUtterance("texto"); 
    window.speechSynthesis.speak(speechSynthesisUtterance);
    
			if (recognizing == false) {
			recognition.start();
			recognizing = true;
			
		} else {
			recognition.stop();
			recognizing = false;
			
		}
	}
}
