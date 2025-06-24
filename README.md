# 📚 GraficsIP - Portal de Visualizaciones IPBook

Un portal completo de visualizaciones interactivas para el libro "Introducción a la Programación" (IPBook) de CUPI2 - Universidad de los Andes.

## 🌟 ¿Qué es GraficsIP?

**GraficsIP** es un proyecto educativo que mejora la experiencia de aprendizaje del IPBook mediante visualizaciones interactivas, simuladores en tiempo real y herramientas prácticas integradas directamente en el contenido del libro.

### 🎯 Objetivos

- **🎮 Aprendizaje Interactivo**: Convertir conceptos teóricos en experiencias prácticas
- **📊 Visualización en Tiempo Real**: Ver los resultados de las funciones y algoritmos instantáneamente
- **🔗 Integración Perfecta**: Embeber visualizaciones directamente en GitBook/Moodle/LMS
- **📱 Accesibilidad Universal**: Responsive y compatible con todos los dispositivos

## 🚀 Acceso Rápido

| 🎯 Opción               | 📝 Descripción                      | 🔗 Enlace                                                                                                      |
| ----------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **🎯 Portal Principal** | Página principal con navegación     | [Abrir Portal](https://chusitooxduwu.github.io/graficsIP/)                                                     |
| **📚 Libro Mejorado**   | IPBook completo con visualizaciones | [Ver Libro](https://chusitooxduwu.github.io/graficsIP/ipbook-enhanced-built/portada.html)                      |
| **🧮 Math Explorer**    | Explorador del módulo Math          | [Usar Math](https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/math-module-explorer.html)         |
| **🎲 Módulo Random**    | Simuladores de aleatoriedad         | [Explorar Random](https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/random-module-explorer.html) |

## 📖 Contenido del Proyecto

### 🎯 Visualizaciones Individuales (`/visualizations/`)

#### Nivel 2 - Tomando Decisiones

- **🧮 Explorador del Módulo Math**

  - Calculadora interactiva para funciones matemáticas
  - Conversor de ángulos (grados ↔ radianes)
  - Showcase de constantes (π, e, inf, nan)
  - Ejercicios prácticos integrados

- **🎲 Explorador del Módulo Random**
  - Simulador de dados con estadísticas
  - Generador de números aleatorios personalizable
  - Visualización de distribución normal
  - Histogramas interactivos en tiempo real

### 📚 Libro IPBook Completo (`/ipbook-enhanced/`)

- **✅ Contenido Original**: Todo el IPBook original preservado
- **🎮 Visualizaciones Integradas**: Embebidas en contexto
- **🔗 Navegación Fluida**: Entre teoría y práctica
- **📱 Experiencia Responsive**: Optimizada para todos los dispositivos

### 📄 Referencia Original (`/ipbook-original/`)

- **📚 IPBook Original**: Copia completa del libro oficial
- **🔍 Comparación**: Para ver las mejoras implementadas
- **👨‍🏫 Educadores**: Base para desarrollos adicionales

## 🛠️ Para Desarrolladores

### 🚀 Instalación y Configuración

```bash
# Clonar el repositorio
git clone https://github.com/ChusitooXDuwu/graficsIP.git
cd graficsIP

# Para construir el libro mejorado (requiere Python)
pip install jupyter-book
python build-enhanced-book.py build

# Para servir localmente
python build-enhanced-book.py serve
```

### 📁 Estructura del Proyecto

```
graficsIP/
├── 📁 visualizations/           # Visualizaciones individuales
│   ├── nivel1/                  # Conceptos básicos
│   └── nivel2/                  # Decisiones y módulos
├── 📁 ipbook-enhanced/          # Libro completo mejorado
├── 📁 ipbook-original/          # Libro original (referencia)
├── 📁 shared/                   # Recursos compartidos
│   ├── css/                     # Estilos comunes
│   └── js/                      # Utilities JavaScript
├── 📁 config/                   # Configuraciones
├── 📁 docs/                     # Documentación
├── 📁 .github/workflows/        # GitHub Actions
├── 🔧 build-enhanced-book.py    # Script de construcción
├── 📋 INTEGRACION-IPBOOK.md     # Guía de integración
└── 📖 README.md                 # Este archivo
```

### 🔧 Scripts Disponibles

| Script                         | Descripción              |
| ------------------------------ | ------------------------ |
| `build-enhanced-book.py check` | Verificar prerrequisitos |
| `build-enhanced-book.py build` | Construir libro mejorado |
| `build-enhanced-book.py serve` | Servir localmente        |

### 🚀 GitHub Actions

- **Auto-deploy**: Despliega automáticamente en GitHub Pages
- **Build del libro**: Construye el libro mejorado en cada push
- **Testing**: Verifica que todas las visualizaciones funcionen

## 📋 Integración en GitBook/LMS

### 🔗 Embeds para GitBook

```markdown
{%embed url="https://chusitooxduwu.github.io/graficsIP/visualizations/nivel2/math-module-explorer.html" %}
Explora las funciones del módulo math de Python
{%endembed%}
```

### 🌐 URLs Estables

Todas las visualizaciones tienen URLs permanentes:

- `https://chusitooxduwu.github.io/graficsIP/visualizations/[nivel]/[nombre].html`
- Compatibles con iframe, embed, y enlaces directos
- Sin dependencias externas, funcionan offline

### 📊 Características Técnicas

- ✅ **Responsive Design**: Móvil y desktop
- ✅ **No requiere plugins**: HTML/CSS/JavaScript puro
- ✅ **Carga rápida**: Recursos optimizados
- ✅ **Accesible**: Cumple estándares web
- ✅ **SEO friendly**: Meta tags optimizadas

## 🎯 Uso Educativo

### 👨‍🏫 Para Profesores

- **🎥 Demostraciones en vivo**: Durante las clases
- **📝 Ejercicios prácticos**: Los estudiantes experimentan directamente
- **🔗 Integración LMS**: En Moodle, Canvas, Blackboard, etc.
- **📊 Evaluaciones**: Verificación visual de conceptos

### 🎓 Para Estudiantes

- **🎮 Aprendizaje interactivo**: Experimenta con parámetros
- **📱 Estudio móvil**: Acceso desde cualquier dispositivo
- **🔄 Práctica repetitiva**: Sin limitaciones de software
- **💡 Comprensión visual**: Conceptos abstractos se vuelven tangibles

## 📊 Estado del Proyecto

| Métrica                     | Valor           | Estado         |
| --------------------------- | --------------- | -------------- |
| **Visualizaciones Activas** | 2               | ✅ Funcionando |
| **Secciones Mejoradas**     | 1 (Sección 2.6) | ✅ Completado  |
| **Libro Completo**          | 1               | ✅ Disponible  |
| **Auto-Deploy**             | GitHub Pages    | ✅ Activo      |
| **Testing**                 | GitHub Actions  | ✅ Activo      |

## 🚀 Roadmap y Próximas Características

### 🎯 Próximas Visualizaciones

- **📊 Nivel 1**: Tipos de datos interactivos
- **🔄 Nivel 2**: Condicionales y diccionarios
- **🔁 Nivel 3**: Loops y listas
- **📈 Nivel 4**: Matrices y librerías

### 🛠️ Mejoras Técnicas

- **🔍 Búsqueda global**: Buscar en todo el contenido
- **🎨 Temas personalizables**: Modo oscuro/claro
- **📊 Analytics**: Métricas de uso educativo
- **🌐 Internacionalización**: Múltiples idiomas

## 🤝 Contribuir

### 🎯 Formas de Contribuir

1. **🐛 Reportar bugs**: Crear issues detallados
2. **💡 Sugerir características**: Nuevas visualizaciones
3. **🔧 Código**: Pull requests con mejoras
4. **📚 Documentación**: Mejorar guías y ejemplos
5. **🎨 Diseño**: Mejoras de UI/UX

### 📋 Proceso de Contribución

```bash
# 1. Fork del repositorio
git fork https://github.com/ChusitooXDuwu/graficsIP

# 2. Crear rama para tu feature
git checkout -b feature/nueva-visualizacion

# 3. Hacer cambios y commit
git commit -m "Add: Nueva visualización para listas"

# 4. Push y crear Pull Request
git push origin feature/nueva-visualizacion
```

## 📄 Licencia y Créditos

### 📚 IPBook Original

- **Autores**: Mario Sánchez & Equipo CUPI2
- **Universidad**: Universidad de los Andes
- **Repositorio**: [cupi2-ip/IPBook](https://github.com/cupi2-ip/IPBook)

### 🎮 Visualizaciones Interactivas

- **Desarrollador**: ChusitooXDuwu
- **Licencia**: Educativa - Uso libre para fines académicos
- **Repositorio**: [ChusitooXDuwu/graficsIP](https://github.com/ChusitooXDuwu/graficsIP)

## 🔗 Enlaces Importantes

- 🌐 **Portal Principal**: https://chusitooxduwu.github.io/graficsIP/
- 📚 **IPBook Original**: https://cupi2-ip.github.io/IPBook/
- 💻 **Repositorio**: https://github.com/ChusitooXDuwu/graficsIP
- 📋 **Issues**: https://github.com/ChusitooXDuwu/graficsIP/issues
- ⭐ **Stars**: ¡Dale star si te gusta el proyecto!

---

**🎯 Misión**: Hacer que el aprendizaje de programación sea más visual, interactivo y accesible para todos los estudiantes.

**📧 Contacto**: Crear un issue para preguntas, sugerencias o colaboraciones.
