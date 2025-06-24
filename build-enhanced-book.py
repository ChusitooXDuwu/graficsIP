#!/usr/bin/env python3
"""
Script para construir el libro IPBook mejorado con visualizaciones interactivas
"""
import subprocess
import sys
import os
from pathlib import Path

def run_command(command, description=""):
    """Ejecutar un comando y mostrar el resultado"""
    if description:
        print(f"🔧 {description}...")
    
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description or 'Comando'} completado exitosamente")
        return result
    except subprocess.CalledProcessError as e:
        print(f"❌ Error en {description or 'comando'}:")
        print(f"   Comando: {command}")
        print(f"   Error: {e.stderr}")
        return None

def check_requirements():
    """Verificar que jupyter-book esté instalado"""
    print("🔍 Verificando prerrequisitos...")
    
    try:
        subprocess.run(["jupyter-book", "--version"], check=True, capture_output=True)
        print("✅ jupyter-book está instalado")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("❌ jupyter-book no está instalado")
        print("   Instala con: pip install jupyter-book")
        return False

def build_book():
    """Construir el libro mejorado"""
    book_dir = Path("ipbook-enhanced")
    
    if not book_dir.exists():
        print(f"❌ El directorio {book_dir} no existe")
        return False
    
    # Cambiar al directorio del libro
    original_dir = os.getcwd()
    os.chdir(book_dir)
    
    try:
        # Limpiar build anterior
        run_command("jupyter-book clean .", "Limpiando build anterior")
        
        # Construir el libro
        result = run_command("jupyter-book build .", "Construyendo el libro mejorado")
        
        if result:
            print("\n🎉 ¡Libro construido exitosamente!")
            print(f"📖 Archivo principal: {book_dir}/_build/html/index.html")
            print(f"🔗 Para ver localmente: file://{os.path.abspath('_build/html/index.html')}")
            return True
        else:
            return False
            
    finally:
        os.chdir(original_dir)

def serve_book():
    """Servir el libro localmente"""
    book_dir = Path("ipbook-enhanced/_build/html")
    
    if not book_dir.exists():
        print("❌ El libro no ha sido construido. Ejecuta primero la construcción.")
        return False
    
    print("🌐 Sirviendo el libro localmente...")
    print("📍 URL: http://localhost:8000")
    print("⚠️  Presiona Ctrl+C para detener el servidor")
    
    original_dir = os.getcwd()
    os.chdir(book_dir)
    
    try:
        subprocess.run([sys.executable, "-m", "http.server", "8000"], check=True)
    except KeyboardInterrupt:
        print("\n🛑 Servidor detenido")
    finally:
        os.chdir(original_dir)

def main():
    """Función principal"""
    print("📚 Constructor del IPBook Mejorado")
    print("=" * 50)
    
    if len(sys.argv) > 1:
        action = sys.argv[1]
    else:
        print("Acciones disponibles:")
        print("  build  - Construir el libro")
        print("  serve  - Servir el libro localmente")
        print("  check  - Verificar prerrequisitos")
        action = input("\n¿Qué acción deseas realizar? (build/serve/check): ").strip().lower()
    
    if action == "check":
        if check_requirements():
            print("✅ Todos los prerrequisitos están instalados")
        else:
            print("❌ Faltan prerrequisitos")
            
    elif action == "build":
        if not check_requirements():
            return
        
        success = build_book()
        if success:
            print("\n🚀 El libro está listo!")
            serve_option = input("¿Quieres servirlo localmente ahora? (y/n): ").strip().lower()
            if serve_option == 'y':
                serve_book()
                
    elif action == "serve":
        serve_book()
        
    else:
        print("❌ Acción no reconocida. Usa: build, serve, o check")

if __name__ == "__main__":
    main() 