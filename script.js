class FrutaDivertida {
    constructor(nome, vendas) {
        this.nome = nome;
        this.vendas = vendas;
    }

    calcularCor() {
        const maxVendas = 100;
        const minVendas = 0;
        const greenIntensity = Math.round((this.vendas - minVendas) / (maxVendas - minVendas) * 255);
        const redIntensity = 255 - greenIntensity;
        return `rgb(${redIntensity}, ${greenIntensity}, 0)`;
    }

    calcularTamanhoProporcional() {
        const MAX_VENDAS = 100;
        return (Math.min(this.vendas, MAX_VENDAS) / MAX_VENDAS) * 100;
    }

    criarElemento() {
        const tamanho = this.calcularTamanhoProporcional();
        const cor = this.calcularCor();
        const elemento = document.createElement('div');
        elemento.className = 'treeMapItem';
        elemento.style.flexGrow = tamanho;
        elemento.style.backgroundColor = cor;
        elemento.textContent = `${this.nome} (${this.vendas}) - ${tamanho.toFixed(2)}%`;
        return elemento;
    }
}

let frutasDivertidas = [
    new FrutaDivertida('Maçã', 45),
    new FrutaDivertida('Banana', 30),
    new FrutaDivertida('Laranja', 20),
    new FrutaDivertida('Abacaxi', 10)
];

function gerarInputs() {
    const container = document.getElementById('frutasInputsContainer');
    const select = document.getElementById('frutaSelect');
    container.innerHTML = '';
    select.innerHTML = '';

    frutasDivertidas.forEach((fruta, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = fruta.nome;
        select.appendChild(option);
    });

    atualizarInput();
}

function atualizarInput() {
    const selectedIndex = document.getElementById('frutaSelect').value;
    const container = document.getElementById('frutasInputsContainer');
    container.innerHTML = '';

    const fruta = frutasDivertidas[selectedIndex];
    const div = document.createElement('div');
    div.className = 'frutaInput';
    div.innerHTML = `
        <label for="vendas-${selectedIndex}">${fruta.nome}:</label>
        <input type="number" id="vendas-${selectedIndex}" value="${fruta.vendas}">
    `;
    container.appendChild(div);
}

function atualizarTreeMap() {
    const selectedIndex = document.getElementById('frutaSelect').value;
    const input = document.getElementById(`vendas-${selectedIndex}`);

    if (input) {
        frutasDivertidas[selectedIndex].vendas = parseInt(input.value) || 0;
    }

    // Atualiza a interface gráfica
    const treeMapContainer = document.getElementById('treeMapContainer');
    treeMapContainer.innerHTML = '';

    frutasDivertidas.sort((a, b) => b.vendas - a.vendas);

    frutasDivertidas.forEach(fruta => {
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
