import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Sahel MULTISERVICES',
        short_name: 'Sahel MULTI',
        description: 'Leader multiservices au Sahel : Digital & Commerce.',
        start_url: '/',
        display: 'standalone',
        background_color: '#020617', // slate-950
        theme_color: '#d97706', // amber-600
        icons: [
            {
                src: '/sahel-logo-v3.png',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/sahel-logo-v3.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/sahel-logo-v3.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
