console.log("Página cargada");

function aplicarCambios() {
  document.getElementById("primero").textContent = "Texto modificado por JavaScript";
  document.querySelector(".segundo").classList.add("bg-warning-subtle");
  document.querySelectorAll("#contenido p")[2].classList.add("text-danger");
  console.log("Párrafos modificados");
}

function anadirParrafo() {
  const contenido = document.querySelector("#contenido");
  const parrafo = document.createElement("p");
  parrafo.textContent = `Párrafo nuevo ${contenido.children.length + 1}`;
  contenido.append(parrafo);
  document.querySelector("#aviso2").classList.add("d-none");
  console.log("Párrafo añadido");
}

function eliminarUltimo() {
  const contenido = document.querySelector("#contenido");
  const ultimo = contenido.lastElementChild;

  if (ultimo === null) {
    document.querySelector("#aviso2").classList.remove("d-none");
  } else {
    ultimo.remove();
  }
  console.log("Eliminación de párrafo terminada");
}

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }
  console.log(`Resaltado activado en ${parrafos.length} párrafos`);
}

function cambiarTexto() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto === "") {
    error.classList.remove("d-none");
    return;
  }
  document.querySelector("#primero").textContent = texto;
  error.classList.add("d-none");
  console.log("Texto cambiado con textContent");
}

function cambiarConHtml() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto === "") {
    error.classList.remove("d-none");
    return;
  }
  document.querySelector("#primero").innerHTML = texto;
  error.classList.add("d-none");
  console.log("Texto cambiado con innerHTML");
}

function anadirTarea() {
  const campo = document.querySelector("#tareaInput");
  const texto = campo.value.trim();
  const error = document.querySelector("#error5");

  if (texto === "") {
    error.textContent = "Escribe una tarea antes de añadirla.";
    error.classList.remove("d-none");
    return;
  }

  const tarea = document.createElement("li");
  tarea.classList.add("list-group-item");
  const casilla = document.createElement("input");
  casilla.type = "checkbox";
  casilla.classList.add("form-check-input", "me-2");
  const etiqueta = document.createElement("span");
  etiqueta.textContent = texto;

  tarea.append(casilla, etiqueta);
  document.querySelector("#listaTareas").append(tarea);
  campo.value = "";
  error.classList.add("d-none");
  actualizarContador();
  console.log("Tarea añadida");
}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");

  if (marcadas.length === 0) {
    error.textContent = "No hay tareas marcadas para borrar.";
    error.classList.remove("d-none");
    return;
  }
  for (const casilla of marcadas) {
    casilla.parentElement.remove();
  }
  error.classList.add("d-none");
  actualizarContador();
  console.log("Tareas completadas borradas");
}

function actualizarContador() {
  const total = document.querySelectorAll("#listaTareas li").length;
  document.querySelector("#totalTareas").textContent = total;
}

function verDatosVentana() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  let punto = "xs";
  let minimo = 0;

  if (ancho >= 1400) {
    punto = "xxl";
    minimo = 1400;
  } else if (ancho >= 1200) {
    punto = "xl";
    minimo = 1200;
  } else if (ancho >= 992) {
    punto = "lg";
    minimo = 992;
  } else if (ancho >= 768) {
    punto = "md";
    minimo = 768;
  } else if (ancho >= 576) {
    punto = "sm";
    minimo = 576;
  }

  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;
  document.querySelector("#datoPunto").textContent = `${punto} (desde ${minimo} px)`;
  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;
  console.log("Datos de la ventana mostrados");
}
