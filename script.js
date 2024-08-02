class FrutaDivertida {
    constructor(nome, vendas) {
        this.nome = nome;
        this.vendas = vendas;
    }

    calcularCor() {
        const maxVendas = 10; // Valor máximo fixo
        const minVendas = 100;  // Valor mínimo fixo
        const normalizedVendas = (this.vendas - minVendas) / (maxVendas - minVendas);
        const greenIntensity = Math.round(normalizedVendas * 255);
        const redIntensity = 255 - greenIntensity;
        return `rgb(${greenIntensity}, ${redIntensity}, 0)`;
    }

    calcularTamanhoProporcional() {
        const totalVendas = frutasDivertidas.reduce((sum, fruta) => sum + fruta.vendas, 0);
        return (this.vendas / totalVendas) * 100;
    }

    criarElemento() {
        const tamanho = this.calcularTamanhoProporcional();
        const cor = this.calcularCor();
        const elemento = document.createElement('div');
        elemento.className = 'treeMapItem';
        elemento.style.flexGrow = tamanho / 100; // Ajuste para o valor de flexGrow
        elemento.style.backgroundColor = cor;
        elemento.textContent = `${this.nome} (${this.vendas})`;
        return elemento;
    }
}

let frutasDivertidas = [
    new FrutaDivertida('Maçã', 80),
    new FrutaDivertida('Banana', 50),
    new FrutaDivertida('Laranja', 30),
    new FrutaDivertida('Abacaxi', 20),
    new FrutaDivertida('Melancia', 90),
    // ... outras frutas
];

function gerarInputs() {
    const container = document.getElementById('frutasInputsContainer');
    const select = document.getElementById('frutaSelect');
    container.innerHTML = '';
    select.innerHTML = '';

    frutasDivertidas.forEach((fruta) => {
        const option = document.createElement('option');
        option.value = fruta.nome;
        option.textContent = fruta.nome;
        select.appendChild(option);
    });

    atualizarInput();
}

function atualizarInput() {
    const selectedNome = document.getElementById('frutaSelect').value;
    const container = document.getElementById('frutasInputsContainer');
    container.innerHTML = '';

    const fruta = frutasDivertidas.find(f => f.nome === selectedNome);
    if (fruta) {
        const div = document.createElement('div');
        div.className = 'frutaInput';
        div.innerHTML = `
            <label for="vendas-${selectedNome}">${fruta.nome}:</label>
            <input type="number" id="vendas-${selectedNome}" value="${fruta.vendas}">
        `;
        container.appendChild(div);
    }
}

function atualizarTreeMap() {
    const selectedNome = document.getElementById('frutaSelect').value;
    const input = document.getElementById(`vendas-${selectedNome}`);

    if (input) {
        const fruta = frutasDivertidas.find(f => f.nome === selectedNome);
        if (fruta) {
            fruta.vendas = parseInt(input.value) || 0;
        }
    }

    const treeMapContainer = document.getElementById('treeMapContainer');
    treeMapContainer.innerHTML = '';

    frutasDivertidas.sort((a, b) => b.vendas - a.vendas);

    frutasDivertidas.forEach((fruta) => {
        const elemento = fruta.criarElemento();
        treeMapContainer.appendChild(elemento);
    });
}

function filtrarFrutas() {
    const filtro = document.getElementById('frutaFiltro').value.toLowerCase();
    const select = document.getElementById('frutaSelect');
    const options = select.options;

    for (let i = 0; i < options.length; i++) {
        const frutaNome = options[i].textContent.toLowerCase();
        if (frutaNome.includes(filtro)) {
            options[i].style.display = '';
        } else {
            options[i].style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    gerarInputs();
    document.getElementById('frutaSelect').addEventListener('change', atualizarInput);
    document.getElementById('atualizarButton').addEventListener('click', atualizarTreeMap);
    document.getElementById('frutaFiltro').addEventListener('input', filtrarFrutas);
});
