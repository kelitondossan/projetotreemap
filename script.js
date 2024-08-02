class FrutaDivertida {
    constructor(nome, vendas) {
        this.nome = nome;
        this.vendas = vendas;
    }

    calcularCor() {
        // Determina a intensidade do verde e do vermelho com base nas vendas
        const maxVendas = Math.max(...frutasDivertidas.map(f => f.vendas));
        const minVendas = Math.min(...frutasDivertidas.map(f => f.vendas));
        const normalizedVendas = (this.vendas - minVendas) / (maxVendas - minVendas);
        const greenIntensity = Math.round(normalizedVendas * 255);
        const redIntensity = 255 - greenIntensity;
        return `rgb(${redIntensity}, ${greenIntensity}, 0)`;
    }

    calcularTamanhoProporcional() {
        const maxVendas = Math.max(...frutasDivertidas.map(f => f.vendas));
        return (Math.min(this.vendas, maxVendas) / maxVendas) * 100;
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
    new FrutaDivertida('Maçã', 80),
    new FrutaDivertida('Banana', 50),
    new FrutaDivertida('Laranja', 30),
    new FrutaDivertida('Abacaxi', 20),
    new FrutaDivertida('Melancia', 90),
    new FrutaDivertida('Uva', 45),
    new FrutaDivertida('Manga', 70),
    new FrutaDivertida('Pera', 15),
    new FrutaDivertida('Kiwi', 5),
    new FrutaDivertida('Morango', 55),
    new FrutaDivertida('Limão', 25),
    new FrutaDivertida('Coco', 35),
    new FrutaDivertida('Goiaba', 40),
    new FrutaDivertida('Pêssego', 65),
    new FrutaDivertida('Cereja', 10),
    new FrutaDivertida('Ameixa', 28),
    new FrutaDivertida('Mamão', 85),
    new FrutaDivertida('Jabuticaba', 60),
    new FrutaDivertida('Framboesa', 75),
    new FrutaDivertida('Mirtilo', 95),
    new FrutaDivertida('Raspberry', 40),
    new FrutaDivertida('Damasco', 30),
    new FrutaDivertida('Nectarina', 50),
    new FrutaDivertida('Lichia', 20),
    new FrutaDivertida('Tangerina', 65),
    new FrutaDivertida('Cabeludo', 45),
    new FrutaDivertida('Mangostão', 55),
    new FrutaDivertida('Rambutan', 35),
    new FrutaDivertida('Longan', 70),
    new FrutaDivertida('Durian', 80),
    new FrutaDivertida('Pitanga', 25),
    new FrutaDivertida('Maracujá', 60),
    new FrutaDivertida('Cabeludinha', 20),
    new FrutaDivertida('Jabuticaba', 50),
    new FrutaDivertida('Goiaba', 45),
    new FrutaDivertida('Carambola', 30),
    new FrutaDivertida('Figo', 65),
    new FrutaDivertida('Cherimóia', 15),
    new FrutaDivertida('Tamarindo', 75),
    new FrutaDivertida('Nectarina', 60),
    new FrutaDivertida('Pinha', 40),
    new FrutaDivertida('Pomelo', 25),
    new FrutaDivertida('Jaca', 90),
    new FrutaDivertida('Morango silvestre', 35),
    new FrutaDivertida('Goyavi', 45),
    new FrutaDivertida('Abacate', 80),
    new FrutaDivertida('Kiwi gold', 50),
    new FrutaDivertida('Damasco', 70),
    new FrutaDivertida('Cabeludinha', 25),
    new FrutaDivertida('Seriguela', 55),
    new FrutaDivertida('Bacupari', 30),
    new FrutaDivertida('Hala', 45),
    new FrutaDivertida('Nance', 60),
    new FrutaDivertida('Graviola', 35),
    new FrutaDivertida('Hala', 50),
    new FrutaDivertida('Capulí', 20),
    new FrutaDivertida('Cabeludinha', 75),
    new FrutaDivertida('Jabuticaba', 85),
    new FrutaDivertida('Pitanga', 40),
    new FrutaDivertida('Atemóia', 55),
    new FrutaDivertida('Tangor', 30),
    new FrutaDivertida('Lichia', 45),
    new FrutaDivertida('Tamarillo', 25),
    new FrutaDivertida('Cupe', 60),
    new FrutaDivertida('Fruta-pão', 70),
    new FrutaDivertida('Kiwano', 20),
    new FrutaDivertida('Cabeludinha', 65),
    new FrutaDivertida('Morango silvestre', 50),
    new FrutaDivertida('Laranja kinkan', 45),
    new FrutaDivertida('Mandarim', 80),
    new FrutaDivertida('Açaí', 55),
    new FrutaDivertida('Cabeludinha', 70),
    new FrutaDivertida('Uvaia', 60),
    new FrutaDivertida('Pequi', 25),
    new FrutaDivertida('Fruta-de-condessa', 50),
    new FrutaDivertida('Saúva', 40),
    new FrutaDivertida('Guaraná', 55),
  
];

function gerarInputs() {
    const container = document.getElementById('frutasInputsContainer');
    const select = document.getElementById('frutaSelect');
    container.innerHTML = '';
    select.innerHTML = '';

    frutasDivertidas.forEach((fruta, index) => {
        const option = document.createElement('option');
        option.value = fruta.nome; // Usa o nome da fruta como valor
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
