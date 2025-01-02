/** @type {import('tailwindcss').Config} */
export default {
  content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
          "*"
          ],
  theme: {
    extend: {
      keyframes: {
            blobAnimation: {
                '33%': { top: '29%', left: '9%' },
                '67' : { bottom: '29%', right: '60%' }
            },
        },
        animation: {
            blob: 'blobAnimation 3s linear infinite',
        },
    },
    screens: {
      phone: '520px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  
  plugins: [],
}

