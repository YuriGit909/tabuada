var btn = document.querySelector('input#gerar')

btn.addEventListener('click', () => {
    var num = document.querySelector('input#inumero')
    
    if(num.value.length == 0) {
        window.alert('Digite um número para gerar a tabuada.')
    } else {
        var numero = Number(num.value)
        var res = document.querySelector('select#itabuada')

        // Variável vazia de reset
        resetHTML = ''
        
        for(let i = 0; i <= 10; i++){
            resetHTML += `<option>${numero} x ${i} = ${numero * i}</option>`
        }

        // A cada novo clique no botão, o valor de "res" será substituído por um espaço vazio
        res.innerHTML = resetHTML
    }
})