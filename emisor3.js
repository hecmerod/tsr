//Emisor de eventos (emisor3.js) -------------------------------------------

const Evento=require("./generadorEventos");

const evento1 = 'e1';
const evento2 = 'e2';
var incremento=0;

const emisor1 = Evento(evento1,'emisor1:   ',0);
const emisor2 = Evento(evento2,'emisor2:   ','');

function visualizar(entidad,evento,dato){
   console.log(entidad,evento+'··> ',dato);
}

emisor1.on(visualizar);
emisor2.on(visualizar);

time = intRandom() * 1000;
setTimeout(emisiones, time, time);   

function emisiones(time){  
        
    emisor1.emit(incremento);
    emisor2.emit(incremento);

    console.log('\n' + time + '\n');

    time = intRandom() * 1000;
    incremento++;
    if(incremento <= 3) {
        setTimeout(emisiones, time, time);        
    }
    else {
        console.log("------------FIN");
    }
}

function intRandom() {
    return Math.floor(Math.random() * (6 - 3)) + 3;
}
function callback() {}

//. . . . . . . . . . . . . .