// Image optimization utilities
import hydroponicsImg from '../assets/images/Hydroponics Farming.jpg';
import cabbageImg from '../assets/images/Cabbage.jpg';
import lettuceImg from '../assets/images/Lettuce.jpg';
import deliveryImg from '../assets/images/Delivery.jpg';

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
 * Image configuration for hero slideshow with dynamic content
 */
export const heroImages = [
  {
    id: 1,
    name: 'Hydroponics Farming',
    src: hydroponicsImg,
    alt: 'Modern hydroponics farming system with fresh green vegetables',
    placeholder: generatePlaceholder('hydroponics'),
    title: 'Revolutionary Hydroponic',
    subtitle: 'Farming Technology',
    description: 'Experience the future of agriculture with our innovative soil-free farming systems that produce healthier, fresher vegetables year-round.',
  },
  {
    id: 2,
    name: 'Fresh Cabbage',
    src: cabbageImg,
    alt: 'Fresh organic cabbage from Peterson Hydroponics',
    placeholder: generatePlaceholder('cabbage'),
    title: 'Farm Fresh Organic',
    subtitle: 'Vegetables Daily',
    description: 'Discover the crisp, vibrant taste of our organically grown cabbage and leafy greens, harvested at peak freshness for maximum nutrition.',
  },
  {
    id: 3,
    name: 'Lettuce',
    src: lettuceImg,
    alt: 'Crisp lettuce grown using sustainable hydroponic methods',
    placeholder: generatePlaceholder('lettuce'),
    title: 'Premium Quality Lettuce',
    subtitle: 'Grown With Care',
    description: 'Enjoy pesticide-free, nutrient-rich lettuce grown in our controlled hydroponic environment. Perfect for salads and healthy meals.',
  },
  {
    id: 4,
    name: 'Delivery',
    src: deliveryImg,
    alt: 'Fast and reliable delivery of fresh organic produce',
    placeholder: generatePlaceholder('delivery'),
    title: 'Fast & Reliable',
    subtitle: 'Delivery Service',
    description: 'Get farm-fresh produce delivered straight to your doorstep. We ensure quality and freshness with every order, every time.',
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
