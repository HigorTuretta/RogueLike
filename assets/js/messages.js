let unknowColor = '#e35a0b';
let npcColor = '#1ba112';
let storeColor = '#dfe30b';
let systemColor = '#ff00fb';
let playerColor = '#0dcdd4';

let mNormal = 'normal-message';
let mAviso = 'warning-message';
let mPerigo = 'danger-message';
let mSistema = 'system-message'

let yesNoAction = 100;

let messages = {
    'gameMessages' : [
        {
            'msgCode'  : 1,
            'charName' : 'Voz Desconhecida',
            'color'    :  unknowColor,
            'message'  : 'Acorde, você precisa escapar!',
            'type'     : mNormal,
            'retorna'   : 0
        },
        {
            'msgCode'  : 2,
            'charName' : 'Narrador',
            'color'    :  systemColor,
            'message'  : 'Você acorda em uma cela de prisão velha e totalmente suja, sem saber por que está ali.',
            'type'     : mSistema,
            'retorna'   : 0
        },
        {
            'msgCode'  : 3,
            'charName' : 'Voz Desconhecida',
            'color'    :  unknowColor,
            'message'  : 'Pode me dizer seu nome?',
            'type'     : mNormal,
            'retorna'   : 0      
        },
        {
            'msgCode'  : 4,
            'charName' : getPlayerName(),
            'color'    :  playerColor,
            'message'  : getPlayerName() + '? Esse deve ser o meu nome...',
            'type'     : mNormal,
            'retorna'   : 0       
        },
        {
            'msgCode'  : 5,
            'charName' : 'Narrador',
            'color'    :  systemColor,
            'message'  :  getPlayerName() + ' então olha ao seu redor e percebe que o portão da cela está com a fechadura quebrada, dando oportunidade dele fugir.',
            'type'     : mSistema,
            'retorna'   : 0
        },
        {
            'msgCode'  : 6,
            'charName' : getPlayerName(),
            'color'    :  playerColor,
            'message'  : 'Acho que alguem queria que eu escapasse... Mas... por que eu? Bom, é melhor do que passar o resto da vida aqui.',
            'type'     : mNormal,
            'retorna'   : 0        
        },
        {
            'msgCode'  :  7,
            'charName' :  'Narrador',
            'color'    :  systemColor,
            'message'  :  getPlayerName() + ' abre o portão e se depara com um imenso corredor cheio de outras celas com uma porta no fim. Enquanto ele se esgueira pelo corredor ele ouve a voz de alguém mais velho ecoando, e, quando chega perto, um senhor desconhecido o aborda.',
            'type'     :  mSistema,
            'retorna'   : 0
        },
        {
            'msgCode'  :  8,
            'charName' :  'Senhor Desconhecido',
            'color'    :  unknowColor,
            'message'  :  'Chegue mais perto meu rapaz.',
            'type'     :  mNormal,
            'retorna'  :  yesNoAction,
            'caseTrue' :  'Se Aproximar...',
            'caseFalse':  'Ignorar o Senhor',
            'goTo'     : ''
        },
        {
            'msgCode'  :  9,
            'charName' :  'Narrador',
            'color'    :  systemColor,
            'message'  :  getPlayerName() + ' então se aproxima da cela do senhor.',
            'type'     :  mSistema,
            'retorna'  :  0,
        },


    ]
}