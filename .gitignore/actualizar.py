import subprocess
from datetime import datetime

# Ruta de tu proyecto
ruta_repo = r"C:\Nueva carpeta (4)\Nueva carpeta (3)\Páginas web\3"

def ejecutar(comando):
    subprocess.run(comando, cwd=ruta_repo, shell=True)

# mensaje automático con fecha
mensaje = f"Actualización automática {datetime.now()}"

# comandos git
ejecutar("git add .")
ejecutar(f'git commit -m "{mensaje}"')
ejecutar("git push")

print("Repositorio actualizado.")
