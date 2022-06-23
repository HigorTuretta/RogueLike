let unknowColor = '#e35a0b';
let npcColor = '#1ba112';
let storeColor = '#dfe30b';
let systemColor = '#ff00fb';
let mNormal = 'normal-message';
let mAviso = 'warning-message';
let mPerigo = 'danger-message';
let mSistema = 'system-message'

let messages = {
    'gameMessages' : [
        {
            'msgCode'  : 1,
            'charName' : 'Voz Desconhecida',
            'color'    :  unknowColor,
            'message'  : 'Acorde, você precisa escapar!',
            'type'     : mNormal
        
        },
        {
            'msgCode'  : 2,
            'charName' : 'Narrador',
            'color'    :  systemColor,
            'message'  : 'Você acorda em uma cela de prisão velha e totalmente suja, sem saber por que está ali.',
            'type'     : mSistema
        },
        {
            'msgCode'  : 3,
            'charName' : 'Voz Desconhecida',
            'color'    :  unknowColor,
            'message'  : 'Pode me dizer seu nome?',
            'type'     : mNormal        
        },
        {
            'msgCode'  : 4,
            'charName' : 'SOU EU',
            'color'    :  unknowColor,
            'message'  : 'O MARIGUJO',
            'type'     : mNormal        
        },


    ]
}