/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         colors: {
            'lighter-gray': '#595959',
            turquoise: '#629489',
            'rusty-red': '#AB5232',
            'pinkish-beige': '#DCC6C8',
            'main-bg': '#FAF2F0',
         },
         fontFamily: {
            mono: ['IBM Plex Mono', 'monospace'],
            'playfair-display': ['Playfair Display', 'serif'],
         },
         backgroundImage: {
            man: "url('https://media.discordapp.net/attachments/1008571141507534928/1088799823165149274/KingMaxud_a_beautiful_happy_25-years_old_guy_standing_with_arms_2a1cc476-796e-43ef-8808-f475e8302c22.png?width=390&height=676')",
         },
         boxShadow: {
            custom: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
         },
         gridTemplateColumns: {
            skills: 'repeat(auto-fit, 80px)',
            skillsSm: 'repeat(auto-fit, 96px)',
            projectMd: 'min-content auto'
         },
         screens: {
            '3xl': '1920',
            '4xl': '2560'
         }
      },
   },
   plugins: [],
}
