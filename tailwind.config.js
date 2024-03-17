/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionTimingFunction: {
        "opacity-fade-in": "cubic-bezier(.25,.46,.45,.94)"
      },
      screens: {
        'medium-max': {"max": '1080px'},
        'medium-min': {'min': '1080px'},
        'medium-min': {"min": "939.98px"},
        "md-max": {"max": "1024px"},
        "sm-max": {"max": "640px"},
        'xsmall': {"max": "480px"},
        'small': {"max": '768px'},
        'med-small': {"max": "939.98px"},
        'large': {"min": '1400px'}
      },
      boxShadow: {
        "home-button": "0 0 0 1px #e2ecf2,0 4px 10px -4px #e2ecf2,0 2px 6px #0000007f"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        logo: "#f19ab3",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "zoom-out": {
          "0%": {transform: 'scale(1.07)'},
          "100%": {transform: 'scale(1)'}
        },
        "zoom-out-fade-in": {
          "0%": {transform: "scale(1.07)", opacity: "0"},
          "100%": {transform: "scale(1)", opacity: "100"}
        },
        "fade-in": {
          "0%": {opacity: "0"},
          '100%': {opacity: "100"}
        },
        "fade-out": { 
          "0%": {opacity: "100"},
          '100%': {opacity: "0"}
        },
        "fade-in-up": {
          "0%": {transform: "translateY(20px)", opacity: "0"},
          "100%": {transform: "translateY(0)", opacity: "100"}
        },
        "fade-left": {
          "0%": {transform: "translateX(-20px)", opacity: "0"},
          "100%": {transform: "translateX(0)", opacity: "100"}
        },
        "fade-in-down": {
          "0%": {transform: "translateY(-20px)", opacity: "0"},
          "100%": {transform: "translateY(0)", opacity: "100"}
        },
        "fade-out-up": {
          "0%": {transform: "translateY(0)", opacity: "100"},
          "100%": {transform: "translateY(-20px)", opacity: "0"}
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "zoom-out": "zoom-out calc(0.6s * 1.2) cubic-bezier(.65,.05,.36,1) both",
        "zoom-out-fade-in": "zoom-out-fade-in calc(0.6s * 1.3) cubic-bezier(.25,.46,.45,.94) both",
        "fade-in": "fade-in calc(0.6s * 0.8) cubic-bezier(.39,.575,.565,1) both",
        "fade-out": "fade-out calc(0.6s * 0.8) cubic-bezier(.39,.575,.565,1) both",
        "fade-in-up": "fade-in-up calc(0.6s * 0.6) cubic-bezier(.39,.575,.565,1) both",
        "fade-left": "fade-left calc(0.6s * 0.6) cubic-bezier(.39,.575,.565,1) both",
        "fade-in-down": "fade-in-down 200ms cubic-bezier(.25,.46,.45,.94) both",
        "fade-out-up": "fade-out-up 200ms cubic-bezier(.25,.46,.45,.94) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}