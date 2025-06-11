fetch("https://api.disneyapi.dev/character?pageSize=24")
  .then((resposta) => resposta.json())
  .then((dados) => {
    console.log(dados.data)

    let container = document.querySelector(".conteudo");

    dados.data.forEach((personagem)=>{
      container.innerHTML += `
        <div class="card">
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <div class="mb-2">
                  <img src="${personagem.imageUrl}" alt="card-personagem" onerror="this.onerror = null; this.src='img/placeholder_error.png';">
                </div>
                
                <div>
                  <h6>${personagem.name || "Personagem"}</h3>
                  <div><strong>Filmes: </strong>${personagem.films[0] || "N/A"}</div>
                  <div><strong>Séries de TV: </strong>${personagem.tvShows[0] || "N/A"}</div>  
                </div>
            </div>
        </div>
      `;
    }) 
  })

  .catch((erro) => {
    console.error(erro);
  });
