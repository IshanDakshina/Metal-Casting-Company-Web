export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  useCases: string[]
  image: string
}

export const products: Product[] = [
  {
    slug: 'manhole-covers',
    name: 'Manhole Covers',
    tagline: 'Strong, durable covers built for roads, drainage and utility access',
    description:
      'Manufactured in standard and custom sizes, our manhole covers are built for strength, durability and reliable everyday use, with custom frames, diameters and lettering available on request.',
    useCases: [
      'Municipal drainage and sewer access points',
      'Road and utility infrastructure',
      'Housing and construction projects',
    ],
    image:
      '/images/manholes_img.png',
  },

  {
    slug: 'mechanical-machine-parts',
    name: 'Mechanical Machine Parts',
    tagline: 'Reliable cast components made for industrial machinery',
    description:
      'We produce mechanical machine parts from customer drawings, dimensions or sample parts, making replacement and custom components for a wide range of machinery and equipment.',
    useCases: [
      'Replacement parts for industrial machinery',
      'Machine housings and brackets',
      'Custom components for equipment repairs',
    ],
    image:
      '/images/machine_parts.jpg',
  },

  {
    slug: 'gym-weight-plates',
    name: 'Gym Weight Plates',
    tagline: 'Heavy-duty cast iron plates made for serious training',
    description:
      'Durable cast iron weight plates produced for gyms, fitness centers and home training, with different weights and custom requirements available.',
    useCases: [
      'Commercial gyms and fitness centers',
      'Home gyms and personal training',
      'Custom weight plate requirements',
    ],
    image:
      '/images/gym_plates.jpeg',
  },

  {
    slug: 'metal-pipes',
    name: 'Metal Pipes',
    tagline: 'Strong cast pipes for water, drainage and utility applications',
    description:
      'Cast metal pipes and fittings made in a range of sizes for water supply, drainage, agricultural and general utility applications.',
    useCases: [
      'Water supply systems',
      'Drainage and stormwater systems',
      'Agricultural and general utility applications',
    ],
    image:
      '/images/metal_pipes.png',
  },

  {
    slug: 'sand-casting-models',
    name: 'Sand Casting Models',
    tagline: 'Patterns and models made for accurate, repeatable casting',
    description:
      'We produce sand casting models and patterns based on your drawings, dimensions or existing parts for both new and repeat production work.',
    useCases: [
      'Patterns for repeat production',
      'Prototype casting models',
      'Pattern modification and refurbishment',
    ],
    image:
      '/images/sand_cast.jpg',
  },

  {
    slug: 'custom-orders',
    name: 'Custom Orders',
    tagline: 'Custom castings made to your exact requirements',
    description:
      'Have a specific part or product in mind? Send us your drawing, dimensions or sample and we can produce the casting to your required specifications.',
    useCases: [
      'One-off and small-batch castings',
      'Custom sizes and specifications',
      'Replacement parts from samples or drawings',
    ],
    image:
      '/images/custom_model.png',
  },
];
