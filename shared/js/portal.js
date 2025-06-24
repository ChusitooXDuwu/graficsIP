// Portal principal - Lógica de navegación y carga dinámica

document.addEventListener('DOMContentLoaded', async function() {
    console.log('🎯 Cargando portal IPBook Visualizations...');
    
    // Cargar configuración de navegación
    const navigation = await IPBookUtils.loadJSON('config/navigation.json');
    
    if (navigation) {
        renderLevels(navigation.levels);
    } else {
        console.warn('No se pudo cargar la configuración de navegación');
        renderDefaultLevels();
    }
});

function renderLevels(levels) {
    const container = document.getElementById('levels-container');
    
    levels.forEach(level => {
        const levelCard = createLevelCard(level);
        container.appendChild(levelCard);
    });
}

function createLevelCard(level) {
    const card = IPBookUtils.createElement('div', `level-card level-${level.id}`);
    
    card.innerHTML = `
        <div class="level-header">
            <div class="level-icon" style="background: ${level.color}">${level.number || level.id.slice(-1)}</div>
            <div>
                <div class="level-title">${level.title}</div>
                <div class="level-subtitle">${level.subtitle || ''}</div>
            </div>
        </div>
        <div class="level-description">${level.description}</div>
        <ul class="visualizations-list">
            ${level.visualizations.map(viz => createVizItem(viz, level.id)).join('')}
        </ul>
    `;
    
    return card;
}

function createVizItem(viz, levelId) {
    const statusClass = `status-${viz.status}`;
    const statusText = {
        'ready': 'Listo',
        'wip': 'En progreso', 
        'planned': 'Planeado'
    };
    
    return `
        <li class="viz-item" onclick="openVisualization('${levelId}/${viz.file}')">
            <div class="viz-icon">${viz.icon || '📊'}</div>
            <div class="viz-info">
                <div class="viz-name">${viz.title}</div>
                <div class="viz-desc">${viz.description || ''}</div>
            </div>
            <span class="status-badge ${statusClass}">${statusText[viz.status]}</span>
        </li>
    `;
}

function openVisualization(path) {
    const fullPath = `visualizations/${path}`;
    window.open(fullPath, '_blank');
}

function renderDefaultLevels() {
    // Renderizado por defecto si no hay configuración
    const container = document.getElementById('levels-container');
    container.innerHTML = `
        <div class="level-card">
            <h3>Nivel 1 - Conceptos Básicos</h3>
            <p>Las visualizaciones se cargarán aquí una vez configuradas.</p>
        </div>
    `;
} 