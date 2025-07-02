import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HYDROKKEN - Natural Hydrogen Token',
    short_name: 'HYDROKKEN',
    description:
      "World's first tokenized natural hydrogen investment platform. Invest in clean energy's future through HDKN tokens.",
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    //  {
    //   "src": "/web-app-manifest-192x192.png",
    //   "sizes": "192x192",
    //   "type": "image/png",
    //   "purpose": "maskable"
    // },
    // {
    //   "src": "/web-app-manifest-512x512.png",
    //   "sizes": "512x512",
    //   "type": "image/png",
    //   "purpose": "maskable"
    // }
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['finance', 'business', 'productivity'],
  };
}
