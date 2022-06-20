let gameArea = $('#game-area');
let playerMessageInput = $('#input-action');
let backpack = $('#backpack');
let body = $('#body');

let unknowColor = '#e35a0b';
let npcColor = '#1ba112';
let storeColor = '#dfe30b';
let systemColor = '#ff00fb';
let delay = 1000;

let playerName;

$(document).ready(()=>{   
    
    $("#input-form").submit(function(e){        
        return false;
    });

    playerName = 'Player';

    game();
})

function geraMensagem(nome, color_name, mensagem, tipo){

    if (mensagem.trim() == '' || mensagem == null ){
        return false
    }

    let divMensagem = document.createElement('div');
    let messageTitle = document.createElement('label');
    let message = document.createElement('p');

    divMensagem.setAttribute('class', 'game-message');
    messageTitle.setAttribute('class', 'message-title');
    message.setAttribute('class', tipo)

    messageTitle.appendChild(document.createTextNode(nome));
    messageTitle.style.color = color_name;
    message.appendChild(document.createTextNode(mensagem));

    divMensagem.appendChild(messageTitle);
    divMensagem.appendChild(message);

    $('#game-area').append(divMensagem);

    gameArea.scrollTop(gameArea.prop('scrollHeight'));

}

//Retorna a mensagem digitada pelo jogador
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

function setPlayerName(){
    playerName = $('#text-input').val();
    closePopUp('#text-input-pop-up');
}

function getPlayerName(){
    return playerName;
}

//Fecha uma popup e a exclui do HTML depois de 5 segundos
function closePopUp(id){
    let popUp = $(id);
    popUp.addClass('fade-out-bck');

    setTimeout(() => {
       popUp.remove(); 
    }, 5000);
}

function geraTextPopUp(descricao, funcao, atributos){
    //Cria os elementos HTML
    let sectionPopUp = document.createElement('section');
    let divInnerPopUp = document.createElement('div');
    let message = document.createElement('p');
    let popUpInput = document.createElement('input');
    let divButtonArea = document.createElement('div');
    let confirmButton = document.createElement('button');

    //Adiciona Classes e Atributos aos elementos criados
    sectionPopUp.setAttribute('class', 'text-input-pop-up');
    sectionPopUp.setAttribute('id', 'text-input-pop-up');
    popUpInput.setAttribute('id', 'text-input');
    popUpInput.setAttribute('type', 'text');
    popUpInput.setAttribute('name', 'text-input');
    popUpInput.setAttribute('autoComplete', 'none');
    divInnerPopUp.setAttribute('class', 'input-pop-up');
    divButtonArea.setAttribute('class', 'popup-button-area');
    confirmButton.setAttribute('id', 'confirm-button');
    confirmButton.setAttribute('onclick', funcao + '(' + atributos +')');

    //Adiciona a mensagem no botão e mensagem principal da popUp
    confirmButton.appendChild(document.createTextNode('Confirmar'));
    message.appendChild(document.createTextNode(descricao));

    //Adiciona todos os elementos criados na página HTML
    divButtonArea.appendChild(confirmButton);
    divInnerPopUp.appendChild(message);
    divInnerPopUp.appendChild(popUpInput);
    divInnerPopUp.appendChild(divButtonArea);
    sectionPopUp.appendChild(divInnerPopUp);
    body.append(sectionPopUp);
}


// game begin


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function game(){
    sleep(delay).then(() => {geraMensagem('Voz Desconhecida', unknowColor, 'Acorde, você precisa escapar!', 'warning-message')});
    sleep(delay*1.5).then(() => {geraMensagem('Narrador', systemColor, 'Você acorda em uma cela de prisão velha e totalmente suja, sem saber por que está ali.', 'system-message')});
    sleep(delay*3).then(() => {geraMensagem('Voz Desconhecida', unknowColor, 'Pode me dizer seu nome?', 'normal-message')});
    sleep(delay*3.5).then(() => geraTextPopUp('Diga seu nome à voz desconhecida', 'setPlayerName', ''));
    
}
