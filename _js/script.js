//Enviar mensagem direta - contato
(function(){

    'use strict';
    var $form = document.querySelector('form');
    var $txtEmail = document.getElementById('txtEmail');
    var $msg = document.getElementById('msg');
    var $btn = document.getElementById('btn');

    $form.addEventListener('submit', function(e){

        if(!$txtEmail.value || !$msg.value){
            alert("Preencha todos os campos!")
            e.preventDefault();
        
        } else{
            alert("mensagem enviada!");
        }

    })

})()