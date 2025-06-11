fetch("https://api.disneyapi.dev/character?pageSize=24")
  .then((resposta) => resposta.json())
  .then((dados) => {
    let container = document.querySelector(".conteudo");

    console.log(dados.data);

  })

  .catch((erro) => {
    console.error(erro);
  });
