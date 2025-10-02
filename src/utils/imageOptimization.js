// Image optimization utilities

/**
 * Generate tiny placeholder for blur-up effect
 * In production, these should be generated during build time
 */
export const generatePlaceholder = (imageName) => {
  // This is a simple gray placeholder
  // In production, use a tool to generate actual tiny thumbnails
  return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3C/svg%3E';
};

/**
 * Image configuration for hero slideshow
 */
export const heroImages = [
  {
    id: 1,
    name: 'Hydroponics Farming',
    src: '/src/assets/images/Hydroponics Farming.jpg',
    alt: 'Modern hydroponics farming system with fresh green vegetables',
    placeholder: generatePlaceholder('hydroponics'),
  },
  {
    id: 2,
    name: 'Fresh Cabbage',
    src: '/src/assets/images/Cabbage.jpg',
    alt: 'Fresh organic cabbage from Peterson Hydroponics',
    placeholder: generatePlaceholder('cabbage'),
  },
  {
    id: 3,
    name: 'Lettuce',
    src: '/src/assets/images/Lettuce.jpg',
    alt: 'Crisp lettuce grown using sustainable hydroponic methods',
    placeholder: generatePlaceholder('lettuce'),
  },
  {
    id: 4,
    name: 'Delivery',
    src: '/src/assets/images/Delivery.jpg',
    alt: 'Fast and reliable delivery of fresh organic produce',
    placeholder: generatePlaceholder('delivery'),
  },
];

/**
 * Preload critical images for better LCP
 */
export const preloadHeroImage = (src) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};
