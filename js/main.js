const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode, evento.target.dataset.peca)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle, membro) {
    const peca = controle.querySelector("[data-contador]")
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
        roboModificado(membro, peca.value)
    } else {
        peca.value = parseInt(peca.value) + 1
        roboModificado(membro, peca.value)
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function trocaImagem(cor) {
    document.querySelector(".robo").src = "img/robotron - " + cor + ".png";
}



// inserindo dados nas imagens


// const incluir = document.querySelectorAll("[data-contador]")

// incluir.forEach((elemento) => {
//     elemento.addEventListener('click', (evento) => {
//         aumentarBracos(evento.target.textContent, evento.target.parentNode)
//     })
// })


// function aumentarBracos(operacao, incluir) {
//     const peca = incluir.querySelector("bracos")

//     if (operacao.value > 3) {
//         document.querySelector(".robo").src = "img/robotron - " + cor + " - 3bracos" + ".png";
//     }
// }

function roboModificado(membro, totalMembros) {
    console.log(membro, totalMembros)
    if (membro === 'bracos' && totalMembros === '3') {
        trocaImagem('Amarelo - 3bracos')
    }if (membro === 'bracos' && totalMembros === '4') {
        trocaImagem('Amarelo - 4bracos')
}}
