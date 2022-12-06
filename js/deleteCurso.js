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

const resizeMenu = () => {
  return window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    window.pageYOffset > 20
      ? header.classList.add("isActive")
      : header.classList.remove("isActive");

    const img = document.querySelector(".logo");
    window.pageYOffset > 20
      ? img.classList.add("isActive")
      : img.classList.remove("isActive");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadPost();
  resizeMenu();
});
