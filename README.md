# Personal Portfolio 

## English

### Personal Portfolio - Software Engineering

This project is a personal portfolio built to showcase my skills as a Software Engineering student and developer, focusing not only on technologies, but on software design, architecture, and good engineering practices.

The portfolio is designed to grow over time, allowing new projects to be added while keeping a clean, scalable, and maintainable structure.

Live demo:
https://maicolg-29.github.io

---

### Tech Stack
- **Frontend:** React + TypeScript
- **Routing:** React Router (HashRouter for GitHub Pages compatibility)
- **Build Tool:** Vite
- **Deployment:** GitHub Pages
- **Version Control:** Git & GitHub

---

### Architecture
The project follows a clear separation of responsibilities, inspired by MVC and clean architecture principles:

- **Domain / Model**
  - Strongly typed domain models using TypeScript interfaces.
  - Example: `Project` represents the core entity of the portfolio.

- **Data Layer**
  - Mock data sources (`projects.ts`) that simulate real backend responses.
  - Designed to be easily replaced by an actual API in the future.

- **Presentation Layer**
  - Reusable and focused UI components (e.g. `ProjectCard`).
  - Components receive full domain models instead of fragmented props.

- **Pages / Orchestration**
  - Page-level components (e.g. `Projects`) act as controllers.
  - They orchestrate data flow and delegate rendering to components.

This structure ensures scalability, maintainability, and type safety across the application.

---

### What This Project Demonstrates

This portfolio demonstrates:

- Strong use of TypeScript for domain modeling
- Separation of concerns in frontend architecture
- Reusable and maintainable React components
- Clean data flow between models, views, and pages
- Understanding of SPA routing and GitHub Pages constraints
- Engineering mindset beyond simple UI implementation

---

### Run Locally

To run the project locally:

```
  # Clone the repository
  git clone https://github.com/MaicolG-29/maicolg-29.github.io.git

  # Enter the project folder
  cd maicolg-29.github.io

  # Install dependencies
  npm install

  # Start development server
  npm run dev
```

The app will be available at `http://localhost:5173/#/`

## Español

### Portafolio Personal – Ingeniería de Software

Este proyecto es un portafolio personal creado para mostrar mis habilidades como estudiante y desarrollador en Ingeniería de Sistemas, con un enfoque no solo en las tecnologías, sino en el diseño de software, arquitectura y buenas prácticas.

El portafolio está diseñado para crecer en el tiempo, permitiendo agregar nuevos proyectos manteniendo una estructura limpia, escalable y mantenible.

Demo en vivo:
https://maicolg-29.github.io

---

### Stack Tecnológico
- **Frontend:** React + TypeScript
- **Ruteo:** React Router (HashRouter para compatibilidad con Github Pages)
- **Build Tool:** Vite
- **Despliegue:** GitHub Pages
- **Control de versiones:** Git & GitHub

---

### Arquitectura

El proyecto sigue una separación clara de responsabilidades, inspirada en principios de MVC y arquitectura limpia:

- **Dominio / Modelo**
  - Modelos de dominio fuertemente tipados con TypeScript.
  - Ejemplo: `Project` representa la entidad central del portafolio.

- **Capa de Datos**
  - Fuentes de datos mock (`projects.ts`) que simulan respuestas reales de un backend.
  - Diseñadas para ser reemplazadas fácilmente por una API real.

- Capa de Presentación
  - Componentes reutilizables y enfocados (por ejemplo `ProjectCard`).
  - Los componentes reciben modelos completos en lugar de props fragmentadas.

- Páginas / Orquestación
  - Componentes de página (como `Projects`) actúan como controladores.
  - Orquestan el flujo de datos y delegan el renderizado.

Esta estructura garantiza escalabilidad, mantenibilidad y seguridad de tipos.

---

### Qué Demuestra Este Proyecto

Este portafolio demuestra:

- Uso sólido de TypeScript para modelar el dominio
- Separación de responsabilidades en frontend
- Componentes React reutilizables y mantenibles
- Flujo de datos claro entre modelos, vistas y páginas
- Comprensión del ruteo SPA y las limitaciones de GitHub Pages
- Mentalidad de ingeniería más allá del diseño visual

---

### Ejecutar Localmente

Para ejecutar este proyecto localmente:

```
  # Clonar el repositorio
  git clone https://github.com/MaicolG-29/maicolg-29.github.io.git

  # Entrar al proyecto
  cd maicolg-29.github.io

  # Instalar dependencias
  npm install

  # Levantar servidor de desarrollo
  npm run dev
```

La aplicación estará disponible en `http://localhost:5173/#/`
