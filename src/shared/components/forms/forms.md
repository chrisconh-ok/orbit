forms/
├── EmailCaptureForm.astro
├── LoginForm.astro
└── ContactForm.astro

Detalle:
	•	EmailCaptureForm.astro:
	•	Podría encapsular un <form> con un <input type="email" /> y <button>, validación, etc.
	•	Está a un “nivel” más alto que un ui/Input.astro, pues este usa Inputs o Buttons internamente.
	•	LoginForm.astro:
	•	Form para usuario/contraseña, en caso de que tu sitio maneje autenticación.
	•	ContactForm.astro:
	•	Similar concepto: un formulario con Nombre, Email, Mensaje, etc.

Estos componentes siguen siendo “genéricos” en el sentido de que podrían ser reutilizados en distintas páginas.