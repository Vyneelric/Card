'use strict'

const cidades = [
    {Nome: 'Jandira', Cor: 'red', icon: 'cidade1.png'},
    {Nome: 'Tabuão', Cor: 'blue', icon: 'cidade2.png'},
    {Nome: 'Carapicuíba', Cor: 'orange', icon: 'cidade3.png'},
    {Nome: 'Romaíma', Cor: 'purple', icon: 'cidade4.png'}
]


function criarMenu(cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const Menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novaImagem.src = `./icons/${cidade.icon}`

    novoLink.href = '#'
    novoLink.textContent = cidade.Nome

    novoItem.appendChild(novaImagem)
    novoItem.style = `--cor-hover: ${cidade.Cor}`
    novoItem.appendChild(novoLink)
    Menu.appendChild(novoItem)
}

cidades.forEach(criarMenu)