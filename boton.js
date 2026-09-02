document.addEventListener("DOMContentLoaded", () => {
  let oscuro = false;

  const cambiarFondo = () => {
    oscuro = !oscuro;
    document.body.style.backgroundColor = oscuro ? "black" : "white";
    document.body.style.color = oscuro ? "white" : "black";
  };

  const elementos = document.querySelectorAll(
    "h1, .titulo, #titulo, button, .boton, [data-color-toggle]",
  );

  if (elementos.length > 0) {
    elementos.forEach((elemento) => {
      elemento.addEventListener("click", cambiarFondo);
    });
    return;
  }

  document.addEventListener("click", (event) => {
    const elemento = event.target.closest(
      "h1, .titulo, #titulo, button, .boton, [data-color-toggle]",
    );
    if (elemento) {
      cambiarFondo();
    }
  });
});
