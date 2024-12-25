// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Alazar',
      social: {
        github: 'https://github.com/pseudorandomwalker',
      },
      sidebar: [
        {
          label: 'Posts',
          autogenerate: { directory: 'posts' },
        },
        {
          label: 'Projects',
          items: [
            { label: 'Rule 110', link: '/projects/rule110' },
          ],
        },
      ],
      customCss: [
        // Our custom styles
        './src/styles/custom.css',
      ],
    }),
  ],
});