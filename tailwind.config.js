/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    ],
    theme: {
      extend: {
        colors: {
          memmo: {
            primary: '#0C502D',     // Verde oscuro MEMMO
            secondary: '#ECD037',   // Amarillo brillante MEMMO
            light: '#F9FAFB',       // Fondo claro
            dark: '#111111',        // Fondo oscuro
            text: '#1E1E1E',        // Texto normal
            lightText: '#F4F4F4',   // Texto en modo oscuro
            border: '#E5E7EB'       // Líneas sutiles en modo claro
          }
        }
      }
    },
    plugins: []
  }
  