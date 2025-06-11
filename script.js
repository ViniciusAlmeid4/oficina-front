let paginaAtual = 1
let totalPaginas = 1

let btnProximo = document.querySelector("#btn-proximo")
let btnAnterior = document.querySelector("#btn-anterior")
let indice = document.querySelector("#indice")

function carregarPersonagens(pagina) {
  if (pagina > totalPaginas || pagina < 1) {
    return
  }

  paginaAtual = pagina

  indice.innerHTML = pagina

  fetch(`https://api.disneyapi.dev/character?page=${pagina}&pageSize=24`)
    .then((resposta) => resposta.json())
    .then((dados) => {
      totalPaginas = dados.info.totalPages

      let container = document.querySelector(".conteudo");

      container.innerHTML = ""

      dados.data.forEach((personagem) => {
        container.innerHTML += `
        <div class="card">
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <div class="mb-2">
                  <img src="${personagem.imageUrl}" alt="card-personagem" onerror="this.onerror = null; this.src='img/placeholder_error.png';">
                </div>
                
                <div>
                  <h6>${personagem.name || "Personagem"}</h3>
                  <div><span>Filmes: </span>${personagem.films[0] || "N/A"}</div>
                  <div><span>Séries de TV: </span>${personagem.tvShows[0] || "N/A"}</div>  
                </div>
            </div>
        </div>
      `;
      })
    })

    .catch((erro) => {
      console.error(erro);
    });
}

btnProximo.addEventListener("click", () => {
  carregarPersonagens(paginaAtual + 1)
})

btnAnterior.addEventListener("click", () => {
  carregarPersonagens(paginaAtual - 1)
})

carregarPersonagens(paginaAtual)





