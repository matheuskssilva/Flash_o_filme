const paragrafo = document.getElementById('paragrafo')
const titleSorteador = document.getElementById('titleSorteador')
const button = document.getElementById('button')

const trailerButton = document.getElementById('trailerButton')
const iframeModal = document.getElementById('iframe__container')
const closeBtn = document.getElementById('closeBtn')

trailerButton.addEventListener('click', function() {
    iframeModal.style.display = 'block'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', function() {

    closeBtn = iframeModal.style.display = 'none'

})


document.addEventListener('DOMContentLoaded', function() {
    const iframeModal = document.getElementById('iframe__modal')
    const closeBtnModal = document.getElementById('closeBtnModal')



    function abirModal() {
        closeBtnModal.style.display = 'block'
        iframeModal.style.display = 'flex';

    }

    function fecharModal() {
        iframeModal.style.display = 'none';

    }

    abirModal()
    closeBtnModal.addEventListener('click', fecharModal);

})



// Array dos Personagens
const person = [{
        nome: "Trovão Veloz: O Poderoso Flash",
        description: "Trovão Veloz, também conhecido como o Poderoso Flash, é um personagem icônico dos quadrinhos e da cultura pop. Ele é um super-herói incrivelmente veloz, capaz de correr a velocidades sobre-humanas e realizar feitos extraordinários em frações de segundo. ",
        urlImage: "../dist/images/The_Flash.webp"
    },
    {
        nome: "O Rei dos Mares: Aquaman",
        description: "Como o guardião dos oceanos, Aquaman possui uma série de habilidades extraordinárias, incluindo a capacidade de respirar debaixo d'água, comunicar-se com criaturas marinhas, nadar em velocidades incríveis e resistência sobrenatural à pressão das profundezas do oceano.",
        urlImage: "../../dist/images/Personagens/aquaman.webp"
    },
    {
        nome: "O Cavaleiro das Trevas: Batman",
        description: "Um personagem lendário dos quadrinhos e da cultura pop. Ele é um super-herói cujos poderes e habilidades estão diretamente ligados ao oceano e a todas as suas maravilhas subaquáticas. Sua aparência é caracterizada por trajes aquáticos elegantes e seu tridente real, que é uma de suas armas mais emblemáticas.",
        urlImage: "../dist/images/Personagens/batman.jpg"
    },
    {
        nome: "A Princesa Amazona: Mulher Maravilha",
        description: "Ela é uma guerreira amazona com habilidades extraordinárias e uma missão de paz e justiça. Seu traje distintivo, composto por um traje vermelho, azul e dourado, bem como seus braceletes mágicos e o Laço da Verdade, a tornam inconfundível.",
        urlImage: "../dist/images/Personagens/mulherMaravilha.jpg"
    },
    {
        nome: "Superman, o Herói Invencível",
        description: "Um dos super-heróis mais icônicos e poderosos dos quadrinhos. Ele é um alienígena que foi enviado para a Terra quando era um bebê, e suas habilidades sob o sol amarelo da Terra o tornam praticamente invulnerável.",
        urlImage: "../dist/images/Personagens/superMan.webp"
    },
    {
        nome: "Nevasca: A Fúria Branca do Inverno",
        description: "Nevasca possui o poder de congelar objetos e criar estruturas de gelo sólido com um simples toque. Além disso, ela pode criar rajadas de frio extremo, controlar temperaturas e até mesmo criar campos de gelo para proteção.",
        urlImage: "../dist/images/Personagens/nevasca.webp"
    },
    {
        nome: "Savitar, o Deus da Velocidade",
        description: " Savitar é um formidável antagonista do universo DC Comics, conhecido por ser um dos maiores adversários do Flash. Este enigmático personagem é um velocista extremamente poderoso e misterioso. ",
        urlImage: "../dist/images/Personagens/savitar.png"
    },
    {
        nome: "Vibro, o Sintonizador de Realidades",
        description: "Conhecido por sua habilidade única de manipular vibrações e frequências. Com o poder de criar ondas de choque, deslocar objetos e até mesmo viajar entre dimensões, Vibro é um herói formidável e uma força a ser reconhecida.",
        urlImage: "../dist/images/Personagens/vibro.png"
    },
]

function scrollToTop() {
    const scroll = window.scrollTo(0, 0)

    if (scroll == window.scrollTo(0, 0)) {
        scroll.style.display = 'none'
    }
}

// Sorteador
button.addEventListener('click', function() {

    //Modificação da Imagem
    modificarImg.style.display = 'none'
    const imagemAnalisando = document.getElementById('imagemAnalisando')
    imagemAnalisando.style.display = 'inline'

    //Modificação do conteúdo de texto
    titleSorteador.innerHTML = 'Verificando suas habilidades, e suas caracteristicas'
    paragrafo.innerHTML = 'Analisando...'
    button.innerHTML = 'analisando'


    // Lógica do Sorteador
    setTimeout(() => {
        const personAleatorio = Math.floor(Math.random() * person.length)
        const aleatorio = person[personAleatorio]

        const modificarImg = document.getElementById('modificarImg')
        modificarImg.src = aleatorio.urlImage
        modificarImg.style.display = 'inline'

        const nomePersonagem = aleatorio.nome

        titleSorteador.innerHTML = aleatorio.nome
        paragrafo.innerHTML = aleatorio.description
        button.innerHTML = 'refazer'

        imagemAnalisando.style.display = 'none'
    }, 2000)
})