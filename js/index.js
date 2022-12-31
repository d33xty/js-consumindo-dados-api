async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            console.log('CEP invalido');
        }
        console.log(consultaCEPConvertida);
        //atribuição dos valores do formulario 
        const estado = document.getElementById('estado');
        const cidade = document.getElementById('cidade');
        const bairro = document.getElementById('bairro');
        const logradouro = document.getElementById('endereco');

        estado.value = consultaCEPConvertida.uf;
        cidade.value = consultaCEPConvertida.localidade;
        bairro.value = consultaCEPConvertida.bairro;
        logradouro.value = consultaCEPConvertida.logradouro;

        return consultaCEPConvertida;
    } catch(erro){
        console.log(erro);
    }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));