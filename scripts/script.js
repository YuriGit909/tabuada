var btn = document.querySelector('input#gerar')

btn.addEventListener('click', () => {
    var num = document.querySelector('input#inumero')
    
    if(num.value.length == 0) {
        window.alert('Digite um número para gerar a tabuada.')
    } else {
        var numero = Number(num.value)
        var res = document.querySelector('select#itabuada')

        // Limpa o select a cada novo clique no botão
        res.innerHTML = ''
        
        for(let i = 1; i <= 10; i++){
            // Cria um elemento através do JavaScript de forma dinâmica
            let item = document.createElement('option')

            // Conteúdo que irá aparecer dentro do elemento criado acima
            item.text = `${numero} x ${i} = ${numero * i}`

            // Atributo value para cada option criado no loop, de acordo com a variável i
            item.value = `item${i}`

            // Acrescenta um novo item (filho) abaixo do criado anteriormente dinamicamente
            res.appendChild(item)
        }        
    }
})