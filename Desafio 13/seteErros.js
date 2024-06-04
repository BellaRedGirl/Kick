let desenhosAnimados = [ // 1 parenteses ao invés das colchetes
    "Bob Esponja", // 2 - falta de virgula após "bob esponja"
    "Os Padrinhos Mágicos",
    "Kim Possible",
    "As Aventuras de Jackie Chan",
    "Hora de Aventura",
    "Avatar: A Lenda de Aang",
    "Ben 10", // 3 - falta de aspas
    "X-Men: Evolution",
    "Duck Dodgers",
    "Danny Phantom"
];

let indiceSubstituicao = 0;


function exibirLista() {
    const lista = document.getElementById('lista-desenhos'); // 4 - O correto é get by id, já foi declarado assim no HTML
    lista.innerHTML = ''; 


    desenhosAnimados.forEach(desenhosAnimados => {
        const item = document.createElement('li'); // 5 - Falta das aspas simples
        item.textContent = desenhosAnimados; 
        lista.appendChild(item);
    });
}


function adicionarDesenho() {
    const novoDesenho = document.getElementById('novo-desenho').value;
       if (novoDesenho.trim() !== '') {
        desenhosAnimados[indiceSubstituicao] = novoDesenho; 
        indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length; 
        exibirLista (); // 6 - Falta de parenteses ao chamar função
        document.getElementById('novo-desenho').value = ''; 
    }
}

window.onload = exibirLista(); // 7 - Chamar a função assim que carregar a página