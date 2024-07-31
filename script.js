class FrutaDivertida {
    constructor(nome, vendas) {
        this.nome = nome;
        this.vendas = vendas;
    }

    calcularCor() {
        if (this.vendas > 75) {
            return 'verde'; // Alta venda
        } else if (this.vendas > 40) {
            return 'amarelo'; // Média venda
        } else {
            return 'vermelho'; // Baixa venda
        }
    }

    calcularTamanhoProporcional() {
        const MAX_VENDAS = 100;
        return (Math.min(this.vendas, MAX_VENDAS) / MAX_VENDAS) * 100; // Em porcentagem
    }

    criarElemento() {
        const tamanho = this.calcularTamanhoProporcional();
        const cor = this.calcularCor();
        const elemento = document.createElement('div');
        elemento.className = `treeMapItem ${cor}`;
        elemento.style.flexGrow = tamanho;
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
    new FrutaDivertida('Bacaba', 30),
    new FrutaDivertida('Banana nanica', 55),
    new FrutaDivertida('Banana-prata', 40),
    new FrutaDivertida('Pera d’água', 25),
    
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

    // Exibir o input da primeira fruta por padrão
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
    const treeMapContainer = document.getElementById('treeMapContainer');
    treeMapContainer.innerHTML = '';

    frutasDivertidas.forEach((fruta, index) => {
        const input = document.getElementById(`vendas-${index}`);
        if (input) {
            fruta.vendas = parseInt(input.value) || 0;
        }
    });

    frutasDivertidas.sort((a, b) => b.vendas - a.vendas);

    frutasDivertidas.forEach(fruta => {
        const elemento = fruta.criarElemento();
        treeMapContainer.appendChild(elemento);
    });
}

    frutasDivertidas.sort((a, b) => {
        const corA = a.calcularCor();
        const corB = b.calcularCor();

        if (corA === corB) return 0;
        if (corA === 'verde') return -1;
        if (corB === 'verde') return 1;
        if (corA === 'amarelo') return -1;
        if (corB === 'amarelo') return 1;
        return 0; 
    });

    frutasDivertidas.forEach(fruta => {
        const elemento = fruta.criarElemento();
        treeMapContainer.appendChild(elemento);
    });

document.addEventListener('DOMContentLoaded', () => {
    gerarInputs();
    document.getElementById('frutaSelect').addEventListener('change', atualizarInput);
    document.getElementById('atualizarButton').addEventListener('click', atualizarTreeMap);
});
