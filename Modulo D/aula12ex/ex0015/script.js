function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', 'bebe-h.jpg')
            } else if (idade >= 4 && idade < 12) {
                //criança
                img.setAttribute('src', 'crianca-h.jpg')
            } else if (idade >= 12 && idade < 50) {
                //jovem adulto
                img.setAttribute('src', 'jovem-h.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-h.jpg')
            }

        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade >= 4 && idade < 12) {
                //criança
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade >= 12 && idade < 50) {
                //jovem adulto
                img.setAttribute('src', 'jovem-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}