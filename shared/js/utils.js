// ==============================================
// IPBook Visualizations - Utilidades Comunes
// ==============================================

// Utilidades generales
const IPBookUtils = {
    // Cargar datos JSON
    async loadJSON(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error('Error cargando JSON:', error);
            return null;
        }
    },

    // Crear elemento con clases y contenido
    createElement(tag, classes = '', content = '') {
        const element = document.createElement(tag);
        if (classes) element.className = classes;
        if (content) element.innerHTML = content;
        return element;
    },

    // Formatear código para visualización
    formatCode(code) {
        return code
            .replace(/\n/g, '<br>')
            .replace(/  /g, '&nbsp;&nbsp;')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    },

    // Copiar al portapapeles
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Copiado al portapapeles', 'success');
        } catch (error) {
            this.showNotification('Error al copiar', 'error');
        }
    },

    // Mostrar notificaciones
    showNotification(message, type = 'info', duration = 3000) {
        const notification = this.createElement('div', `notification notification-${type}`, message);
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    },

    // Detectar si es móvil
    isMobile() {
        return window.innerWidth <= 768;
    },

    // Throttle para eventos
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
};

// Componentes reutilizables
const IPBookComponents = {
    // Crear botón de código
    createCodeButton(code, description) {
        const button = IPBookUtils.createElement('button', 'btn code-button', description);
        button.onclick = () => IPBookUtils.copyToClipboard(code);
        return button;
    },

    // Crear demo interactivo
    createDemo(config) {
        const demo = IPBookUtils.createElement('div', 'demo-container');
        const title = IPBookUtils.createElement('h3', 'demo-title', config.title);
        const content = IPBookUtils.createElement('div', 'demo-content', config.content);
        
        demo.appendChild(title);
        demo.appendChild(content);
        
        return demo;
    }
};

// Exportar para uso global
window.IPBookUtils = IPBookUtils;
window.IPBookComponents = IPBookComponents;

console.log('🚀 IPBook Utils cargado correctamente'); 