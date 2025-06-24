# Módulos de la librería estándar

```{admonition} Versión borrador / preliminar
:class: warning
Este documento es una versión preliminar para uso interno. Si encuentra algún problema o error, o si tiene algún comentario por favor repórtelo a los autores.
```

```{admonition} Objetivo de la sección
El objetivo de esta sección es presentar un par de módulos para ilustrar el poder de las funcionalidades que ya están disponibles en la librería estándar de Python.
```

Afortunadamente vivimos en una época en la cual no tenemos que preocuparnos por programar absolutamente todo cada vez que queremos construir un nuevo programa. Por ejemplo, cuando en 1992 la compañía idSoftware empezó a trabajar en Wolfenstein 3D, tuvieron que construir desde cero todas las funcionalidades para representar espacios tridimensionales en la pantalla. Hoy en día, no sólo hay infinidad de librerías que hacen las mismas funcionalidades, sino que algunas de esas funcionalidades están implementadas dentro de las tarjetas de video para que su uso sea aún más fácil y su ejecución sea más rápida.

Por otra parte, esta realidad hace que sea cada vez más importante tener la curiosidad de buscar librerías que puedan ayudarnos con nuestro trabajo y la habilidad para aprender a usarlas rápidamente.

En esta sección enfrentamos esta realidad introduciendo dos módulos que hacen parte de la librería estándar de Python. Es decir, estos dos módulos hacen parte de la librería que debería acompañar a cualquier distribución de Python y que siempre deberíamos tener disponible. Esta librería incluye más de un centenar de módulos que cubren aspectos como procesamiento de texto, manipulación de fechas y calendarios, compresión de archivos, criptografía, comunicación por Internet e interacción con el sistema operativo.

## El módulo math

El primer módulo que vamos a introducir es el módulo `math`, cuya documentación actual se puede encontrar en [https://docs.python.org/3.7/library/math.html](https://docs.python.org/3.7/library/math.html).

El módulo math define funciones que permiten hacer con facilidad importantes operaciones matemáticas y definen también unas constantes de uso frecuente.

La manera de importar todo lo que ofrece este módulo es a través de la instrucción `import math`.

```{admonition} 🧮 Explorador Interactivo del Módulo Math
:class: tip
¿Quieres experimentar con las funciones y constantes del módulo math? Usa nuestro explorador interactivo donde puedes probar diferentes funciones matemáticas en tiempo real.

<iframe src="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/math-module-explorer.html"
        width="100%"
        height="600px"
        frameborder="0"
        allowfullscreen
        style="border: 2px solid #007acc; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    Tu navegador no soporta iframes.
    <a href="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/math-module-explorer.html" target="_blank">
        Haz clic aquí para abrir el Explorador del Módulo Math
    </a>
</iframe>

*Explora las funciones y constantes del módulo math de Python de manera interactiva*
```

### Funciones

Las siguientes son algunas de las funciones que define el módulo y cuyo conocimiento podría ser de mucha utilidad.

- `gcd(x, y)`: función para calcular el máximo común divisor de dos números (Gratest Common Denominator).
- `log(x, base)`: función para calcular el logaritmo de un número con respecto a una base.
- `log2(x)`: función para calcular el logaritmo de un número en base 2.
- `sqrt`: función para calcular la raíz cuadrada de un número.
- `sin`, `cos`, `tan`: funciones para calcular el seno, coseno y tangente de un ángulo medido en radianes.
- `degrees`: función para convertir un ángulo en radianes a un ángulo medido en grados.
- `radians`: función para convertir un ángulo medido en grados a un ángulo medido en radianes.

```{admonition} 💡 Prueba estas funciones
:class: note
En el explorador interactivo puedes probar expresiones como:
- `math.sqrt(16)` - Calcula la raíz cuadrada de 16
- `math.sin(math.pi/2)` - Calcula el seno de π/2 radianes (90 grados)
- `math.gcd(48, 18)` - Encuentra el máximo común divisor de 48 y 18
- `math.degrees(math.pi)` - Convierte π radianes a grados
```

### Constantes

Este módulo también define unas constantes que son de utilidad tanto para hacer otros cálculos como para detectar problemas con cálculos previos. Estos valores son:

- $\pi$
- e (número de Euler)
- inf, el valor que utiliza Python para representar el infinito.
- nan, el valor que utiliza Python para representar un número indefinido (NaN significa Not A Number).

Tenga cuidado: aunque en la mayoría de lenguajes las constantes se suelen expresar con mayúsculas, en el módulo `math` las constantes tienen nombres en minúsculas, como se ve en el siguiente fragmento:

```python
>>> print("El valor de pi:", math.pi)
El valor de pi: 3.141592653589793
>>> print("El valor de e:", math.e)
El valor de e: 2.718281828459045
>>> print("El valor de infinito:", math.inf)
El valor de infinito: inf
>>> print("El valor de un número indefinido:", math.nan)
El valor de un número indefinido: nan
```

## El módulo random

El segundo módulo que vamos a introducir es el módulo `random`, cuya documentación actual se puede encontrar en [https://docs.python.org/3.7/library/random.html](https://docs.python.org/3.7/library/random.html).

El módulo random define funciones que generan números aleatorios de acuerdo con diferentes reglas. Por ejemplo, este módulo ofrece mecanismos para generar valores continuos, valores discretos y también valores que se ajusten a las principales distribuciones aleatorias.

La manera de importar todo lo que ofrece este módulo es a través de la instrucción `import random`.

```{admonition} 🎲 Explorador Interactivo del Módulo Random
:class: tip
Experimenta con diferentes tipos de generación de números aleatorios usando nuestro simulador interactivo. Incluye simulación de dados, generación de números en rangos personalizados y visualización de distribuciones normales.

<iframe src="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/random-module-explorer.html"
        width="100%"
        height="600px"
        frameborder="0"
        allowfullscreen
        style="border: 2px solid #28a745; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    Tu navegador no soporta iframes.
    <a href="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/random-module-explorer.html" target="_blank">
        Haz clic aquí para abrir el Explorador del Módulo Random
    </a>
</iframe>

*Explora la generación de números aleatorios con el módulo random de Python*
```

### Valores continuos

Una variable aleatoria continua es una variable que puede asumir cualquiera de los valores dentro de un rango determinado, con una probabilidad que depende de la distribución asociada a la variable.

Dentro del módulo `random`, la función también llamada `random` es tal vez la más utilizada porque permite generar valores uniformemente distribuidos entre 0 y 1. Es decir, cada vez que se invoque la función `random.random()` se obtendrá un número entre 0 y 1, escogido de forma completamente aleatoria. Note que 0 es un valor posible, pero 1 está por fuera del intervalo considerado.

La gran ventaja que tiene esta distribución es que multiplicar el resultado de la función por un valor 'x' hace que se encuentren valores uniformemente distribuidos entre 0 y 'x'.

Por ejemplo, si quisiéramos generar un valor aleatorio entre 0 y 7, podríamos ejecutar el siguiente código:

```python
import random

valor = random.random() * 7
```

Un efecto similar se puede lograr usando la función `uniform` que recibe dos parámetros 'a' y 'b' y genera un número aleatorio en el intervalo [a, b). Note que llamar `random.uniform(a, b)` es equivalente a invocar `random.random()*(b-a) + a`.

```{admonition} 🎯 Experimenta con rangos personalizados
:class: note
En la visualización interactiva puedes:
- Cambiar los valores mínimo y máximo para generar números en cualquier rango
- Ver cómo se distribuyen los números generados
- Comparar diferentes rangos y observar los patrones
```

### Valores discretos

Una variable aleatoria discreta toma sólo valores discretos dentro de un rango determinado, con una probabilidad que depende de la distribución asociada a la variable. A diferencia de las variables continuas, cuando las variables son discretas los posibles valores que pueden asumir son enumerables.

La principal función para generar variables aleatorias discretas se llama `randint` y sirve para generar valores enteros entre dos números 'a' y 'b'.
En el siguiente programa se usa esta función para simular el lanzamiento de un dado:

```python
import random

lanzamiento = random.randint(1, 6)
```

```{admonition} 🎲 Simula lanzamientos de dados
:class: note
La visualización incluye un simulador de dados que:
- Muestra animaciones realistas de lanzamiento
- Calcula estadísticas de frecuencia
- Permite lanzar múltiples dados para ver patrones
- Demuestra cómo la frecuencia se acerca a 1/6 para cada número
```

Una función relacionada es `randrange`, que genera valores enteros desde un número inicial (start), hasta un número final (stop), con un cierto intervalo (step). Por ejemplo, si queremos un número múltiplo de 3 entre 6 y 30 podemos usar la siguiente invocación:

```python
numero = random.randrange(6, 30, 3)
```

Note que esta función puede generar el número 'start' pero nunca generará el valor 'stop'.

### Variables aleatorias

Finalmente, el módulo random incluye funciones para generar valores siguiendo la distribución triangular, Beta, exponencial, Gamma, Normal, y Pareto, entre otras.

Como esta no pretende ser una revisión exhaustiva sólo revisaremos la función `random.normalvariate`, que genera números distribuidos de acuerdo a una distribución normal.

```python
>>> help(random.normalvariate)
Help on method normalvariate in module random:

normalvariate(mu, sigma) method of random.Random instance
    Normal distribution.

    mu is the mean, and sigma is the standard deviation.

```

Esta función requiere de un parámetro `mu` (el valor promedio de los valores en la distribución) y de un parámetro `sigma` (la desviación estándar de los valores) para generar valores que se distribuyan de forma normal de acuerdo con los parámetros. Los siguientes son 10 valores generados con esta función usando una media de 10 y una desviación estándar de 1.5:

```python
# random.normalvariate(10,1.5)
0 - 9.74230603318132
1 - 9.765339949262536
2 - 10.309760658154236
3 - 10.00652736167399
4 - 8.828709896119436
5 - 9.105408757081975
6 - 8.28137647679426
7 - 9.898607684096598
8 - 7.545894557163404
9 - 10.83177690308728
```

```{admonition} 📊 Visualiza la distribución normal
:class: tip
En la sección de distribución normal de la visualización puedes:
- Cambiar los parámetros μ (media) y σ (desviación estándar)
- Ver un histograma en tiempo real de 100 muestras
- Comparar los valores esperados vs. los calculados
- Entender visualmente cómo afectan los parámetros a la forma de la distribución
```

## Ejercicios

1. Usando la función `random.normalvariate` genere 15 números aleatorios con media 3.8 y desviación estándar de 1. Calcule ahora usted la media de los números generados y la desviación estándar. ¿Qué tan lejos están de la media y la desviación planeada? Ejecute su programa y observe cómo cambian los resultados con cada ejecución.

```{admonition} 💻 Ejercicio interactivo
:class: exercise
Usa la visualización del módulo random para completar este ejercicio:
1. Configura la media en 3.8 y la desviación estándar en 1.0
2. Genera múltiples muestras y observa las estadísticas
3. Anota las diferencias entre los valores esperados y calculados
4. Repite el proceso varias veces para ver la variabilidad
```

## Más allá de Python

Así como Python define una librería estándar con módulos para las tareas más comunes (¡y muchas tareas no tan comunes!), la mayoría de lenguajes de programación ofrecen su propia librería estándar que debería estar disponible para todos los que usen el lenguaje. A juzgar por las discusiones y procesos legales de los últimos años sobre la propiedad y la disponibilidad de las librerías estándar de Java, se podría creer que las librerías son incluso más importantes que el lenguaje mismo.

Muchas veces, aprender a utilizar efectivamente las funcionalidades disponibles en las librerías estándar es más difícil y toma más tiempo que aprender a usar la sintaxis misma de un lenguaje. Por ejemplo, un programador experimentado debería ser capaz de dominar en un día la sintaxis del lenguaje de programación SmallTalk[^st] , pero seguramente le tomaría mucho más tiempo dominar las librerías estándar que son absolutamente imprescindibles para construir incluso programas sencillos con el lenguaje. Algo similar le pasa a los programadores que pasan de Java a C# y viceversa: hay muchísimos conceptos comunes pero la principal dificultad en el proceso de aprendizaje es aprender a utilizar las librerías principales.

[^st]: SmallTalk es un lenguaje de programación muy poderoso, pero con una sintaxis extremadamente pequeña. Por ejemplo, en el lenguaje mismo no existen instrucciones condicionales, sino que estas están implementadas en las librerías estándar.
