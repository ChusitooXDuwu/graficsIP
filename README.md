<<<<<<< HEAD

# 🐍 IPBook Visualizations

Colección interactiva de visualizaciones para el libro "Introducción a la Programación" (IPBook).

## 🚀 Inicio Rápido

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/chusitooxduwu/ipbook-visualizations.git
   cd ipbook-visualizations
   ```

2. **Servir localmente:**

   ```bash
   # Opción 1: Python
   python -m http.server 8000

   # Opción 2: Node.js
   npx serve .

   # Opción 3: Live Server (VS Code)
   # Instala la extensión Live Server y haz clic derecho en index.html
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:8000
   ```

## 📁 Estructura del Proyecto

```
ipbook-visualizations/
├── index.html                    # Portal principal
├── visualizations/               # Todas las visualizaciones
│   ├── nivel1/                  # Conceptos básicos
│   ├── nivel2/                  # Decisiones
│   ├── nivel3/                  # Repeticiones
│   └── nivel4/                  # Matrices y librerías
├── shared/                      # Recursos compartidos
│   ├── css/                     # Estilos comunes
│   ├── js/                      # Scripts reutilizables
│   └── assets/                  # Imágenes, iconos, fuentes
├── templates/                   # Templates para nuevas visualizaciones
├── config/                      # Configuración del proyecto
└── docs/                        # Documentación
```

## 🔗 Integración con GitBook

Para insertar cualquier visualización en GitBook:

```markdown
{% embed url="https://chusitooxduwu.github.io/ipbook-visualizations/visualizations/nivel1/data-types-explorer.html" %}
Descripción de la visualización
{% endembed %}
```

## 🛠️ Desarrollo

### Agregar nueva visualización

1. Copiar template base:

   ```bash
   cp templates/base-template.html visualizations/nivel1/nueva-viz.html
   ```

2. Personalizar contenido

3. Actualizar `config/navigation.json`

4. Probar localmente

### Estructura de archivos recomendada

Cada visualización debe:

- ✅ Usar estilos de `shared/css/common.css`
- ✅ Incluir navegación estándar
- ✅ Ser responsive
- ✅ Incluir código de integración para GitBook

## 📚 Visualizaciones Disponibles

### Nivel 1 - Descubriendo la Programación

- [x] 📊 Explorador de Tipos de Datos
- [x] ➕ Demo de Append
- [ ] 🔄 Flujo de Funciones
- [ ] 🏠 Programa de la Casa

### Nivel 2 - Tomando Decisiones

- [ ] 🎯 Simulador de Condicionales
- [ ] 📖 Explorador de Diccionarios

### Nivel 3 - Repetir Acciones

- [ ] 🔁 Visualizador de Bucles
- [ ] 📋 Operaciones en Listas

### Nivel 4 - Matrices y Librerías

- [ ] 🐼 Explorador de Pandas
- [ ] 📈 Análisis de Datos

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-visualizacion`)
3. Commit cambios (`git commit -am 'Agregar nueva visualización'`)
4. Push al branch (`git push origin feature/nueva-visualizacion`)
5. Crear Pull Request

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para detalles.

## 🎯 Créditos

# Creado para potenciar el aprendizaje del libro IPBook.

# GraficosLibroIP

GraficosLibroIP

> > > > > > > origin/main
