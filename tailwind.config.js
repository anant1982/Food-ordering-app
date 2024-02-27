/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				menuExpand: {
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1)" },
				},
			},
		},
	},
	plugins: [],
};
