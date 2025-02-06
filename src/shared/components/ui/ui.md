ui/
├── Button.astro
├── Input.astro
├── Checkbox.astro
├── Alert.astro
├── Modal.astro
└── Spinner.astro

Detalle:
	•	Button.astro:
	•	Botón con variantes (primary, secondary, etc.).
	•	Recibe props como onClick, size, icon, etc.
	•	Input.astro:
	•	Campo de texto reutilizable, con estilos propios (rounded corners, etc.).
	•	Opcionalmente maneja validaciones sencillas.
	•	Checkbox.astro / Radio.astro / Toggle.astro:
	•	Controles de formulario específicos.
	•	Alert.astro:
	•	Banner de aviso o error con distintos estilos.
	•	Modal.astro:
	•	Ventana emergente genérica.
	•	Spinner.astro:
	•	Indicador de carga (loading).

Ninguno de estos componentes “asume” dónde se colocan en la página ni da margen exterior. Son piezas atómicas de UI.