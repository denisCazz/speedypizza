// Configurazione SEO centralizzata per Speedy Pizza Carmagnola
export const SEO_CONFIG = {
  SITE_URL: 'https://speedy-pizza.it',
  SITE_NAME: 'Speedy Pizza Carmagnola',
  SITE_DESCRIPTION: 'Speedy Pizza Carmagnola - Pizzeria d\'asporto e consegna a domicilio in Via Valobra 117/119. Le migliori pizze artigianali di Carmagnola con ingredienti freschi e di qualità.',
  
  // Google Maps link per navigazione
  MAPS_URL: 'https://maps.app.goo.gl/8r3y5hEpqaVSTpEW8',
  
  // Informazioni azienda
  BUSINESS: {
    name: 'Speedy Pizza Carmagnola',
    address: {
      street: 'Via Valobra 117/119',
      city: 'Carmagnola',
      region: 'Piemonte',
      postalCode: '10022',
      country: 'IT'
    },
    coordinates: {
      latitude: 44.8514,
      longitude: 7.7164
    },
    phone: '+390119712328',
    priceRange: '€€',
    cuisine: ['Italian', 'Pizza'],
    services: {
      delivery: true,
      takeaway: true,
      reservation: false
    },
    hours: [
      {
        days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        open: '18:00',
        close: '23:00'
      }
    ]
  },
  
  // Meta tag predefiniti - Focus Carmagnola
  DEFAULT_KEYWORDS: [
    'pizza Carmagnola',
    'pizzeria Carmagnola',
    'Speedy Pizza Carmagnola',
    'pizza asporto Carmagnola',
    'pizza domicilio Carmagnola',
    'consegna pizza Carmagnola',
    'Via Valobra Carmagnola',
    'pizzeria Via Valobra',
    'ordine pizza Carmagnola',
    'pizza artigianale Carmagnola',
    'migliore pizza Carmagnola',
    'pizza Torino sud',
    'pizza vicino a me Carmagnola'
  ],
  
  // Immagini SEO
  DEFAULT_OG_IMAGE: '/pizza.webp',
  LOGO_IMAGE: '/logo.jpeg',
  
  // Social media
  SOCIAL: {
    facebook: 'https://facebook.com/speedypizza',
    instagram: 'https://instagram.com/speedypizza',
    whatsapp: 'https://wa.me/390119712328'
  }
};

// Funzioni helper per SEO
export function generatePageTitle(pageTitle) {
  if (!pageTitle || pageTitle === SEO_CONFIG.SITE_NAME) {
    return SEO_CONFIG.SITE_NAME;
  }
  return `${pageTitle} | ${SEO_CONFIG.SITE_NAME}`;
}

export function generateCanonicalUrl(path) {
  return `${SEO_CONFIG.SITE_URL}${path.startsWith('/') ? path : '/' + path}`;
}

export function generateImageUrl(imagePath) {
  return `${SEO_CONFIG.SITE_URL}${imagePath.startsWith('/') ? imagePath : '/' + imagePath}`;
}
