# Script para inicializar Git y preparar el proyecto para GitHub
Write-Host "🚀 Configurando Git para IPBook Visualizations..." -ForegroundColor Green

# Inicializar repositorio Git
Write-Host "📁 Inicializando repositorio Git..." -ForegroundColor Yellow
git init

# Agregar todos los archivos
Write-Host "📄 Agregando archivos al staging..." -ForegroundColor Yellow
git add .

# Commit inicial
Write-Host "💾 Creando commit inicial..." -ForegroundColor Yellow
git commit -m "🎉 Initial commit: IPBook Visualizations project structure

- Portal principal con navegación dinámica
- Estilos CSS comunes y responsivos
- JavaScript utilities para reutilización
- 2 visualizaciones de ejemplo (tipos de datos y append)
- Configuración de navegación JSON
- Documentación de integración con GitBook
- Estructura completa del proyecto"

Write-Host ""
Write-Host "✅ Proyecto configurado exitosamente!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Próximos pasos:" -ForegroundColor Cyan
Write-Host "1. Crear repositorio en GitHub: https://github.com/new" -ForegroundColor White
Write-Host "2. Agregar remote: git remote add origin https://github.com/chusitooxduwu/ipbook-visualizations.git" -ForegroundColor White
Write-Host "3. Hacer push: git push -u origin main" -ForegroundColor White
Write-Host "4. Activar GitHub Pages en Settings > Pages" -ForegroundColor White
Write-Host "5. Probar localmente: python -m http.server 8000" -ForegroundColor White
Write-Host ""
Write-Host "🔗 URLs para GitBook:" -ForegroundColor Cyan
Write-Host "• Portal: https://chusitooxduwu.github.io/ipbook-visualizations/" -ForegroundColor White
Write-Host "• Tipos: https://chusitooxduwu.github.io/ipbook-visualizations/visualizations/nivel1/data-types-explorer.html" -ForegroundColor White
Write-Host "• Append: https://chusitooxduwu.github.io/ipbook-visualizations/visualizations/nivel1/append-demo.html" -ForegroundColor White 