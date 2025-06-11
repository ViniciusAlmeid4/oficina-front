fetch("https://api.disneyapi.dev/character?pageSize=24")
  .then((resposta) => resposta.json())
  .then((dados) => {
    console.log(dados.data)

    let container = document.querySelector(".conteudo");

    let linhaCards = document.createElement("div")

    linhaCards.className = "row gap-2 d-flex justify-content-center align-items-center"

    dados.data.forEach((personagem)=>{
      linhaCards.innerHTML += `
        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-8 col-12">
          <div class="card">
              <div class="card-body p-2 d-flex justify-content-center align-items-center flex-column">
                  <div class="mb-2">
                    <img class="img-fluid" src="${personagem.imageUrl}" alt="card-personagem">
                  </div>
                  
                  <div>
                    <h6>${personagem.name}</h3>
                    <div>Filmes: ${personagem.films[0]}</div>
                    <div>Série de TV: ${personagem.tvShows[0]}</div>  
                  </div>
              </div>
          </div>
      </div>
      `;
    })

    container.appendChild(linhaCards)
    

  })

  .catch((erro) => {
    console.error(erro);
  });
