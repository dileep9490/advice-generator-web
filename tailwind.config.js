/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontSize:{
			base : "1.75rem",
		},
		colors:{
			'light-cyan':"#cee3e9",
			'neon-green':"#52ffa8",
			'grayish-blue':"#4e5d73",
			'dark-grayish-blue':"#323a49",
			'dark-blue':"#1f2632"
		},
		extend: {
			fontFamily: {
				manrope: ["Manrope", "sans-serif"],
			},
		},
	},
	plugins: [],
};
