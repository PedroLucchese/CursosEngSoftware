function editPost() {
    let id = document.querySelector(".input-id").value;
    let titulo = document.querySelector(".input-titulo").value;
    let categoria = document.querySelector(".input-categoria").value;
    let conteudo = document.querySelector(".input-conteudo").value;

    let data = { 
        title: titulo,
        categories: [categoria],
        content: conteudo,
    }

    let URL = `https://localhost:4567/postagem/${id}`;
  
    fetch(URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(() => {
        location.reload()
      })
      .catch(error => console.error("Erro:", error.message || error));
  }
  
  