# 📚 Guía de Integración con GitBook

Esta guía explica cómo integrar las visualizaciones de IPBook en tu GitBook.

## 🔗 Métodos de Integración

### 1. Embed (Recomendado)

```markdown
{% embed url="https://chusitooxduwu.github.io/GraficosLibroIP/visualizations/nivel1/data-types-explorer.html" %}
Explora los tipos de datos int, float y str de manera interactiva
{% endembed %}
```

### 2. Iframe

```html
<iframe
  src="https://chusitooxduwu.github.io/GraficosLibroIP/visualizations/nivel1/append-demo.html"
  width="100%"
  height="600"
  frameborder="0"
>
</iframe>
```

### 3. Enlace directo

```markdown
[🚀 Ver visualización interactiva](https://chusitooxduwu.github.io/GraficosLibroIP/visualizations/nivel1/functions-flow.html)
```

## 📋 Lista de URLs para GitBook

### Nivel 1

- Tipos de datos: `visualizations/nivel1/data-types-explorer.html`
- Demo append: `visualizations/nivel1/append-demo.html`
- Flujo de funciones: `visualizations/nivel1/functions-flow.html`

### Nivel 2

- Condicionales: `visualizations/nivel2/conditionals-demo.html`

## 🎨 Personalización

Las visualizaciones se adaptan automáticamente al tema de GitBook y son completamente responsive.

## 🔧 Configuración Avanzada

### Personalizar altura del iframe

```html
<iframe
  src="https://chusitooxduwu.github.io/GraficosLibroIP/visualizations/nivel1/data-types-explorer.html"
  width="100%"
  height="800"
  frameborder="0"
  scrolling="no"
>
</iframe>
```

### Con CSS personalizado

```html
<style>
  .custom-viz-iframe {
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
  }
</style>

<iframe
  class="custom-viz-iframe"
  src="https://chusitooxduwu.github.io/GraficosLibroIP/visualizations/nivel1/append-demo.html"
  width="100%"
  height="600"
  frameborder="0"
>
</iframe>
```
