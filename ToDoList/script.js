
//Variáveis globais
const button = document.querySelector('input#button')
const text1 = document.querySelector('input#text1')
const res = document.querySelector('div#res')

button.addEventListener('click', () => {
    let item = document.querySelector('input#text1').value
 
    item = item.toUpperCase()

    if(item == "") {
        alert('Digite um item')
        return
    }
    

    //Criando um novo botão para excluir
    const newButton = document.createElement('button')
    
    //Criando img da lixeira
    const iconLixeira = document.createElement('img')
    iconLixeira.src = 'imagens/lixeira.svg'

    //Transformando a lixeira em botao
    newButton.appendChild(iconLixeira)

    newButton.classList.add('lixeira')

    //evento de remover o item clicando na lixeira
    newButton.addEventListener('click', () => {
        res.removeChild(newDiv)
    })
    
    //Criando botão de marcação
    const buttonMarked = document.createElement("input")
    buttonMarked.type = "checkbox"

    buttonMarked.classList.add('mark')

    //Criando uma nova div
    const newDiv = document.createElement('div')

    //Adicionando classe para a nova div
    newDiv.classList.add('res')

    //Transformando item digitado pelo usuário em text
    const itemUsuario = document.createTextNode(item)


    //Adicionando conteúdo na nova div
    newDiv.appendChild(buttonMarked) //botão de check
    newDiv.appendChild(itemUsuario) //item digitado pelo usuário
    newDiv.appendChild(newButton) //botão de excluir item

    //Inserindo o conteúdo da newdiv na div#res no HTML
    res.appendChild(newDiv)


    //Resetando o valor da caixa de texto
    text1.value = ""
})
