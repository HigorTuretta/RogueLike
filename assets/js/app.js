let gameArea = $('#game-area');
let playerMessageInput = $('#input-action');
let backpack = $('#backpack');
let body = $('#body');
let dialogoAtual = 0;
let delay = 1000;
let qtdMsg = 0;
let playerName;
let messageReturn = 0;

$(document).ready(()=>{   
    $("#input-form").submit(function(e){        
        return false;
    });
    if(localStorage.getItem("gameData") === null){
        dialogoAtual = 0 
    }else{
        dialogoAtual = parseInt(localStorage.gameData);
    }
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
    if ($('#text-input').val().trim() == '' || $('#text-input').val() == null){       
        if (qtdMsg == 0){
            $('.input-pop-up').append('<span>Informe um nome para continuar!</span>')
            qtdMsg = 1;
        }       
    }else{
        playerName = $('#text-input').val(); 
        localStorage.playerName = playerName;
        localStorage.gameData = 4;
        dialogoAtual = parseInt(localStorage.gameData);
        closePopUp('#text-input-pop-up');
        location.reload(true);
        game();
        qtdMsg = 0;
    }
}

function getPlayerName(){
    return localStorage.playerName
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
    popUpInput.setAttribute('required', 'true');
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

function geraYesNoOptions(yesText, noText){
    let sectionOptions = document.createElement('section');
    let yesBtn = document.createElement('button');
    let yesSpan = document.createElement('span');
    let noBtn = document.createElement('button');
    let noSpan = document.createElement('span');

    sectionOptions.setAttribute('class', 'options-area bounce-in-bottom');
    sectionOptions.setAttribute('id', 'options-area');
    yesBtn.setAttribute('class', 'yes-btn');
    yesBtn.setAttribute('onclick', 'yesAction()');
    noBtn.setAttribute('class', 'no-btn');
    noBtn.setAttribute('onclick', 'noAction()');
    yesSpan.appendChild(document.createTextNode(yesText));
    noSpan.appendChild(document.createTextNode(noText));

    yesBtn.appendChild(yesSpan);
    noBtn.appendChild(noSpan);

    sectionOptions.appendChild(yesBtn);
    sectionOptions.appendChild(noBtn);

    body.append(sectionOptions);
}


// game begin


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //criar uma variavel de resposta esperada na mensagem

function game(){
    if (dialogoAtual <= 3) {
        sleep(delay).then(() => {geraMensagem('Voz Desconhecida', unknowColor, 'Acorde, você precisa escapar!', 'warning-message')});
        sleep(delay*1.5).then(() => {geraMensagem('Narrador', systemColor, 'Você acorda em uma cela de prisão velha e totalmente suja, sem saber por que está ali.', 'system-message')});
        sleep(delay*3).then(() => {geraMensagem('Voz Desconhecida', unknowColor, 'Pode me dizer seu nome?', 'normal-message')});
        sleep(delay*3.5).then(() => geraTextPopUp('Diga seu nome à voz desconhecida', 'setPlayerName', ''));
    }else{
       
       $.each(messages.gameMessages, function(i, msg){     
            setTimeout(() => {
                if (dialogoAtual == msg.msgCode){ 
                    if(msg.retorna == 100){
                        geraMensagem(msg.charName, msg.color, msg.message, msg.type)
                        geraYesNoOptions(msg.caseTrue, msg.caseFalse)
                        console.log(dialogoAtual)
                    }else{
                        geraMensagem(msg.charName, msg.color, msg.message, msg.type)
                        dialogoAtual ++;  
                    }        
                    }
            }, i * 500)                 
            });
    } 
}

function yesAction(){
    dialogoAtual++
    localStorage.gameData = dialogoAtual;
    game();
}
function noAction(){
    
}


async function handleForm() {
  let userInput = '';
  console.log('Before getting the user input: ', userInput);
  userInput = await getUserInput();
  console.log('After getting user input: ', userInput);
};

function getUserInput() {
  return new Promise((resolve, reject) => {
    $('#myInput').keydown(function(e) {
      if (e.keyCode == 13) {
        const inputVal = $(this).val();
        resolve(inputVal);
      }
    });
  });
};
