```{admonition} Versión borrador / preliminar
:class: warning
Este documento es una versión preliminar para uso interno. Si encuentra algún problema o error, o si tiene algún comentario por favor repórtelo a los autores.
```

# Listas

```{admonition} Objetivo de la sección
El objetivo de esta sección es introducir las listas como un tipo de datos mutable y secuencial, explorando cómo crear, modificar y trabajar con listas en Python.
```

Las listas son uno de los tipos de datos más versátiles y utilizados en Python. A diferencia de las cadenas de caracteres, las listas son **mutables**, lo que significa que podemos modificar su contenido después de haberlas creado.

## El tipo list en Python

Una lista es una colección ordenada de elementos que pueden ser de cualquier tipo. Las listas se crean usando corchetes `[]` y los elementos se separan por comas.

### Crear listas

Hay varias formas de crear listas en Python:

```python
# Lista vacía
lista_vacia = []
lista_vacia2 = list()

# Lista con elementos
frutas = ['manzana', 'banana', 'naranja']
numeros = [1, 2, 3, 4, 5]
mixta = ['texto', 42, True, 3.14]

# Usando range
numeros_rango = list(range(1, 6))  # [1, 2, 3, 4, 5]
```

### Indexar listas

Al igual que las cadenas, podemos acceder a elementos individuales usando índices:

```python
frutas = ['manzana', 'banana', 'naranja']
print(frutas[0])   # manzana
print(frutas[1])   # banana
print(frutas[-1])  # naranja (último elemento)
```

Ejemplo de función para imprimir todos los elementos:

```python
def imprimir_elementos(lista: list) -> None:
    i = 0
    while i < len(lista):
        print(i, "->", lista[i])
        i += 1
```

### Ejemplo: calcular el promedio

```python
def calcular_promedio(numeros: list) -> float:
    if len(numeros) == 0:
        return 0
    suma = 0
    for numero in numeros:
        suma += numero
    return suma / len(numeros)

# Uso
notas = [85, 92, 78, 96, 88]
promedio = calcular_promedio(notas)
print(f"El promedio es: {promedio}")
```

## Modificar listas

Una de las características más importantes de las listas es que son **mutables**, es decir, podemos cambiar su contenido.

### El método append()

El método `append()` es fundamental para agregar elementos al final de una lista:

```{admonition} ➕ Visualización Interactiva: append()
:class: tip
¿Quieres ver exactamente cómo funciona `append()`? Nuestra visualización interactiva te muestra paso a paso cómo se agregan elementos al final de una lista.

<iframe src="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel1/append-demo.html"
        width="100%"
        height="500px"
        frameborder="0"
        allowfullscreen
        style="border: 2px solid #ff6b6b; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    Tu navegador no soporta iframes.
    <a href="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel1/append-demo.html" target="_blank">
        Haz clic aquí para abrir la demostración de append()
    </a>
</iframe>

*Experimenta con append() y observa cómo crecen las listas dinámicamente*
```

### Otros métodos de modificación

```python
# append - agregar al final
frutas = ['manzana', 'banana']
frutas.append('naranja')
print(frutas)  # ['manzana', 'banana', 'naranja']

# insert - insertar en posición específica
frutas.insert(1, 'pera')
print(frutas)  # ['manzana', 'pera', 'banana', 'naranja']

# remove - eliminar por valor
frutas.remove('banana')
print(frutas)  # ['manzana', 'pera', 'naranja']

# del - eliminar por índice
del frutas[0]
print(frutas)  # ['pera', 'naranja']

# copy - crear una copia
copia_frutas = frutas.copy()
```

````{admonition} ⚠️ ¡Cuidado con la mutabilidad!
:class: warning
Cuando modificas una lista, todos los nombres que apuntan a esa lista ven el cambio:

```python
lista_a = [1, 2, 3]
lista_b = lista_a  # ¡No es una copia!
lista_a.append(4)
print(lista_b)  # [1, 2, 3, 4] - ¡También cambió!

# Para hacer una copia real:
lista_c = lista_a.copy()
````

## Funciones, métodos y operadores útiles

### Funciones básicas

```python
numeros = [3, 1, 4, 1, 5, 9, 2, 6]

len(numeros)    # 8 - longitud
min(numeros)    # 1 - valor mínimo
max(numeros)    # 9 - valor máximo
sum(numeros)    # 31 - suma de elementos
```

### Operador in

```python
frutas = ['manzana', 'banana', 'naranja']
print('banana' in frutas)     # True
print('uva' in frutas)        # False
```

### Comparaciones

```python
lista1 = [1, 2, 3]
lista2 = [1, 2, 3]
lista3 = [1, 2, 4]

print(lista1 == lista2)  # True
print(lista1 < lista3)   # True (comparación lexicográfica)
```

### Métodos útiles

```python
numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5]

numeros.count(1)      # 2 - cuántas veces aparece 1
numeros.index(4)      # 2 - índice de la primera aparición de 4
numeros.sort()        # Ordena la lista in-place
numeros.reverse()     # Invierte la lista in-place
```

## Split & Join

Dos métodos muy útiles para trabajar entre cadenas y listas:

```python
# split - convierte cadena en lista
frase = "Python es genial"
palabras = frase.split()  # ['Python', 'es', 'genial']
palabras_coma = "a,b,c,d".split(',')  # ['a', 'b', 'c', 'd']

# join - convierte lista en cadena
lista = ['Python', 'es', 'genial']
frase_nueva = ' '.join(lista)  # "Python es genial"
csv = ','.join(['a', 'b', 'c'])  # "a,b,c"
```

## Listas complejas

### Listas de listas

```python
# Cada estudiante es una lista [nombre, nota]
estudiantes = [
    ['Ana', 85],
    ['Bob', 92],
    ['Carlos', 78]
]

# Acceder a datos
print(estudiantes[0][0])  # Ana
print(estudiantes[1][1])  # 92
```

### Listas de diccionarios

```python
# Cada actividad es un diccionario
actividades = [
    {'actividad': 'Examen 1', 'curso': 'Matemáticas', 'nota': 85},
    {'actividad': 'Tarea 1', 'curso': 'Python', 'nota': 92},
    {'actividad': 'Proyecto', 'curso': 'Python', 'nota': 88}
]

# Calcular promedio de Python
notas_python = []
for actividad in actividades:
    if actividad['curso'] == 'Python':
        notas_python.append(actividad['nota'])

promedio_python = sum(notas_python) / len(notas_python)
```

### Diccionario con listas

```python
# Las llaves son actividades, valores son listas de notas
notas_por_actividad = {
    'Examen 1': [85, 92, 78, 96],
    'Tarea 1': [88, 94, 82, 91],
    'Proyecto': [90, 87, 93, 89]
}

# Promedio del Examen 1
promedio_examen1 = sum(notas_por_actividad['Examen 1']) / len(notas_por_actividad['Examen 1'])
```

## Ejercicios

```{admonition} 💻 Ejercicios prácticos
:class: exercise
Prueba estos ejercicios usando la visualización de append cuando sea apropiado:

1. **Lista de pares**: Crear una lista con solo los números pares del 1 al 20
2. **Invertir números**: Dada una lista, crear otra con los números en orden inverso
3. **Números aleatorios**: Crear una lista con 10 números aleatorios
4. **Contar mayúsculas**: Usar split para contar palabras en mayúscula en una frase
5. **Buscar subcadena**: En cuántas palabras aparece una determinada cadena
6. **Inserción ordenada**: Insertar un elemento en una lista manteniendo el orden
7. **Promedio de notas**: Calcular el promedio de las notas de un estudiante
8. **Mejor actividad**: Encontrar la actividad con mayor nota promedio
9. **Filtrar extremos**: Eliminar elementos del principio y final hasta cumplir una condición
```

## Más allá de Python

Las listas son estructuras fundamentales en programación. Otros lenguajes tienen conceptos similares:

- **Java**: ArrayList, LinkedList
- **C++**: vector, list
- **JavaScript**: Array
- **C#**: List<T>, Array

La comprensión profunda de las listas te preparará para trabajar con estructuras de datos más avanzadas como pilas, colas y árboles.
