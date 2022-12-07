function deletePost() {
  let id = document.querySelector(".input-id").value;

  let URL = `https://localhost:4567/postagem/${id}`;

  fetch(URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })
    .then(body => {
      return body.json();
    })
    .then(() => {
      location.reload()
    })
    .catch(error => console.error("Erro:", error.message || error));
}

