/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'orbital': 'orbital 4s linear infinite',
        'orb-pulse': 'orbPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'typewriter': 'typewriter 1.5s steps(40) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
      },
      keyframes: {
        orbital: {
          '0%': { 
            transform: 'rotate(0deg) translateX(40px) rotate(0deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'rotate(360deg) translateX(40px) rotate(-360deg)',
            opacity: '0.3'
          },
        },
        orbPulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '1',
            boxShadow: '0 0 20px 10px rgba(34, 211, 238, 0.1)'
          },
          '50%': { 
            transform: 'scale(1.1)',
            opacity: '0.8',
            boxShadow: '0 0 30px 15px rgba(34, 211, 238, 0.2)'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)'
          },
        },
        slideIn: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        typewriter: {
          from: {
            width: '0'
          },
          to: {
            width: '100%'
          },
        },
        fadeIn: {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
      },
    },
  },
  plugins: [],
}