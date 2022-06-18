let mainMenuAudio = $('#audioPlayer')[0];

$(document).ready(()=>{   
    
    $("#input-form").submit(function(e){        
        return false;
    });

    const audio = new Audio('assets/Sounds/mainMenu_sound.mp3');
    audio.play();
})