//Enviar mensagem direta - contato
function enviarMensagem() {
	var campotexto = document.getElementById('campotexto').value;
	var email = document.getElementById('email').value;

	if(email == '') {
		alert("Preencha o campo de email!");
	}

	if(campotexto == '') {
		alert("O campo da mensagem está vazia!");
	}

	else {
		alert("Mensagem enviada, responderemos o mais rápido possível, obrigado!");
	}
}