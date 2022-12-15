# EJERCICIO 4 - PREPARANDO EL ARBOL DE NAVIDAD

# ================================

## QUE HACE CADA LINEA DE CODIGO

-   La función arbolDeNavidad recibe un argumento "height" que representa la altura del árbol de navidad que se va a dibujar. Primero, se define un objeto SYMBOL que contiene las constantes que se van a utilizar en la función: LEAF para los asteriscos, GAP para los espacios en blanco y TRUNK para el tronco del árbol. Luego se define una variable "tree" que va a ser un array donde se irán guardando las líneas del árbol que se vayan construyendo.

-   La variable "width" se inicializa en 1 y se utilizará para calcular el número de asteriscos que deben ir en cada línea del árbol. La variable "emptyChars" se inicializa en "height - 1" y se utilizará para calcular el número de espacios en blanco que deben ir a la izquierda y a la derecha del árbol en cada línea. La variable "gap" se inicializa con el valor de la constante GAP repetida tantas veces como sea la altura del árbol menos 1.

-   Luego, se define la variable "trunk" que se inicializa con el valor de la constante GAP repetida tantas veces como sea la altura del árbol menos 1, seguido de la constante TRUNK y, al final, el mismo valor de la constante GAP repetida tantas veces como sea la altura del árbol menos 1.

-   A continuación, se itera desde 1 hasta la altura del árbol. En cada iteración, se calcula el número de asteriscos que deben ir en la línea del árbol en cuestión utilizando la variable "width". Luego se calcula el número de espacios en blanco que deben ir a la izquierda y a la derecha del árbol en esta línea utilizando la variable "emptyChars". Se construye la línea del árbol concatenando el valor de la variable "gap" (que contiene los espacios en blanco), seguido de la variable "leafs" (que contiene los asteriscos), y finalmente el mismo valor de la variable "gap" (que contiene los espacios en blanco). La línea del árbol construida se añade al array "tree" mediante el método "push".

-   Finalmente, se incrementa la variable "width" en 2 para que en la siguiente iteración se añadan 2 asteriscos más a la línea del árbol. También se decrementa en 1 la variable "emptyChars" para que en la siguiente iteración se añada un espacio en blanco menos a la izquierda y a la derecha del árbol.

-   Cuando se ha construido todo el árbol, se añaden dos
