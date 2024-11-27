const quadro = document.getElementById("quadro");
const desc = document.getElementById('desc');
const botao = document.getElementById("botao");

const gatinhos = [
    "img/branco.jpg",
    "img/cinza.jpg",
    "img/laranja.jpg",
    "img/mesclado.jpg",
    "img/preto.jpg"
];

const nomes = [
    { URL: 'img/branco.jpg', nome: 'Gato Branco' },
    { URL: 'img/cinza.jpg', nome: 'Gato Cinza' },
    { URL: 'img/laranja.jpg', nome: 'Gato Laranja' },
    { URL: 'img/preto.jpg', nome: 'Gato Preto' },
    { URL: 'img/mesclado.jpg', nome: 'Gato Mesclado' },
];

botao.addEventListener("click", () => {
    const random = Math.floor(Math.random() * gatinhos.length);
    const caminho = gatinhos[random];

    const nomeDaImagem = nomes.find(item => item.URL === caminho).nome;

    quadro.style.backgroundImage = `url(${caminho})`;
    desc.textContent = nomeDaImagem;

    quadro.innerHTML = `<img src="${caminho}" alt="random">`;
});
