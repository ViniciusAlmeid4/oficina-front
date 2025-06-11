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
                  <img src="${personagem.imageUrl}" alt="card-personagem">
                </div>
                
                <div>
                  <h6>${personagem.name}</h3>
                  <div>Filmes: ${personagem.films[0]}</div>
                  <div>Série de TV: ${personagem.tvShows[0]}</div>  
                </div>
            </div>
        </div>
      `;
    }) 
  })

  .catch((erro) => {
    console.error(erro);
  });
