function loadPost() {
  let codigo = document.getElementById("id").value;
  let URL = "https://localhost:4567/postagem/" + codigo;

  fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(body => {
      return body.json();
    })
    .then(data => {
      let paragrafo = document.getElementById("resposta");
      let postagem = data;
      paragrafo.innerHTML = postagem.title;
    })
    .then(() => {
      console.log("complete");
    })
    .catch(error => console.error("Erro:", error.message || error));
}

function loadPosts() {
  let URL = "https://localhost:4567/postagem/";

  fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(body => {
      return body.json();
    })
    .then(data => {
      let paragrafo = document.getElementById("resposta");
      let postagem = data;
      paragrafo.innerHTML = postagem.title;
    })
    .then(() => {
      console.log("complete");
    })
    .catch(error => console.error("Erro:", error.message || error));
}

function loadPostsByFilter() {
  let title = "acd";
  let URL = "https://localhost:4567/postagem?title=" + title;

  fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(body => {
      return body.json();
    })
    .then(data => {
      let paragrafo = document.getElementById("resposta");
      let postagem = data;
      paragrafo.innerHTML = postagem.title;
    })
    .then(() => {
      console.log("complete");
    })
    .catch(error => console.error("Erro:", error.message || error));
}

function deletePost() {
  let codigo = document.getElementById("id").value;
  let URL = "https://localhost:4567/postagem/" + codigo;

  fetch(URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })
    .then(body => {
      return body.json();
    })
    .then(() => {
      console.log("complete");
    })
    .catch(error => console.error("Erro:", error.message || error));
}

function editPost() {
  let codigo = document.getElementById("id").value;
  let URL = "https://localhost:4567/postagem/" + codigo;

  fetch(URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" }
  })
    .then(body => {
      return body.json();
    })
    .then(data => {
      let paragrafo = document.getElementById("resposta");
      let postagem = data;
      paragrafo.innerHTML = postagem.title;
    })
    .then(() => {
      console.log("complete");
    })
    .catch(error => console.error("Erro:", error.message || error));
}

function createPost() {
  let codigo = document.getElementById("id").value;
  let URL = "https://localhost:4567/postagem/" + codigo;

  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });
}
