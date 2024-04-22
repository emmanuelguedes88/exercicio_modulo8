const form = document.getElementById('form-contato');
const nomes = [];
const contatos = [];
let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (nomes.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já foi inserido`);
    } else if (contatos.includes(inputTelefone.value)) {
        alert(`O telefone: ${inputTelefone.value} já foi inserido`);
    } else{
        nomes.push(inputNome.value);
        contatos.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }


    inputNome.value = '';
    inputTelefone.value ='';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

