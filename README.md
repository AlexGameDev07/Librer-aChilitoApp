# Librería Chilito App

Bienvenido a **Librería Chilito App**, una aplicación web para gestionar tu biblioteca personal de libros. Permite agregar, editar, eliminar y listar libros de manera sencilla y visual, con una interfaz moderna, responsiva y soporte para dark mode.

## 🚀 Tecnologías y librerías utilizadas

- React 19 – Librería principal para la interfaz de usuario.
- Vite – Empaquetador y servidor de desarrollo ultrarrápido.
- React Router DOM – Navegación entre páginas.
- React Hook Form – Manejo y validación de formularios.
- React Hot Toast – Notificaciones visuales.
- ESLint – Linter para mantener la calidad del código.
- CSS personalizado – Estilos modernos y dark mode.

## 📁 Estructura del proyecto

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── InputText.jsx
│   │   ├── Label.jsx
│   │   ├── List.jsx
│   │   └── Modal.jsx
│   ├── hooks/
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   └── WelcomePage.jsx
│   ├── utilities/
│   │   └── fetchDataUtility.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── config.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Configuración y ejecución

### 1. Clona el repositorio
```bash
git clone <url-del-repo>
cd frontend
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Variables de entorno

El archivo `.env` ya incluye la URL base de la API:
```
VITE_API_BASE=https://retoolapi.dev/ns36JG
```

### 4. Ejecuta la aplicación en modo desarrollo
```bash
npm run dev
```

La app estará disponible en http://localhost:5173 (o el puerto que indique Vite).

## 📝 Uso

- Al ingresar, verás una página de bienvenida animada.
- Serás redirigido al dashboard donde puedes:
  - Agregar un libro (título, autor, estado, género).
  - Editar o eliminar libros existentes.
  - Recibirás notificaciones visuales para cada acción.
- Puedes alternar entre modo claro y oscuro con el botón en la esquina superior derecha.

## 🛠️ Mantenimiento y buenas prácticas

- El código está modularizado en componentes reutilizables.
- Se utiliza ESLint para mantener la calidad y consistencia.
- Los formularios usan validación con mensajes claros.
- Las peticiones a la API están centralizadas en `fetchDataUtility.jsx` para fácil mantenimiento.
- El diseño es responsive y soporta dark mode.
- Para agregar nuevas páginas o componentes, sigue la estructura actual y reutiliza los componentes base.

## 📚 Detalles clave

- API: Se consume el endpoint público https://retoolapi.dev/ns36JG/libros para CRUD de libros.
- Validación: No permite campos vacíos en los formularios.
- Notificaciones: Se usan para informar al usuario sobre el éxito o error de las operaciones.
- Dark mode: Se puede alternar en cualquier momento.

## 🧑‍💻 Autor y créditos

Desarrollado como ejemplo de gestión de biblioteca personal con React + Vite.
