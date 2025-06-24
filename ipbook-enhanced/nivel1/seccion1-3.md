```{admonition} Versión borrador / preliminar
:class: warning
Este documento es una versión preliminar para uso interno. Si encuentra algún problema o error, o si tiene algún comentario por favor repórtelo a los autores.
```

# Valores y tipos de datos

```{admonition} Objetivo de la sección
El objetivo de esta sección es introducir y discutir los conceptos de  *valor*, *literal*, y *tipo de datos*. Trabajaremos además con los tipos básicos *int*, *str* y *float* de Python.
```

La razón de ser de cualquier programa es poder manipular, mostrar, calcular o guardar _valores_. Estos valores podrían representar cosas que existan en una realidad, como por ejemplo la temperatura en una ciudad, la cantidad de dinero en una cuenta, el nombre de una persona, o la fecha actual. La naturaleza de los valores hace necesario separarlos en categorías porque en muchos casos no tiene sentido operarlos entre ellos. Por ejemplo, si sabemos que vamos a hacer una operación de multiplicación, no tiene sentido que mezclemos números con palabras. Estas categorías que se usan para separar los valores usualmente reciben el nombre de _tipos de datos_.

La pregunta natural que debería responderse ahora es: ¿Cómo se describe un valor dentro de un programa? En Python, la respuesta es que hay dos mecanismos básicos. El primero es a través de un _literal_, es decir que el valor se describe de forma directa siguiendo unas reglas dadas por el lenguaje. Por ejemplo, cuando en Python el literal `3` corresponde al valor entero _3_, el literal `3.14` corresponde al valor decimal _3.14_ y el literal `'Saludos'` corresponde a la palabra _Saludos_. El segundo mecanismo para expresar un valor es a través de una _expresión_ que tiene que ser evaluada de alguna forma para averiguar su valor. Algunas expresiones válidas en Python son `1 + 2.22`, `round(3.14, 2)` y `'Hola, ' + 'Mundo!'`. No se preocupe por entender estos ejemplos: las siguientes secciones se dedicarán a explicarlos en detalle.

Python ofrece mecanismos para representar, interpretar y hacer operaciones sobre valores de varios tipos. Los más importantes son los que vamos a estudiar en esta sección: números enteros (`int`), números decimales (`float`) y cadenas de caracteres (`str`).

```{admonition} 🐍 Explorador Interactivo de Tipos de Datos
:class: tip
Antes de profundizar en cada tipo, experimenta con nuestro explorador interactivo que te permite ver en tiempo real las características de int, float y str.

<iframe src="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel1/data-types-explorer.html"
        width="100%"
        height="400px"
        frameborder="0"
        allowfullscreen
        style="border: 2px solid #6c5ce7; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    Tu navegador no soporta iframes.
    <a href="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel1/data-types-explorer.html" target="_blank">
        Haz clic aquí para abrir el Explorador de Tipos de Datos
    </a>
</iframe>

*Descubre las diferencias entre int, float y str de manera visual e interactiva*
```

Adicionalmente, Python ofrece la función `type` que nos permite consultar de qué tipo es un determinado valor. Usaremos ahora esta función en tres ejemplos muy sencillos para introducir lo que se va a presentar en el resto de la sección y para observar el funcionamiento de la función misma.

```python
>>> type(9)
<class 'int'>
>>> type(3.14)
<class 'float'>
>>> type('Hola')
<class 'str'>
```

Usted puede probar estas mismas instrucciones escribiendo el ambiente de Python las instrucciones que se encuentran después de los caracteres `>>>`.

## Números enteros (int)

El primer tipo que vamos a estudiar es el que nos permite representar números enteros, positivos y negativos, y que en Python recibe el nombre de `int`.

En general, los números enteros se describen usando los literales a los que estamos acostumbrados: 0, 1, 2, 3, etc. Un número entero también puede ser negativo, así que los siguientes literales también son válidos: -1, -2, -3, etc. A diferencia de otros lenguajes, en Python no hay límites sobre los números enteros, así que cualquier número debería poder representarse sin problema [^bases].

## Números decimales (float)

Como complemento al tipo `int`, Python también ofrece el tipo `float` que permite representar números con decimales. Es importante notar que, debido a restricciones técnicas, Python frecuentemente tiene que redondear números decimales. A manera de ejemplo, consideremos el resultado de hacer la división `10/3` que resulta en `3.3333333333333335` en lugar del resultado esperado.

En Python, los literales para representar números decimales utilizan un punto como separador. Es decir que los siguientes son todos números de tipo float: 0.0, -1.1, 2.33, -4.5555557.

Una característica interesante de Python que no está presente en muchos otros lenguajes es la conversión automática que hace de enteros a decimales, especialmente cuando se hacen operaciones de división.

````{admonition} Importante
:class: important
Use siempre un punto y no una coma para separar la parte entera de la parte decimal en un ```float```.
````

## Cadenas de caracteres (str)

Las cadenas de caracteres son un tipo de dato muy importante dentro de Python y se denotan como de tipo `str`. Una cadena de caracteres es mucho más que una palabra. Una cadena de caracteres es una secuencia de símbolos que puede incluir letras (minúsculas y mayúsculas), números, signos de puntuación, espacios y hasta _emojis_. Es decir que una cadena de caracteres puede servirnos para representar cosas como un nombre, un número serial o un texto completo.

En Python hay 3 formas de representar literales que sean de tipo `str`.

1. **Rodeándolos con comillas _sencillas_**. Es decir que los siguientes son 3 ejemplos de cadenas de caracteres válidas: 'abc', 'a1 b2 c3', '¡Hola, Mundo!'.
2. **Rodeándolos con comillas _dobles_**. Es decir que los siguientes son 3 ejemplos de cadenas de caracteres válidas: "abc", "a1 b2 c3", "¡Hola, Mundo!".
3. **Rodeándolos con _tres comillas_ sencillas o dobles**. Es decir que los siguientes son 3 ejemplos de cadenas de caracteres válidas: """abc""", '''a1 b2 c3''', """¡Hola, Mundo!""".

Puede parecer una exageración tener 3 opciones diferentes, pero hay motivos claros para esto. Consideremos por ejemplo una cadena con un texto en inglés que tenga el siguiente valor: It's today!

Si quisiéramos representar la cadena usando comillas sencillas sí tendríamos un problema: ¿Si el literal fuera `'It's today!'` cómo podría hacer Python para saber que la cadena termina en la tercera comilla y no en la segunda? La solución más fácil para este problema es representar la misma cadena usando comillas dobles: `"It's today!"`. De esta forma se elimina la ambigüedad sin tener que recurrir a soluciones más complicadas.

De forma similar, si nuestra cadena tuviera comillas dobles dentro de ella, el literal se podría escribir con comillas sencillas y también se resolvería el problema. Desafortunadamente este truco no funciona cuando la cadena incluye comillas dobles y comillas sencillas. Por ejemplo, una cadena con el siguiente valor tendría este problema: She said to me "That's mine!".

La solución en este caso es utilizar expresiones especiales para representar las comillas dobles o las comillas sencillas. Es decir que en lugar de representar una comilla sencilla dentro de la cadena usando el caracter `'` se usaría la expresión `\'`. También existe la expresión equivalente `\"` para las comillas dobles. Esto quiere decir que el literal para la cadena del ejemplo podría ser `'She said to me "That\'s mine!"'` o `"She said to me \"That\'s mine!\""`.

Veamos ahora la opción de las tres comillas sencillas o dobles, que resuelve una limitación importante que tienen las otras dos opciones: cuando se usan tres comillas, las cadenas pueden tener cambios de línea dentro de los literales. Considere el siguiente fragmento de código válido en Python que se visualiza tal como fue tecleado en el intérprete del lenguaje [^haiku].

```python
>>> """one foolish heart
... five wits unswayed
... a thousand errors note"""
```

Por el contrario, si se usara una sola comilla sencilla o una sola comilla doble para iniciar el literal, se produciría un error como el siguiente al terminar la primera línea:

```python
>>> 'one foolish heart
  File "<stdin>", line 1
    'one foolish heart
                     ^
SyntaxError: EOL while scanning string literal
```

Esto no quiere decir que una cadena descrita usando los dos primeros métodos no pueda tener cambios de línea. Lo que pasa es que en este caso se debe utilizar una expresión especial para representar ese cambio de línea: `\n`. Esta expresión se conoce como un caracter de control y es utilizada en la mayoría de lenguajes de programación para hacer referencia a un cambio de línea al final de un párrafo (es lo que su teclado envía cuando usted presiona la tecla _enter_).

Veamos entonces cómo se usaría dentro de un literal:

```python
>>> 'one foolish heart\nfive wits unswayed\na thousand errors note'
```

````{admonition} Importante
:class: important
Para representar cambios de línea dentro de una cadena de caracteres debe usarse la combinación ```\n```.
````

## Conversiones entre tipos de datos

En Python es posible hacer conversiones entre diferentes tipos de datos para convertir, por ejemplo, una cadena en un número decimal, o un entero en una cadena. Esto sólo puede hacerse cuando tenga sentido y es útil para poder utilizar operadores de otros tipos de datos. Por ejemplo, no podemos convertir la cadena `'abc'` en un entero, pero sí podemos convertir la cadena `'3.4'` en un número decimal para después sumarlo al valor `4.55`.

En una de las próximas secciones estudiaremos más en detalle las funciones de conversión, pero por ahora usted debe saber que existen y cuál es su objetivo principal:

- `int(x)`: convierte el valor `x` a un entero. Por ejemplo, convierte el número `3.14` a `3` y la cadena `'-4'` a `-4`.
- `float(x)`: convierte el valor `x` a un número decimal. Por ejemplo, convierte el número entero `3` a `3.0` y la cadena `'-4.5'` a `-4.5`.
- `str(x)`: convierte el valor `x` a una cadena de caracteres. Por ejemplo, convierte el número entero `3` a la cadena `'3'` y al número decimal `-4.5` a la cadena `'-4.5'`.

```{admonition} Cuidado
:class: warning
Si usted intenta convertir valores de forma equivocada obtendrá un error y su programa posiblemente se detendrá. En general, usted debería verificar los valores para asegurarse que no vaya a tener problemas antes de intentar hacer una conversión de tipos. Más adelante veremos cómo se puede lograr esto.
```

[^bases]: Por defecto, los literales de números enteros asumen que se trata de números en base 10. Sin embargo, si se preceden los números con los caracteres '0b' o '0x' significaría que se trata de números binarios o hexadecimales, respectivamente. Por ejemplo, los tres literales 0b10110, 0x16 y 22 representarían el mismo valor (el número 22 en base 10).
[^haiku]: El texto fue tomado de <http://shakespeareshaiku.blogspot.com/> y está basado en el Soneto 141 de William Shakespeare.

## Ejercicios

1. Abra el intérprete de Python e intente convertir a entero las siguientes cadenas. ¿Qué resultado obtiene?

   - '1'
   - '1.1'
   - '-3'
   - 'a'

2. Abra el intérprete de Python e intente convertir a entero los siguientes números. ¿Qué resultado obtiene?

   - 3
   - 2.86
   - 2,86
   - 3.4
   - -3.4
