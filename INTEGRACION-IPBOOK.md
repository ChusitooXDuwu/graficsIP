# 📚 Guía de Integración con IPBook

Esta guía te explica cómo integrar las visualizaciones interactivas en el libro IPBook original.

## 🎯 Resumen del Proyecto

Hemos creado visualizaciones interactivas específicas para la **Sección 2.6 - Módulos de la librería estándar** del libro IPBook, incluyendo:

- **🧮 Explorador del Módulo Math**: Calculadora interactiva, conversor de ángulos, y demostración de constantes
- **🎲 Explorador del Módulo Random**: Simulador de dados, generador de números aleatorios, y visualización de distribución normal

## 📁 Archivos Creados

### Visualizaciones Principales

- `visualizations/nivel2/math-module-explorer.html`
- `visualizations/nivel2/random-module-explorer.html`

### Archivo de Ejemplo Mejorado

- `../IPBook/nivel2/seccion2-6-enhanced.md` - Versión mejorada con visualizaciones integradas

### Configuración

- `config/navigation.json` - Actualizado para incluir las nuevas visualizaciones

## 🔗 URLs de las Visualizaciones

Una vez deployadas en GitHub Pages, las visualizaciones están disponibles en:

```
https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/math-module-explorer.html
https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/random-module-explorer.html
```

## 🛠️ Cómo Integrar en IPBook

### Opción 1: Usando GitBook Embeds (Recomendado)

Para integrar las visualizaciones en GitBook, añade estos bloques en las posiciones apropiadas:

#### Para el Módulo Math:

````markdown
```{admonition} 🧮 Explorador Interactivo del Módulo Math
:class: tip
¿Quieres experimentar con las funciones y constantes del módulo math? Usa nuestro explorador interactivo donde puedes probar diferentes funciones matemáticas en tiempo real.

{% embed url="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/math-module-explorer.html" %}
Explora las funciones y constantes del módulo math de Python de manera interactiva
{% endembed %}
```
````

#### Para el Módulo Random:

````markdown
```{admonition} 🎲 Explorador Interactivo del Módulo Random
:class: tip
Experimenta con diferentes tipos de generación de números aleatorios usando nuestro simulador interactivo. Incluye simulación de dados, generación de números en rangos personalizados y visualización de distribuciones normales.

{% embed url="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/random-module-explorer.html" %}
Explora la generación de números aleatorios con el módulo random de Python
{% endembed %}
```
````

````

### Opción 2: Enlaces Directos

Si prefieres usar enlaces simples:

```markdown
🧮 [Explorador Interactivo del Módulo Math](https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/math-module-explorer.html)

🎲 [Explorador Interactivo del Módulo Random](https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/random-module-explorer.html)
````

### Opción 3: Iframes (Para otros sistemas)

```html
<iframe
  src="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/math-module-explorer.html"
  width="100%"
  height="800"
  frameborder="0"
>
</iframe>
```

## 🎨 Características de las Visualizaciones

### Explorador del Módulo Math

- **Constantes matemáticas**: π, e, infinito, NaN con valores reales
- **Calculadora interactiva**: Prueba expresiones como `math.sqrt(16)`, `math.sin(math.pi/2)`
- **Conversor de ángulos**: Convierte entre grados y radianes en tiempo real
- **Funciones organizadas**: Por categorías (básicas, trigonométricas, logarítmicas)

### Explorador del Módulo Random

- **Simulador de dados**: Animaciones realistas con estadísticas de frecuencia
- **Generador personalizable**: Números aleatorios en rangos definidos por el usuario
- **Distribución normal**: Histograma interactivo con parámetros ajustables
- **Estadísticas en tiempo real**: Comparación entre valores esperados y calculados

## 📋 Pasos para Implementar

### 1. En el Repositorio IPBook Original

1. **Hacer fork del repositorio** [cupi2-ip/IPBook](https://github.com/cupi2-ip/IPBook)
2. **Editar** `nivel2/seccion2-6.md`
3. **Añadir** los bloques de embed en las secciones correspondientes
4. **Hacer commit y push** de los cambios
5. **Crear pull request** para proponer los cambios

### 2. Ejemplo de Posicionamiento

````markdown
## El módulo math

[...texto existente...]

```{admonition} 🧮 Explorador Interactivo del Módulo Math
:class: tip
[...embed del explorador math...]
```
````

### Funciones

[...continúa con el texto existente...]

````

### 3. Para Testing Local

Si quieres probar localmente:

```bash
# En el directorio IPBook
jupyter-book build .
````

## 🌟 Beneficios Educativos

### Para Estudiantes

- **Aprendizaje visual**: Ven los resultados de las funciones en tiempo real
- **Experimentación libre**: Pueden probar diferentes valores y parámetros
- **Comprensión inmediata**: Feedback instantáneo de los cálculos
- **Engagement aumentado**: Interacción vs. texto pasivo

### Para Profesores

- **Herramienta de demostración**: Perfecta para clases en vivo
- **Ejercicios prácticos**: Los estudiantes pueden experimentar durante la clase
- **Validación de conceptos**: Los estudiantes pueden verificar sus cálculos
- **Recursos adicionales**: Complementa la explicación teórica

## 🔧 Mantenimiento y Actualizaciones

### URLs Estables

Las visualizaciones están hosteadas en GitHub Pages con URLs estables que no cambiarán.

### Actualizaciones

Para actualizar las visualizaciones:

1. Modificar los archivos en este repositorio
2. Hacer push a la rama `main`
3. GitHub Pages se actualiza automáticamente

### Compatibilidad

- ✅ Compatible con GitBook
- ✅ Responsive (móvil y desktop)
- ✅ Funciona en todos los navegadores modernos
- ✅ No requiere plugins adicionales

## 📞 Soporte

Si tienes preguntas o necesitas ayuda con la integración:

- Revisa los archivos de ejemplo en `../IPBook/nivel2/seccion2-6-enhanced.md`
- Las visualizaciones incluyen código de integración en cada página
- Todas las visualizaciones son autocontenidas y funcionan independientemente

¡Las visualizaciones están listas para ser integradas en el libro IPBook! 🚀
