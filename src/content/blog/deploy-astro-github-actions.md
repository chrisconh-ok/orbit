---
title: '¿Cómo Desplegar un Proyecto Astro en un Hosting Compartido con GitHub Actions'
description: 'Guía completa para automatizar el despliegue de proyectos Astro en Hostinger u otros hostings compartidos usando GitHub Actions.'
pubDate: 2025-02-06
image: '/images/blog/como-desplegar-proyecto-astro-github-actions-hosting-compartido.webp'
draft: false
featured: true
tags: ["Astro", "GitHub Actions", "Hosting", "Despliegue"]
---

# 🚀 Cómo Desplegar un Proyecto Astro en un Hosting Compartido con GitHub Actions

En esta guía aprenderás a configurar un proyecto de **Astro** para que cada vez que hagas un **push** a un repositorio de GitHub, **GitHub Actions** ejecute el *build* y envíe automáticamente los archivos generados en `/dist` a un **hosting compartido**, como Hostinger. Sin embargo, este método funciona con cualquier hosting que permita acceso por **SSH**.

---

## 📌 1. Crear un Proyecto Astro

Ejecuta el siguiente comando en la terminal para crear un nuevo proyecto Astro:

```bash
npm create astro@latest
```

Una vez creado, sigue las instrucciones para completar la configuración inicial.

---

## 🌍 2. Configurar el Dominio en `astro.config.mjs`

Abre el archivo `astro.config.mjs` y agrega tu dominio para que Astro lo utilice en la generación de enlaces, sitemap y otros elementos:

```js
// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  compressHTML: true,
  site: "https://tudominio.com", 
});
```

---

## 🛠 3. Conectar Astro con un Repositorio de GitHub

Para automatizar el despliegue, primero debemos conectar nuestro proyecto con un repositorio en GitHub.

### 🔹 Opción 1: Usando el Cliente de GitHub

1. Abre GitHub Desktop.
2. Ve a **Add > Add Existing Repository…**.
3. Selecciona la carpeta raíz del proyecto Astro.
4. Haz clic en **Publish repository**.
5. Desmarca "Keep this code private" y confirma la publicación.

### 🔹 Opción 2: Usando la Terminal

1. Crea un repositorio en [GitHub](https://github.com).
2. Copia la URL del repositorio (`https://github.com/usuario/nombre-repo`).
3. En la terminal, estando en la carpeta del proyecto, ejecuta:

```bash
git remote add origin https://github.com/usuario/nombre-repo
git push -u origin main
```

---

## 🔑 4. Obtener Datos para Conexión SSH en Hostinger

Para usar **SSH**, primero debes habilitar el acceso SSH en tu hosting.

1. Ingresa a tu cuenta de **Hostinger** y selecciona tu hosting.
2. Ve a **Acceso SSH** en la sección de *Avanzado*.
3. Copia los datos de **IP, Puerto, Usuario y Contraseña**.

### 🔹 Generar una Clave SSH

Ejecuta en la terminal:

```bash
ssh-keygen -t rsa -b 4096 -C "tu_correo@example.com"
```

Presiona **Enter** y elige si deseas asignar una contraseña. Esto generará dos archivos:

- **Clave privada:** `~/.ssh/id_rsa` (No la compartas).
- **Clave pública:** `~/.ssh/id_rsa.pub`.

Para copiar la clave al servidor:

```bash
ssh-copy-id usuario@IP_DEL_SERVIDOR
```

Alternativamente, puedes agregarla manualmente desde el panel de administración de Hostinger.

---

## ⚙️ 5. Configurar GitHub Actions

Ahora crearemos un flujo de trabajo de **GitHub Actions** para automatizar el despliegue.

### 🔹 Crear el Archivo `deploy.yml`

1. En tu repositorio de **GitHub**, ve a la pestaña **Actions**.
2. Crea un nuevo workflow y nómbralo `deploy.yml`.
3. Copia y pega la siguiente configuración:

```yaml
name: Deploy Astro to Hostinger
on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
      - name: Install, Build and Upload
        uses: withastro/action@v2
      - name: Upload Build Artifacts
        uses: actions/upload-artifact@v4
        with:
          name: astro-build
          path: ./dist
          
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Download Build Artifacts
        uses: actions/download-artifact@v4
        with:
          name: astro-build
      - name: Deploy via SSH (rsync)
        uses: chrisconh-ok/deploy-ssh-rsync-action@1.0 
        with:
          REMOTE_HOST: ${{ secrets.SSH_SERVER }}
          REMOTE_PORT: ${{ secrets.SSH_PORT }}
          REMOTE_USER: ${{ secrets.SSH_USERNAME }}
          REMOTE_SSH_KEY: ${{ secrets.SSH_SSHKEY }}
          REMOTE_SSH_KEY_PASS: ${{ secrets.SSH_SSHKPASS }}
          REMOTE_PATH: ${{ secrets.SSH_PATH }}
          LOCAL_PATH: /
          RSYNC_OPTIONS: -rvaz --exclude='/prueba/' --delete
```

> **Nota:** La ruta en Hostinger suele ser `/home/usuario/domains/tudominio.com/public_html/`.

---

## 🔒 6. Configurar Secrets en GitHub

Debemos agregar las credenciales del servidor en **GitHub Secrets**:

1. Ve a tu repositorio en [GitHub](https://github.com).
2. Accede a **Settings > Secrets and Variables > Actions**.
3. Agrega los siguientes secretos:

```
SSH_SERVER = IP_DEL_SERVIDOR
SSH_PORT = 22 o el de tu hosting
SSH_USERNAME = usuario
SSH_SSHKEY = contenido de tu id_rsa
SSH_SSHKPASS = contraseña de tu clave SSH
SSH_PATH = /home/usuario/domains/tudominio.com/public_html/
```

---

## 🚀 7. Realizar un Push para Probar el Despliegue

Para verificar que todo funcione correctamente, ejecuta los siguientes comandos:

```bash
git add .
git commit -m "Configuración inicial del despliegue"
git push origin main
```

---

## ✅ 8. Verificar que GitHub Actions se Ejecuta Correctamente

1. Ve a tu repositorio en **GitHub**.
2. Accede a la pestaña **Actions**.
3. Verifica que la acción se ejecuta sin errores.
4. Si todo salió bien, tu sitio estará actualizado automáticamente con cada *push* a `main`.

---

## ℹ️ Conclusión

Con esta configuración, cada vez que actualices tu código y hagas un *push*, **GitHub Actions** se encargará de compilar y subir los archivos generados a tu hosting de manera automática. 🎉

Si necesitas más información sobre SSH en Hostinger, puedes consultar la [guía oficial](https://www.hostinger.com.ar/tutoriales/como-configurar-claves-ssh).

---

Ahora tu sitio de **Astro** está configurado para desplegarse automáticamente con cada actualización. 🚀✨ ¡Feliz programación!
