---
title: 'GitHub Action para Deploy de Astro con SSH/SFTP'
description: 'Automatiza el despliegue de proyectos Astro a cualquier hosting compartido o VPS utilizando SSH o SFTP con RSYNC.'
pubDate: 2025-02-06
image: '/images/resources/deploy-ssh-rsync-action.webp'
downloadUrl: 'https://github.com/chrisconh-ok/deploy-ssh-rsync-action'
fileType: 'code'
fileSize: '4 KB'
featured: true
tags: ['astro', 'github-actions', 'deploy', 'hosting']
---

# 🚀 GitHub Action para Deploy de Astro con SSH/SFTP

Este recurso es un **GitHub Action** diseñado para facilitar y automatizar el despliegue de sitios Astro en cualquier hosting que permita acceso por **SSH o SFTP**. Utiliza **RSYNC** para sincronizar las carpetas generadas durante el proceso de build con tu carpeta de destino en el servidor.

## 🎯 ¿Qué hace este recurso?

- Ejecuta el build de un proyecto Astro.
- Sincroniza automáticamente los archivos del directorio `/dist` con tu servidor remoto.
- Compatible con **hostings compartidos** y **VPS** que soporten SSH/SFTP.

## 🔑 Características principales

- **Automatización completa:** Configura una vez y realiza despliegues con cada push.
- **Compatibilidad universal:** Funciona con cualquier servidor que permita acceso SSH/SFTP.
- **Seguridad:** Soporte para claves SSH y contraseñas protegidas.

## 📥 Descarga

[Accede al GitHub Action aquí](https://github.com/chrisconh-ok/deploy-ssh-rsync-action).

---

## 🛠 Cómo usarlo

1. Configura tu archivo `deploy.yml` en el directorio `.github/workflows` de tu repositorio.
2. Proporciona tus credenciales SSH/SFTP en los **Secrets** de tu repositorio en GitHub.
3. Haz un push y observa cómo se despliega tu sitio automáticamente.

---

**Explora. Aprende. Despliega.** 🚀
