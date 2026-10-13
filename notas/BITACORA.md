# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Google Chrome (o Microsoft Edge)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola | Cambio el titulo temporalmente | No |
| textContent desde app.js | Cambio el titulo a "Hola TECSUP" | Si |
| style.color | Cambio el color del titulo a azul | Si |
| classList.add | Agrego fondo amarillo al mensaje | Si |
| createElement + appendChild | Agrego "JavaScript" a la lista | Si |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un solo clic sobre el boton | 1 |
| dblclick | Doble clic rapido sobre el boton | 1 (por cada par de clics) |
| mouseover | Pasar el cursor sobre el boton | 1 (cada vez que entra el mouse) |

*Consola (evento.type y evento.target):* `evento.type` muestra la cadena con el nombre del evento capturado (ej. "click"), mientras que `evento.target` muestra la etiqueta HTML que recibio la accion (ej. `<button id="btnSumar">`).

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | Actualiza el saludo en tiempo real | No |
| Enviar sin preventDefault | El mensaje parpadea un instante | Si |
| Enviar con preventDefault, correo sin @ | Muestra mensaje de error en rojo | No |
| Enviar con preventDefault, correo con @ | Muestra mensaje de exito "Enviado" | No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875.00 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90.00 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510.00 |

*Ventaja:* Usar una clase permite empaquetar datos y metodos reutilizables, permitiendo crear multiples objetos dinamicos sin repetir estructura ni escribirlos a mano en HTML.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 | 12.50 | Si |
| + Lapicero 3.20 | 15.70 | Si |
| + Mochila 89.90 | 105.60 | Si |
| Sin Number() | Error en consola (NaN / toFixed) | No |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
| DOM | `document.querySelector("#carrito")` | Selecciona el nodo para pintar elementos |
| Evento | `formProducto.addEventListener("submit", ...)` | Escucha el envio del formulario |
| Objeto | `new Producto(prodNombre.value, ...)` | Instancia un producto con los datos capturados |