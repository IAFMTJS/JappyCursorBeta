# JapVoc by Section

A modular web application for learning Japanese vocabulary, organized into different sections.

## Project Structure

- `src/pages/` - Contains all the main page components
  - `Home.tsx` - Main landing page with navigation to sections
  - `Section1.tsx` - Template for the first section
  - `Section2.tsx` - Template for the second section
  - `Section3.tsx` - Template for the third section
- `src/App.tsx` - Main application component with routing
- `src/index.tsx` - Application entry point

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Development

- Each section is a separate component in the `src/pages` directory
- Use the `Section1.tsx` template as a reference for creating new sections
- The main navigation is handled in `App.tsx`
- Styling is done using Tailwind CSS

## Adding New Sections

1. Create a new component in `src/pages/`
2. Add the route in `App.tsx`
3. Add the section to the sections array in `Home.tsx` 