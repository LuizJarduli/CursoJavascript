function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = "foto-manha.jpg"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = "foto-tarde.jpg"
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = "foto-noite.jpg"
        document.body.style.background = '#515154'
    }

}