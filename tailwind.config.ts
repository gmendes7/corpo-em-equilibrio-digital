
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	safelist: [
		"bg-verde-escuro",
		"bg-marrom-escuro", 
		"bg-marrom-medio",
		"bg-cinza-escuro",
		"bg-cinza-medio",
		"bg-branco-puro",
		"bg-cinza-claro", 
		"hover:bg-verde-escuro",
		"hover:bg-marrom-escuro",
		"hover:bg-primary",
		"text-verde-escuro",
		"text-marrom-escuro",
		"text-cinza-escuro",
		"text-primary",
		"border-borda-escura",
		"after:bg-verde-escuro",
		"shadow-suave",
		"shadow-media",
		"rounded-2xl",
		"rounded-3xl"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Design System Cores Escuras Profissionais
				'verde-escuro': {
					DEFAULT: 'hsl(var(--verde-escuro))', // #1B4332
				},
				'marrom-escuro': {
					DEFAULT: 'hsl(var(--marrom-escuro))', // #3C2414
				},
				'marrom-medio': {
					DEFAULT: 'hsl(var(--marrom-medio))', // #654321
				},
				'cinza-escuro': {
					DEFAULT: 'hsl(var(--cinza-escuro))', // #595959
				},
				'cinza-medio': {
					DEFAULT: 'hsl(var(--cinza-medio))', // #808080
				},
				'branco-puro': {
					DEFAULT: 'hsl(var(--branco-puro))', // #FFFFFF
				},
				'cinza-claro': {
					DEFAULT: 'hsl(var(--cinza-claro))', // #f8f8f8
				},
				'borda-escura': {
					DEFAULT: 'hsl(var(--borda-escura))', // #c8c8c8
				},
			},
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				lato: ['Lato', 'sans-serif'],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'3xl': '1.875rem',
			},
			boxShadow: {
				'suave': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'media': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.04)',
				'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(3deg)' },
				},
				'gentle-sway': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(-5%)' },
					'50%': { transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'gentle-sway': 'gentle-sway 7s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
			},
			backgroundImage: {
				'leaf-pattern': "url('/leaf-bg.png')",
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--azul-escuro)), hsl(var(--azul-escuro)/0.8))',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
