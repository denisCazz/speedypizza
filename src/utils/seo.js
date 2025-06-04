// Configurazione SEO centralizzata per Speedy Pizza
export const SEO_CONFIG = {
  SITE_URL: 'https://speedy-pizza.it',
  SITE_NAME: 'Speedy Pizza',
  SITE_DESCRIPTION: 'Speedy Pizza - La migliore pizza a Carmagnola, direttamente a casa tua o da gustare da noi in Via Valobra. Ordina online per consegna a domicilio o ritiro.',
  
  // Informazioni azienda
  BUSINESS: {
    name: 'Speedy Pizza',
    address: {
      street: 'Via Valobra',
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
  
  // Meta tag predefiniti
  DEFAULT_KEYWORDS: [
    'pizza',
    'pizzeria',
    'Carmagnola',
    'Via Valobra',
    'Speedy Pizza',
    'domicilio',
    'asporto',
    'consegna',
    'ordine online',
    'pizza italiana',
    'pizza napoletana',
    'pizza margherita',
    'pizza quattro stagioni',
    'pizza marinara'
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
