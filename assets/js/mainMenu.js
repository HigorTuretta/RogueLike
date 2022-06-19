let popupMusic = $('#music-confirm');

$(document).ready(()=>{   
    
    $("#input-form").submit(function(e){        
        return false;
    });


})

function playMenuMusic(conf){

    if (conf == true){
        const audio = new Audio('assets/Sounds/mainMenu_sound.mp3');
        audio.play();
        popupMusic.addClass('fade-out-bck')

    }else{
        popupMusic.addClass('fade-out-bck')
    }

}