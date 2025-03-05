export function getOptions(lng = 'en', ns = 'common') {
    return {
        supportedLngs: ['en', 'fr', 'it'],
        fallbackLng: 'en',
        lng,
        fallbackNS: 'common',
        defaultNS: 'common',
        ns,
    }
} 