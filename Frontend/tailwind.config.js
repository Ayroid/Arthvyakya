// Exporting the configuration object as the default export.
export default {
  // Content paths for Tailwind CSS analysis.
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  // Specifying dark mode settings.
  darkMode: "class",
  // Extending theme configurations.
  theme: {
    extend: {},
  },
  // Defining plugins used in the Tailwind CSS configuration.
  plugins: [],
};
