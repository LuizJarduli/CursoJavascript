function contar() {
    let ini = document.querySelector('input#txtini')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpasso')
    let res = document.querySelector('div#res')
    let emojiNum = '1f449'

    if (!ini.value || !fim.value) {
        window.alert('[ERRO] digite os números de início e fim corretamente!')
    } else if (Number(ini.value) >= Number(fim.value)) {
        // Decrescente
        if (!passo.value || Number(passo.value) > Number(fim.value)) {
            passo.value = 1;
        }
        res.innerHTML = 'Contando: <br>'
        for (let i = Number(ini.value); i >= Number(fim.value); i -= Number(passo.value)) {
            res.innerHTML += `${i} \u{1f449}`
        }
        res.innerHTML += `&#127988`
    } else {
        //Crescente
        if (!passo.value || Number(passo.value) > Number(fim.value)) {
            passo.value = 1;
        }
        res.innerHTML = 'Contando: <br>'
        for (let i = Number(ini.value); i <= Number(fim.value); i += Number(passo.value)) {
            res.innerHTML += `${i} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }

}