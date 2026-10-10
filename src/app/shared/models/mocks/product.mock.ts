import { Product } from '../interfaces/product.interface';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Lumina Wireless Headphones',
    price: 199.99,
    category: 'Audio',
    image: 'assets/images/products/headphones.jpeg',
    description: 'Experience pure sonic immersion with state-of-the-art spatial audio and hybrid Active Noise Cancellation. Designed for audiophiles.',
    images: ['assets/images/products/headphones.jpeg', 'assets/images/products/headphones2.jpeg', 'assets/images/products/headphones3.webp']
  },
  {
    id: 2,
    title: 'Smart Watch Pro',
    price: 299.99,
    category: 'Wearables',
    image: 'assets/images/products/watch.jpg',
    description: 'Track your health metrics, monitor sleep patterns, and receive notifications instantly on a brilliant AMOLED display.',
    images: ['assets/images/products/watch.jpg', 'assets/images/products/watch2.webp', 'assets/images/products/watch3.webp']
  },
  {
    id: 3,
    title: 'Ergonomic Mechanical Keyboard',
    price: 149.99,
    category: 'Accessories',
    image: 'assets/images/products/keyboard.png',
    description: 'Engineered for ultimate comfort and tactile precision with hot-swappable switches and customizable RGB backlighting.',
    images: ['assets/images/products/keyboard.png', 'assets/images/products/keyboard2.jpeg', 'assets/images/products/keyboard3.png']
  },
  {
    id: 4,
    title: 'Ultra-HD Gaming Monitor',
    price: 499.99,
    category: 'Displays',
    image: 'assets/images/products/monitor.webp',
    description: 'Crystal-clear 4K resolution, ultra-fast refresh rate, and HDR support for breathtaking gaming and professional workflows.',
    images: ['assets/images/products/monitor.webp', 'assets/images/products/monitor2.webp', 'assets/images/products/monitor3.jpeg']
  },
  {
    id: 5,
    title: 'Studio Microphone Kit',
    price: 129.99,
    category: 'Audio',
    image: 'assets/images/products/microphone.webp',
    description: 'Broadcast-grade condenser microphone with crystal clear vocal pickup, built-in pop filter, and zero-latency monitoring.',
    images: ['assets/images/products/microphone.webp', 'assets/images/products/microphone2.webp', 'assets/images/products/microphone3.jpeg']
  },
  {
    id: 6,
    title: 'Precision Wireless Mouse',
    price: 79.99,
    category: 'Accessories',
    image: 'assets/images/products/mouse.avif',
    description: 'Lightweight ergonomic design, hyper-fast scrolling, and sub-millisecond wireless responsiveness for absolute control.',
    images: ['assets/images/products/mouse.avif', 'assets/images/products/mouse2.webp', 'assets/images/products/mouse3.webp']
  }
];