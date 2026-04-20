# Portfolio Assets

Sube las fotos de cada cliente en su carpeta correspondiente.

## Estructura

- `protagonico/` — Fotos de Protagónico
- `clinica-dental/` — Clínica Dental Anónima
- `cliente-3/` — (pendiente nombre)
- `cliente-4/` — (pendiente nombre)

## Cómo agregar fotos

Cada carpeta debe tener al menos un archivo llamado `cover.jpg` (imagen principal que se muestra en el portfolio).

Tamaño recomendado:
- Cover: 800×1200px (aspect ratio 2:3 o 4:5)
- Formato: JPG o WebP (comprimido)
- Peso: <300KB por imagen

## Cómo subir

### Opción 1: Desde GitHub web
1. Ve a https://github.com/dylangebhard-agencia/agencia-web-/tree/claude/github-integration-setup-9uFyi/assets/portfolio
2. Abre la carpeta del cliente (ej. `protagonico/`)
3. Clic en "Add file" → "Upload files"
4. Arrastra tu `cover.jpg`
5. Commit

### Opción 2: Git local
```bash
git add assets/portfolio/protagonico/cover.jpg
git commit -m "add protagonico portfolio image"
git push
```

## Si no hay imagen

El HTML detecta automáticamente si no existe `cover.jpg` y muestra un placeholder con gradiente + nombre de la marca. Así la página nunca se ve rota.
