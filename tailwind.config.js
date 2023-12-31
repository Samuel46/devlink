/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				// devlink
				purple: "hsl(var(--purple))",
				"purple-light": "hsl(var(--purple-light))",
				"purple-hover": "hsl(var(--purple-hover))",

				grey: {
					DEFAULT: "hsl(var(--grey))",
					dark: "hsl(var(--dark-grey))",
					light: "hsl(var(--light-grey))",
				},

				white: "hsl(var(--white))",

				// shad/ui
				border: "hsl(var(--borders))",
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
			},
			fontSize: {
				"heading-m": ["32px", { lineHeight: "150%", fontWeight: 700 }],
				"heading-s": ["16px", { lineHeight: "150%", fontWeight: 600 }],
				"body-m": ["16px", { lineHeight: "150%", fontWeight: 400 }],
				"body-s": ["12px", { lineHeight: "150%", fontWeight: 400 }],
			},

			boxShadow: {
				md: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
				"preview-box": "0px 0px 32px 0px rgba(0, 0, 0, 0.10)",
			},

			gridTemplateRows: {
				layout: "100px minmax(0, 1fr)",
				link: "100px minmax(0, 1fr) 100px",
			},
			gridTemplateColumns: {
				layout: "560px minmax(0, 1fr)",
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
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
