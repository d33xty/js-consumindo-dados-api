var paginaContagem = 0
const erro = document.getElementById('erro');
erro.addEventListener('click', () => {
    paginaContagem += 20;
    buscaEndereco(paginaContagem);
})


async function buscaEndereco(pagina){
    const paginaContagem = pagina;
    try{
        const consultaCEP = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${paginaContagem}&limit=20`);
        const consultaCEPConvertida = await consultaCEP.json();
        console.log(consultaCEPConvertida.results);
    }catch{
        erro.innerHTML = 'pokemon inexistente'
    }
}



buscaEndereco();
