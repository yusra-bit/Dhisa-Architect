import { Project } from './types';

export const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'Skyline Tower', 
    category: 'Commercial', 
    location: 'New York, NY', 
    year: '2023',
    client: 'Summit Holdings',
    area: '450,000 sq ft',
    description: 'A 40-story mixed-use skyscraper defining the new downtown skyline.',
    detailedDescription: 'Skyline Tower represents the pinnacle of modern vertical living and working. Situated in the heart of the financial district, this 40-story marvel combines high-end retail spaces on the ground floor with premium office suites and luxury residential penthouses above. The design features a distinctive glass façade that reflects the changing colors of the sky, while its structural core utilizes advanced seismic dampening technology. Sustainability was a key driver, resulting in a LEED Platinum certification through the use of photovoltaic glass, rainwater harvesting systems, and smart climate control.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: '2', 
    title: 'Forest Retreat', 
    category: 'Residential', 
    location: 'Aspen, CO', 
    year: '2022',
    client: 'Private Client',
    area: '4,200 sq ft',
    description: 'Sustainable cabin integrated seamlessly with the surrounding nature.',
    detailedDescription: 'The Forest Retreat is a study in harmony between architecture and nature. Designed for a client seeking solitude and connection with the outdoors, the structure is clad in locally sourced charred timber to blend into the pine forest. Large floor-to-ceiling windows dissolve the barrier between inside and out, framing specific views of the Rocky Mountains. The interior utilizes a warm, minimalist palette of oak, concrete, and stone. Passive solar heating and a geothermal heat pump ensure the home remains energy neutral throughout the harsh winters.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: '3', 
    title: 'Urban Loft', 
    category: 'Interior', 
    location: 'Chicago, IL', 
    year: '2021',
    client: 'Tech Entrepreneurs',
    area: '2,800 sq ft',
    description: 'Modern renovation of an industrial space into a warm family home.',
    detailedDescription: 'Located in a converted 1920s warehouse, the Urban Loft project transforms a raw industrial space into a sophisticated family residence. We preserved the original exposed brick walls and heavy timber beams, contrasting them with sleek, matte-black fixtures and custom white oak cabinetry. The layout was reimagined to create an open-concept living area while maintaining private zones for bedrooms. A custom steel staircase serves as a sculptural centerpiece, leading to a mezzanine library. Smart home integration controls lighting and audio, allowing the mood of the vast space to shift instantly.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: '4', 
    title: 'Civic Center', 
    category: 'Public', 
    location: 'Austin, TX', 
    year: '2023',
    client: 'City of Austin',
    area: '25,000 sq ft',
    description: 'A community hub and library focused on accessibility and light.',
    detailedDescription: 'The new Austin Civic Center serves as a beacon of community engagement and education. The design philosophy centers on transparency and accessibility. A soaring atrium acts as the "living room" of the neighborhood, flooded with natural light from skylights filtered by acoustic baffles. The facility includes a digital library, community meeting rooms, an auditorium, and a rooftop garden for public events. The landscaping is designed with xeriscaping principles to minimize water usage, reflecting the local ecology.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: '5', 
    title: 'Coastal Villa', 
    category: 'Residential', 
    location: 'Malibu, CA', 
    year: '2022',
    client: 'Confidential',
    area: '6,500 sq ft',
    description: 'Luxury beachfront property maximizing ocean views and privacy.',
    detailedDescription: 'Perched on the cliffs of Malibu, the Coastal Villa is a masterclass in luxury minimalism. The structure is composed of cantilevered concrete planes that appear to float above the Pacific Ocean. An infinity pool merges visually with the horizon, while retractable glass walls allow the entire living area to become an open-air pavilion. Privacy was paramount, achieved through strategic landscaping and louvered screens that filter light without obstructing views. The interior design features Italian travertine floors and custom walnut joinery.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600596542815-bfad4c1539a9?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: '6', 
    title: 'Tech Hub', 
    category: 'Commercial', 
    location: 'San Francisco, CA', 
    year: '2024',
    client: 'Innovate Inc.',
    area: '120,000 sq ft',
    description: 'Open-concept office space fostering collaboration and innovation.',
    detailedDescription: 'The Tech Hub redefines the modern workplace by prioritizing flexibility and employee well-being. Departing from traditional cubicle farms, the design features agile "neighborhoods" separated by acoustic pods and biophilic green walls. The heart of the building is a central staircase that functions as a social amphitheater for town halls. We utilized smart building technology to monitor air quality and occupancy, automatically adjusting lighting and HVAC for maximum efficiency. The exterior features a kinetic façade that adjusts to the suns angle throughout the day.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&q=80&w=800'
    ]
  },
];