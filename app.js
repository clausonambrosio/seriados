function pesquisar() {
    // Função para pesquisar dados e exibir os resultados em uma seção HTML.
    
    // Obtém a seção HTML onde os resultados serão inseridos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma série.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Cria uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se título includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria o HTML para cada resultado, incluindo título, descrição e link.
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
    `;

        }
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }

    // Atualiza o conteúdo HTML da seção com os resultados.
    section.innerHTML = resultados;
}