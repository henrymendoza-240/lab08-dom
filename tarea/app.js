// Tarea Lab 08: Componente Interactivo con Clases, Eventos y DOM

// 1. Clase Tarea
class Tarea {
  constructor(id, titulo) {
    this.id = id;
    this.titulo = titulo;
    this.completada = false;
  }

  completar() {
    this.completada = !this.completada;
  }

  obtenerEstado() {
    return this.completada ? "Completada" : "Pendiente";
  }
}

// 2. Clase GestorTareas
class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(titulo) {
    const nuevaTarea = new Tarea(Date.now(), titulo);
    this.tareas.push(nuevaTarea);
    return nuevaTarea;
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
  }

  obtenerTarea(id) {
    return this.tareas.find((t) => t.id === id);
  }

  contarPendientes() {
    return this.tareas.filter((t) => !t.completada).length;
  }

  contarTotal() {
    return this.tareas.length;
  }
}

// Instancia principal
const gestor = new GestorTareas();

// Referencias al DOM
const formTarea = document.querySelector("#formTarea");
const inputTitulo = document.querySelector("#inputTitulo");
const inputBuscar = document.querySelector("#inputBuscar");
const msgError = document.querySelector("#msgError");
const listaTareas = document.querySelector("#listaTareas");
const totalTareas = document.querySelector("#totalTareas");
const pendientesTareas = document.querySelector("#pendientesTareas");

// Función para renderizar la lista en el DOM
function renderizarLista(filtro = "") {
  listaTareas.innerHTML = "";

  const tareasFiltradas = gestor.tareas.filter((t) =>
    t.titulo.toLowerCase().includes(filtro.toLowerCase()),
  );

  tareasFiltradas.forEach((tarea) => {
    const li = document.createElement("li");
    if (tarea.completada) {
      li.classList.add("completada");
    }

    const span = document.createElement("span");
    span.textContent = tarea.titulo;

    const divAcciones = document.createElement("div");

    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = tarea.completada ? "Desmarcar" : "Completar";
    btnCompletar.classList.add("btn-completar");
    btnCompletar.addEventListener("click", () => {
      tarea.completar();
      actualizarInterfaz();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.classList.add("btn-borrar");
    btnBorrar.addEventListener("click", () => {
      gestor.eliminarTarea(tarea.id);
      actualizarInterfaz();
    });

    divAcciones.appendChild(btnCompletar);
    divAcciones.appendChild(btnBorrar);

    li.appendChild(span);
    li.appendChild(divAcciones);
    listaTareas.appendChild(li);
  });

  actualizarContadores();
}

function actualizarContadores() {
  totalTareas.textContent = gestor.contarTotal();
  pendientesTareas.textContent = gestor.contarPendientes();
}

function actualizarInterfaz() {
  renderizarLista(inputBuscar.value);
}

// EVENTO 1: submit en el formulario
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tituloTexto = inputTitulo.value.trim();

  // Validación de entrada
  if (tituloTexto === "") {
    msgError.textContent = "Error: El título de la tarea no puede estar vacío.";
    return;
  }

  if (tituloTexto.length < 3) {
    msgError.textContent = "Error: El título debe tener al menos 3 caracteres.";
    return;
  }

  msgError.textContent = "";
  gestor.agregarTarea(tituloTexto);
  inputTitulo.value = "";
  actualizarInterfaz();
});

// EVENTO 2: input para filtro de búsqueda en tiempo real
inputBuscar.addEventListener("input", () => {
  renderizarLista(inputBuscar.value);
});
