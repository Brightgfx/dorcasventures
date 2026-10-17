export const SITE = {
  name:     'Dorcas Ventures',
  slogan:   'Home of Quality Plasters',
  phone:    '+233 (0) 000 000 000',
  email:    'info@dorcasventures.com',
  address:  'Accra, Ghana',
  hours:    'Mon – Sat: 8:00am – 6:00pm',
  whatsapp: '233549761031',
};

export const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'About',    href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#whyus' },
  { label: 'Our CEO',  href: '#ceo' },
  { label: 'Ambassador', href: '#ambassador' },
];

export const HERO_IMAGES = [
  { src: '/images/hero1.jpg', alt: 'Geometric POP Ceiling' },
  { src: '/images/hero2.jpg', alt: 'Layered Cornice Ceiling' },
  { src: '/images/hero3.jpg', alt: 'Organic Curved Ceiling' },
];

export const HERO_STATS = [
  { num: '500+', label: 'Projects Done' },
  { num: '10+',  label: 'Years Experience' },
  { num: '100%', label: 'Quality Assured' },
  { num: '200+', label: 'Happy Clients' },
];

export const GALLERY_ITEMS = [
  { src: '/images/gallery1.jpg', alt: 'Geometric POP Ceiling',           caption: 'Geometric POP Ceiling Design' },
  { src: '/images/gallery2.jpg', alt: 'Layered Cornice with Chandelier', caption: 'Layered Cornice with Chandelier' },
  { src: '/images/gallery3.jpg', alt: 'Organic Curved Ceiling',          caption: 'Organic Curved Ceiling' },
  { src: '/images/gallery4.jpg', alt: 'Wall Panelling',                  caption: 'Wall Panelling & POP Finish' },
  { src: '/images/gallery5.jpg', alt: 'Installation in Progress',        caption: 'Ceiling Installation in Progress' },
];

export const CEO = {
  name:  'Aduhene Seth',
  title: 'Founder & Chief Executive Officer',
  bio1:  "Aduhene Seth is the visionary founder behind Dorcas Ventures — Ghana's premier destination for premium plastering and ceiling materials. With over a decade of hands-on experience in the construction and interior finishing industry, he has built the company from the ground up with a single mission: delivering quality that speaks for itself.",
  bio2:  "His deep understanding of the Ghanaian market, combined with an uncompromising commitment to excellence, has made Dorcas Ventures the trusted partner of choice for homeowners, contractors, and developers across the country.",
  quote: '"We don\'t just sell materials — we help people build homes they are proud of. Quality is not a feature, it is our standard."',
  stats: [
    { num: '10+',  label: 'Years Experience' },
    { num: '500+', label: 'Projects Led' },
    { num: '200+', label: 'Happy Clients' },
  ],
  imgs: [
    { src: '/images/ceo_main.jpg',      alt: 'Aduhene Seth — CEO, Dorcas Ventures' },
    { src: '/images/ceo_factory1.jpg',  alt: 'Aduhene Seth at fibre factory' },
    { src: '/images/ceo_factory2.jpg',  alt: 'Aduhene Seth inspecting materials' },
    { src: '/images/ceo_factory3.jpg',  alt: 'Aduhene Seth at production facility' },
  ],
};

export const PRODUCT_CATEGORIES = [
  {
    category: 'P.O.P Soap Range',
    items: [
      { tag: 'In-House Made', title: 'POP Soap Production',      desc: 'Freshly made P.O.P soap bars produced in our facility — high quality, consistent finish, suitable for all POP construction works.',                                              img: '/images/prod_pop_making.jpg' },
      { tag: 'Bestseller',    title: 'Dorcas P.O.P Soap Bar',    desc: 'Our branded P.O.P soap bar — deep cleansing, long lasting. Suitable for all POP construction works. Available in single bars.',                                                     img: '/images/prod_pop_soap_hand.jpg' },
      { tag: 'Bulk Supply',   title: 'P.O.P Soap — Box Supply',  desc: 'Carton packs of Dorcas Ventures P.O.P soap for contractors and developers. Best pricing on bulk orders.',                                                                           img: '/images/prod_pop_soap_box.jpg' },
      { tag: 'Wholesale',     title: 'P.O.P Soap Wholesale',     desc: 'Large-scale wholesale supply of P.O.P soap for distributors and building supply shops across Ghana.',                                                                               img: '/images/prod_pop_soap_store.jpg' },
    ],
  },
  {
    category: 'Plaster of Paris Range',
    items: [
      { tag: 'Ready Stock', title: 'Dorcas Plaster — Bulk Stock',   desc: 'Large inventory of Dorcas Plaster of Paris bags ready for immediate pickup or delivery nationwide.',                                                                             img: '/images/prod_plaster_bags.jpg' },
      { tag: 'Own Brand',   title: 'Dorcas Plaster of Paris',       desc: 'Our flagship branded Plaster of Paris — high strength, smooth finish, certified quality for all ceiling and wall plastering work.',                                              img: '/images/prod_dorcas_plaster.jpg' },
      { tag: 'Premium',     title: 'Owura Moulding Plaster',        desc: 'High quality Owura moulding plaster of paris — ideal for cornice work, ceiling moulds, and decorative interior finishes.',                                                       img: '/images/prod_owura_plaster.jpg' },
      { tag: 'Certified',   title: 'Dorcas Plaster — Standard',     desc: 'Standard grade Dorcas Plaster of Paris for general POP ceiling and wall finishing. Consistent quality, competitive price.',                                                      img: '/images/prod_dorcas_plaster2.jpg' },
    ],
  },
  {
    category: 'Accessories & Additional Products',
    items: [
      { tag: 'Hardware',    title: 'Binding Wire',          desc: 'Heavy-duty galvanised binding wire for securing ceiling frames, POP structures, and general construction work.',                                                                          img: '/images/biding_wire.jpg' },
      { tag: 'Inspiration', title: 'Designer POP Ceilings', desc: 'Stunning custom POP ceiling designs — from luxury spirals to coffered styles. Let us bring your vision to life.',                                                                        img: '/images/ceiling_1.jpg' },
      { tag: 'Raw Material',title: 'Raw Fibre Material',    desc: 'Premium quality raw sisal fibre bundles — the essential reinforcement material for strong, durable POP ceiling boards.',                                                                  img: '/images/fibre_2.jpg' },
      { tag: 'Fibre',       title: 'POP Fibre',             desc: 'Processed POP fibre ready for ceiling board production — consistent quality, excellent tensile strength.',                                                                               img: '/images/pop_fibre.webp' },
    ],
  },
  {
    category: 'Finishing Products',
    items: [
      { tag: 'Paint',     title: 'Home Charm Emulsion', desc: 'BBC Industrials Home Charm Super Latex emulsion — perfect for masonry & ceilings, excellent with POP for wall skimming. Available in 4L & 10L.',                                            img: '/images/Homecharm_paint_1.webp' },
      { tag: 'Adhesive',  title: 'Top Bond White Glue', desc: 'General purpose white glue for bonding POP ceiling components, fibre boards, and interior finishing works. Multiple sizes available.',                                                        img: '/images/top_bond.webp' },
    ],
  },
];

// Flat list for any consumers that need it
export const PRODUCTS = PRODUCT_CATEGORIES.flatMap(c => c.items);

export const WHY_US = [
  { icon: '🥇', title: 'Unmatched Quality',   desc: 'Every product is sourced and tested to meet the highest industry standards before reaching you.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Premium materials at fair market prices, with bulk discounts for contractors and developers.' },
  { icon: '🎨', title: 'Design Expertise',    desc: 'Our team helps you choose the right materials and designs to match your vision perfectly.' },
  { icon: '📦', title: 'Ready Stock',         desc: 'Large inventory ready for immediate pickup or fast delivery across Ghana.' },
  { icon: '🔧', title: 'Technical Support',   desc: 'Expert guidance on application techniques for flawless, professional finishes every time.' },
  { icon: '⭐', title: 'Trusted Reputation',  desc: 'Over a decade of satisfied customers — from homeowners to major construction firms.' },
];

export const SERVICES = [
  { num: '01', title: 'Material Supply',       desc: 'Comprehensive supply of all plastering, ceiling, and finishing materials with quality guarantee.' },
  { num: '02', title: 'Ceiling Installation',  desc: 'Professional POP and fibre ceiling installation by our skilled artisan team.' },
  { num: '03', title: 'Design Consultation',   desc: 'Free consultation to help you select designs that complement your interior and budget.' },
  { num: '04', title: 'Bulk & Project Supply', desc: 'Reliable bulk supply for large-scale construction and development projects across Ghana.' },
];

export const TESTIMONIALS = [
  { initials: 'AK', name: 'Ama Korsah',   role: 'Homeowner, Accra',    quote: 'Dorcas Ventures supplied all the POP materials for my 4-bedroom house. Excellent quality — the ceiling finish is absolutely beautiful!' },
  { initials: 'KO', name: 'Kwame Ofori',  role: 'Building Contractor', quote: 'As a contractor, I rely on consistent quality. Dorcas always delivers on time and the materials are top-notch. Highly recommended!' },
  { initials: 'EA', name: 'Efua Asante',  role: 'Interior Designer',   quote: 'The design consultation service was incredibly helpful. They helped us pick the perfect cornice design and the result exceeded expectations.' },
];

export const TICKER_ITEMS = [
  'POP Ceilings', 'Fibre Materials', 'Cornice Work',
  'Gypsum Boards', 'Wall Finishes',  'POP Cement',
  'Ceiling Designs', 'Interior Décor',
];

// ── Aliases & missing exports expected by components ──────────────────────

// CEO.jsx imports CEO_DATA
export const CEO_DATA = CEO;

// About.jsx imports ABOUT_FEATS
export const ABOUT_FEATS = [
  { icon: '🏆', title: 'Premium Quality',  sub: 'Top-grade certified materials' },
  { icon: '🚚', title: 'Fast Delivery',    sub: 'Nationwide supply network' },
  { icon: '💡', title: 'Expert Guidance',  sub: 'Free design consultation' },
  { icon: '🤝', title: 'Trusted Partners', sub: '500+ satisfied clients' },
];

// Footer.jsx imports FOOTER_PRODUCTS
export const FOOTER_PRODUCTS = [
  'POP Cement', 'Fibre Boards', 'Gypsum Boards',
  'Cornices', 'Ceiling Tiles', 'Accessories',
];

// VideoGallery.jsx imports VIDEO_ITEMS (vertical clips in public/videos)
export const VIDEO_ITEMS = [
  { src: '/videos/offloading.mp4',      poster: '/videos/offloading.jpg',      title: 'Offloading Fresh Stock', tag: 'Supply' },
  { src: '/videos/warehouse.mp4',       poster: '/videos/warehouse.jpg',       title: 'Inside Our Warehouse',   tag: 'Storage' },
  { src: '/videos/finished-interior.mp4', poster: '/videos/finished-interior.jpg', title: 'Finished POP Interior', tag: 'Projects' },
  { src: '/videos/fibre.mp4',           poster: '/videos/fibre.jpg',           title: 'Fibre Materials',        tag: 'Products' },
  { src: '/videos/workers.mp4',         poster: '/videos/workers.jpg',         title: 'Our Team at Work',       tag: 'People' },
  { src: '/videos/delivery.mp4',        poster: '/videos/delivery.jpg',        title: 'On the Road to You',     tag: 'Delivery' },
  { src: '/videos/techiman-branch.mp4', poster: '/videos/techiman-branch.jpg', title: 'Techiman Branch',        tag: 'Branches' },
];
