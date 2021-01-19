var agora = new Date()
var diaSem = agora.getDay()
    /*
        0 = Domingo
        1 = Segunda
        2 = Terça
        3 = Quarta
        4 = Quinta
        5 = Sexta
        6 = Sábado
    */
    //console.log(diaSem)
var msg;
switch (diaSem) {
    case 0:
        msg = "Domingo"
        break;
    case 1:
        msg = "segunda"
        break;
    case 2:
        msg = "terça"
        break;
    case 3:
        msg = "quarta"
        break;
    case 4:
        msg = "quinta"
        break;
    case 5:
        msg = "sexta"
    case 6:
        msg = "Sábado"
        break;
    default:
        msg = "[ERRO]Dia inválido"
        break;
}

console.log(`Hoje é ${msg}`)