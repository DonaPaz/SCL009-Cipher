# 7-Secrets

Webapp de creación de mensajes de textos secretos, pensado para niñas y adolescentes que quieran divertirse o mantener la privacidad de sus mensajes, con su grupo de mejores amigas.

![portada](https://i.pinimg.com/originals/b0/3c/22/b03c2206a5fb606acd5c8003007daecf.png)

***
### Planificación y Diseño

#### Planificación

En el proceso de planificación producción se realizó:
* Diagrama de Flujo.
* Prototipado de baja fidelidad e iteración.
* Utilización de herramientas de planificación "Trello" (ver [aquí )](https://trello.com/b/2ZsRb2tk/cifrado-cesar), "Keep Google".

#### Diseño
El nombre y la interfaz gráfica fue pensada en una analogía a 7-Rings, canción popular juvenil de Ariana Grande, y que hace mención al girl power y la amistad, buscando de esa forma una identificación de marca con esta canción que está en los Top Charts y que es favorita entre las jovencitas adolescentes.

La webapp pretende ser visualmente limpia y que no lleve a confusiones, es por eso que inicialmente se guía al usuario a elegir qué desea realizar (crear mensaje secreto o revelarlo). Elegida la opción esta lleva a una segunda pantalla que permite ejecutar la acción.

La interfaz gráfica original fue testeada en niñas de 15 y 17 años, debido a los resultados esta fue modificada a lo que se presenta actualmente. Sin embargo, aún quedan algunas funciones que añadir que podrían mejora la funcionalidad de la app, como por ejemplo un botón para copiar el texto cifrado al clipboard.


***

### Usuario y Producto

#### A quién va dirigido.

Una de las herramienta más usada en las comunicaciones son los mensajes de texto. Es una realidad que hoy en día que, para los adolescentes, el celular se ha convertido en el intrumento predilecto a la hora de compartir y comunicarse con sus coetaneos.  Un estudio de Barómetro (España), de marzo 2015, señala que entre los adolescentes un 79,2% considera que WhatsApp es una herramienta necesaria o muy necesaria, es por esto que se ha definido como el público objetivo a niñas y adolescentes.


#### Objetivos del producto.
7-Secrets entrega una herramienta para aquellas niñas y adolescentes que usan medios de comunicación como WhatSapp y que desean enviar mensajes secretos entre sus amigas como un juego o que no quieran verse expuestas a que personas, fuera de su nucleo de confianza, puedan leer dichos mensajes.


#### Cómo soluciona el problema.
7- Secrets funciona mediante el cifrado de textos que pueden ser copiados a cualquier herramienta de mensajería, de este modo puedes guardar la privacidad de tus mensajes o simplemente puede ser usado como un juego. 

El cifrado de esta webapp está basado en el Código César, código que permite el desplazamiento (offset) de una letra a través del abecedario, es decir, si escribes "ABC" y quieres desplazar las letras en 1 puesto, el resultado será "BCD". 

Si quieres aprender más sobre el Código César puedes ver aquí: [Código César](https://en.wikipedia.org/wiki/Caesar_cipher).



***

### Cómo usar

* Ingresar en la página de Inicio.
* Seleccionar si quieres "Crear un Mensaje Secreto" o "Descubrir un Mensaje Secreto".
> Si seleccionas "Crear Mensaje Secreto"
* Ingresar en área de texto el mesnsaje que se quiere crear.
* Ingresar en el área de texto "Llave" un número para realizar el offset.
* Pulsar botón "Crear Mensaje de texto".
> Si selecciones "Descubrir mensaje de Texto"
* Ingresar el texto secreto (texto codificado).
* Indicar el número de "Llave" (offset).
* Pulsar botón descubrir mensaje secreto.

Ambas pantallas contienen un botón botón de volver al inicio.


***
### Build With
- Vanilla Javascript (ES6)
- CSS
- HTML5
- Photoshop CS5
- Google Fonts
