function filterPost() {
    let title = document.querySelector(".filter").value;
    console.log(title)

    let URL = `https://localhost:4567/postagem?title=${title}`;
  
    fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        carregaDadosTabela(data)
      })
      .then(() => {
        console.log("complete");
      })
      .catch(error => console.error("Erro:", error.message || error));
  }