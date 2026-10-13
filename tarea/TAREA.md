# Tarea: Mi componente interactivo

## Componente elegido

Gestor interactivo de tareas académicas con filtro en tiempo real, validaciones y contadores de estado.

## Version 1: solo DOM

```js
// Versión inicial manipulando nodos estáticos
const lista = document.querySelector("#listaTareas");
const li = document.createElement("li");
li.textContent = "Estudiar para el examen de Web";
lista.appendChild(li);
```

**Que agregué:** Creación y selección básica de elementos en el DOM con querySelector, createElement y appendChild.

**Por qué:** Para verificar la estructura visual básica del contenedor antes de procesar entradas del usuario.

**Que cambió:** Muestra una lista estática en la pantalla creada por código.

## Version 2: con eventos

```js
JavaScript;
const form = document.querySelector("#formTarea");
const input = document.querySelector("#inputTitulo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  document.querySelector("#listaTareas").appendChild(li);
  input.value = "";
});
```

**Que agregué:** Captura del evento submit con preventDefault() y validación básica de campos vacíos.

**Por qué:** Para evitar que el formulario recargue la página y permitir al usuario agregar elementos dinámicos.

**Que cambió:** La interfaz reacciona a los envíos del usuario añadiendo textos nuevos a la lista.

## Version 3: con clases y objetos

```js
class Tarea {
  constructor(id, titulo) {
    this.id = id;
    this.titulo = titulo;
    this.completada = false;
  }
  completar() {
    this.completada = !this.completada;
  }
}

class GestorTareas {
  constructor() {
    this.tareas = [];
  }
  agregarTarea(titulo) {
    const t = new Tarea(Date.now(), titulo);
    this.tareas.push(t);
    return t;
  }
  eliminarTarea(id) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
  }
  contarPendientes() {
    return this.tareas.filter((t) => !t.completada).length;
  }
}
```

**Que agregué:** Clases Tarea y GestorTareas, eventos click en botones generados dinámicamente, y evento input para búsqueda en vivo.

**Por qué:** Para encapsular la lógica de negocio, separar el manejo de datos del renderizado e incrementar las interacciones.

**Que cambió:** La página permite marcar tareas como completadas, borrarlas, buscarlas en vivo y actualiza contadores automáticos.

## Donde uso DOM, eventos y objetos

| Pieza   | Línea / Sección del código final                                                        | Para qué sirve                                                  |
| ------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| DOM     | `document.querySelector("#listaTareas"), createElement("li")`                           | Selecciona contenedores y crea elementos HTML dinámicos         |
| Eventos | `formTarea.addEventListener("submit", ...), inputBuscar.addEventListener("input", ...)` | Reacciona al envío, tipeo y clics en botones de borrar/completa |
| Objetos | `const gestor = new GestorTareas();, new Tarea(...)`                                    | Almacena y modela el estado de cada tarea y del listado         |

## Pruebas realizadas

| Acción del usuario                | Resultado esperado                           | Resultado obtenido                                  | Cumple (Sí / No) |
| --------------------------------- | -------------------------------------------- | --------------------------------------------------- | ---------------- |
| Clic en "Agregar" con campo vacío | Muestra mensaje de error en rojo             | Aparece "Error: El título... no puede estar vacío." | Sí               |
| Agregar "Examen de Java"          | Añade la tarea a la lista y suma +1 al total | Se agrega a la lista y el total cambia a 1          | Sí               |
| Clic en "Completar"               | Tacha la tarea y reduce las pendientes       | La tarea se tacha y las pendientes bajan a 0        | Sí               |
| Escribir "Java" en el buscador    | Filtra y muestra solo coincidencias          | Muestra únicamente la tarea filtrada                | Sí               |
| Clic en "Borrar"                  | Elimina la tarea del DOM y del arreglo       | La tarea desaparece y el total vuelve a 0           | Sí               |

## Por que diseñe asi mi clase

```text
Diseñé la clase Tarea con los atributos id, titulo y completada para identificar unívocamente cada elemento y gestionar su estado individual. La clase GestorTareas administra el conjunto de objetos mediante arreglos, permitiendo filtrar, contar e independizar completamente la lógica de datos de la capa de presentación (DOM).
```
