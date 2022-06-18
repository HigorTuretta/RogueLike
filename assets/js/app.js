let gameArea = $('#game-area');
let playerMessageInput = $('#input-action');
let backpack = $('#backpack');

$(document).ready(()=>{   
    
    $("#input-form").submit(function(e){        
        return false;
    });
})

function geraMensagem(nome, mensagem, tipo){

    if (mensagem == '' || mensagem == null ){
        return false
    }

    let divMensagem = document.createElement('div');
    let messageTitle = document.createElement('label');
    let message = document.createElement('p');

    divMensagem.setAttribute('class', 'game-message');
    messageTitle.setAttribute('class', 'message-title');
    message.setAttribute('class', tipo)

    messageTitle.appendChild(document.createTextNode(nome));
    message.appendChild(document.createTextNode(mensagem));

    divMensagem.appendChild(messageTitle);
    divMensagem.appendChild(message);

    $('#game-area').append(divMensagem);

    gameArea.scrollTop(gameArea.prop('scrollHeight'));

    console.log(gameArea.prop('scrollHeight'))

}

function playerMessage(){   
    let pMessage = playerMessageInput.val(); 

    playerMessageInput.val('');
    return pMessage;
}

function openBackpack(){
    backpack.addClass('bp-open');
    backpack.removeClass('start-hidden');
}

function closeBackpack(){
    backpack.removeClass('bp-open');
    backpack.addClass('bp-close');
}