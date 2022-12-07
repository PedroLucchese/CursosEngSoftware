function createPost() {
    let titulo = document.querySelector(".input-titulo-create").value;
    let categoria = document.querySelector(".input-categoria-create").value;
    let conteudo = document.querySelector(".input-conteudo-create").value;

    let data = { 
        title: titulo,
        categories: [categoria],
        content: conteudo
    }

    let URL = `https://localhost:4567/postagem`;
  
    fetch(URL, {
      method: "POST",
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
  
  