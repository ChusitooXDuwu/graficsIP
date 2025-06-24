# 📚 IPBook - Versión Mejorada con Visualizaciones Interactivas

Una versión mejorada del libro "Introducción a la Programación" con visualizaciones interactivas integradas.

## 🌟 Características Nuevas

### ✨ Visualizaciones Interactivas

- **🧮 Explorador del Módulo Math**: Calculadora interactiva para funciones matemáticas
- **🎲 Explorador del Módulo Random**: Simuladores de números aleatorios y distribuciones
- **📊 Histogramas en tiempo real**: Visualización de distribuciones normales
- **🎯 Ejercicios interactivos**: Complementos prácticos para el aprendizaje

### 📍 Ubicación de las Visualizaciones

Las visualizaciones están integradas en:

- **Nivel 2, Sección 2.6**: Módulos de la librería estándar
  - Módulo `math` con calculadora interactiva
  - Módulo `random` con simulaciones

## 🚀 Cómo Construir el Libro

### Prerrequisitos

```bash
pip install jupyter-book
```

### Construcción

```bash
# Navegar al directorio del libro mejorado
cd ipbook-enhanced

# Construir el libro
jupyter-book build .

# Ver el resultado
# El libro estará en _build/html/index.html
```

### Publicación en GitHub Pages

```bash
# Desde el directorio raíz del repositorio
ghp-import -n -p -f ipbook-enhanced/_build/html
```

## 🔗 Enlaces Importantes

- **Portal de Visualizaciones**: https://chusitooxduwu.github.io/graficsIP/
- **Repositorio Original**: https://github.com/cupi2-ip/IPBook
- **Libro Original Publicado**: https://cupi2-ip.github.io/IPBook/

## 📖 Contenido del Libro

### Nivel 0 - Antes de empezar

Configuración del entorno y conceptos fundamentales.

### Nivel 1 - Empezando a programar

- Variables y expresiones
- Tipos de datos básicos
- Funciones simples

### Nivel 2 - Tomando decisiones ⭐ **¡CON VISUALIZACIONES!**

- Instrucciones condicionales
- Expresiones booleanas
- **Módulos de la librería estándar** ← **Nuevas visualizaciones aquí**
- Diccionarios

### Nivel 3 - Repitiendo acciones

- Instrucciones iterativas
- Listas y operaciones

### Nivel 4 - Matrices y librerías

- Estructuras de datos complejas
- Librerías especializadas

## 🎯 Mejoras Incluidas

### En la Sección 2.6 (Módulos de la librería estándar):

#### Módulo Math

- ✅ Calculadora interactiva para probar funciones
- ✅ Conversor de ángulos (grados ↔ radianes)
- ✅ Showcase de constantes matemáticas (π, e, inf, nan)
- ✅ Ejercicios prácticos integrados

#### Módulo Random

- ✅ Simulador de dados con estadísticas
- ✅ Generador de números aleatorios personalizable
- ✅ Visualización de distribución normal
- ✅ Histogramas interactivos en tiempo real

### Características Técnicas

- ✅ **Responsive**: Funciona en móvil y desktop
- ✅ **Autocontenidas**: No requieren instalación adicional
- ✅ **Integradas**: Embebidas directamente en el libro
- ✅ **Educativas**: Diseñadas específicamente para enseñanza

## 🛠️ Desarrollo

### Estructura del Proyecto

```
ipbook-enhanced/
├── _config.yml              # Configuración del libro mejorado
├── _toc.yml                 # Tabla de contenidos
├── nivel2/
│   └── seccion2-6.md        # ← Sección mejorada con visualizaciones
├── visualizations/          # (Referenciadas desde el repo principal)
└── _build/                  # Libro compilado
```

### Tecnologías Utilizadas

- **Jupyter Book**: Sistema de publicación del libro
- **MyST Markdown**: Formato de texto con extensiones
- **HTML/CSS/JavaScript**: Visualizaciones interactivas
- **GitHub Pages**: Hosting de las visualizaciones

## 📊 Comparación con el Original

| Característica                    | Original | Versión Mejorada |
| --------------------------------- | -------- | ---------------- |
| Contenido teórico                 | ✅       | ✅               |
| Ejercicios estáticos              | ✅       | ✅               |
| Visualizaciones interactivas      | ❌       | ✅               |
| Calculadoras integradas           | ❌       | ✅               |
| Simuladores en tiempo real        | ❌       | ✅               |
| Ejercicios prácticos interactivos | ❌       | ✅               |

## 🤝 Contribuir

Para contribuir a las visualizaciones:

1. Fork del repositorio principal
2. Crear nuevas visualizaciones en `/visualizations/`
3. Integrar en las secciones correspondientes
4. Pull request con las mejoras

## 📄 Licencia

Este proyecto mantiene la licencia del IPBook original y añade contenido educativo complementario.

---

**🎯 Objetivo**: Mejorar la experiencia de aprendizaje de programación mediante visualizaciones interactivas que complementen la teoría con práctica inmediata.
