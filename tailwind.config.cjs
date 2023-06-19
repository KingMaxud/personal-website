/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         colors: {
            'lighter-gray': '#595959',
            turquoise: '#187375',
            'rusty-red': '#AB5232',
            'pinkish-beige': '#DCC6C8',
            'main-bg': '#FAF2F0',
         },
         fontFamily: {
            mono: ['IBM Plex Mono', 'monospace'],
            'playfair-display': ['Playfair Display', 'serif'],
         },
         backgroundImage: {
            bgMd: "url('https://media.graphassets.com/output=format:jpg/IqmY4WjS1iIqlE4pHNgO')",
            bg: 'url(https://media.graphassets.com/output=format:jpg/resize=height:600,fit:max/z1v1F2aGStSpErESErQu)',
         },
         boxShadow: {
            custom:
               'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
         },
         gridTemplateColumns: {
            skills: 'repeat(auto-fit, 80px)',
            skillsSm: 'repeat(auto-fit, 96px)',
            projectMd: 'min-content auto',
         },
         screens: {
            '3xl': '1920',
            '4xl': '2560',
         },
      },
   },
   plugins: [],
}
