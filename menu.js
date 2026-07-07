/* ============================================================
   CAFE AMORE — MENU PAGE JAVASCRIPT
   menu.js — Complete menu data, rendering, sidebar, scroll spy
   ============================================================ */

'use strict';

// ── Navigation Setup ─────────────────────────────────────────
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    hamburger.classList.toggle('open', !isOpen);
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Complete Menu Data ────────────────────────────────────────
// type: 'veg' | 'nonveg'
// bestseller: true | false (optional)
// image: path to image (optional — shows placeholder if not provided)

const MENU_DATA = [
  {
    id: 'specials',
    name: 'Specials',
    icon: '✦',
    items: [
      { id: 'sp-1', name: 'Cheese Churi Muri',     type: 'veg',    price: 391, desc: 'Vegetables blended with cheese peanuts, crumb coated and fried till golden and crisp.',          bestseller: true  },
      { id: 'sp-2', name: 'Tandoori Prawns',        type: 'nonveg', price: 490, desc: 'Hung curd marinated in aromatic spices, roasted smoky and lightly charred in the tandoor.',     bestseller: true,  image: 'butter_chicken.png' },
      { id: 'sp-3', name: 'Prawns Butter Garlic',   type: 'nonveg', price: 490, desc: 'Juicy prawns tossed in rich butter aromatic garlic, cooked till glossy and flavorful.',         bestseller: false, image: 'butter_chicken.png' },
      { id: 'sp-4', name: 'Stuffed Shrimp Balls',   type: 'nonveg', price: 559, desc: 'Crispy golden shrimp balls stuffed with flavorful filling, deep fried and served hot.',         bestseller: false },
    ]
  },
  {
    id: 'sizzlers',
    name: 'Sizzlers',
    icon: '🔥',
    items: [
      { id: 'sz-1', name: 'Veg Sizzler',            type: 'veg',    price: 388, desc: 'Grilled vegetables and hearty sides on a hot sizzling platter, finished with rich sauce.',      bestseller: true,  image: 'sizzler.png' },
      { id: 'sz-2', name: 'Paneer Sizzler',          type: 'veg',    price: 413, desc: 'Sizzling cubes of paneer grilled with vegetables and finished with aromatic spices.',           bestseller: false, image: 'sizzler.png' },
      { id: 'sz-3', name: 'Chicken Sizzler',         type: 'nonveg', price: 486, desc: 'Sizzling grilled chicken served hot with vegetables and a flavorful sauce.',                   bestseller: true,  image: 'sizzler.png' },
    ]
  },
  {
    id: 'veg-soups',
    name: 'Veg Soups',
    icon: '🍲',
    items: [
      { id: 'vs-1', name: 'Cream of Mushroom Soup', type: 'veg',    price: 220, desc: 'Rich creamy mushroom broth topped with mushroom bits and herbs.',                               bestseller: false },
      { id: 'vs-2', name: 'Sweet Corn Soup',         type: 'veg',    price: 195, desc: 'Smooth golden broth with sweet corn kernels, lightly seasoned and comforting.',                 bestseller: false },
      { id: 'vs-3', name: 'Tomato Basil Soup',       type: 'veg',    price: 195, desc: 'Slow-roasted tomatoes blended with fresh basil, served with a drizzle of cream.',               bestseller: false },
      { id: 'vs-4', name: 'Veg Manchow Soup',        type: 'veg',    price: 195, desc: 'Hearty Indo-Chinese broth loaded with vegetables and crispy noodles on top.',                   bestseller: false },
    ]
  },
  {
    id: 'nonveg-soups',
    name: 'Non Veg Soups',
    icon: '🍲',
    items: [
      { id: 'ns-1', name: 'Chicken Hot & Sour Soup', type: 'nonveg', price: 228, desc: 'Fiery and tangy chicken broth, perfectly balanced heat and sourness.',                          bestseller: true  },
      { id: 'ns-2', name: 'Chicken Manchow Soup',    type: 'nonveg', price: 228, desc: 'Rich chicken broth with vegetables and crispy noodles — a hearty classic.',                     bestseller: false },
      { id: 'ns-3', name: 'Chicken Sweet Corn Soup', type: 'nonveg', price: 220, desc: 'Creamy sweet corn chicken soup with a comforting warm finish.',                                 bestseller: false },
    ]
  },
  {
    id: 'veg-tandoori',
    name: 'Veg Tandoori Starters',
    icon: '🫙',
    items: [
      { id: 'vt-1', name: 'Paneer Tikka',            type: 'veg',    price: 320, desc: 'Marinated paneer cubes grilled in the tandoor till smoky and golden.',                         bestseller: true  },
      { id: 'vt-2', name: 'Hara Bhara Kebab',        type: 'veg',    price: 295, desc: 'Spinach and peas patties spiced with green herbs, grilled and served with mint chutney.',       bestseller: false },
      { id: 'vt-3', name: 'Veg Seekh Kebab',         type: 'veg',    price: 295, desc: 'Minced vegetables and cottage cheese shaped on skewers, charred in the tandoor.',              bestseller: false },
      { id: 'vt-4', name: 'Tandoori Aloo',           type: 'veg',    price: 275, desc: 'Baby potatoes marinated in spiced yogurt, roasted in the tandoor till crisp.',                 bestseller: false },
    ]
  },
  {
    id: 'nonveg-tandoori',
    name: 'Non Veg Tandoori Starters',
    icon: '🫙',
    items: [
      { id: 'nt-1', name: 'Chicken Tikka',           type: 'nonveg', price: 350, desc: 'Juicy chicken pieces in yogurt and spice marinade, roasted in a blazing tandoor.',             bestseller: true  },
      { id: 'nt-2', name: 'Tandoori Chicken',        type: 'nonveg', price: 380, desc: 'Whole leg marinated in tandoori spices, slow-roasted for a deeply smoky flavour.',              bestseller: true  },
      { id: 'nt-3', name: 'Mutton Seekh Kebab',      type: 'nonveg', price: 420, desc: 'Minced mutton with fresh herbs on skewers, char-grilled in the tandoor.',                      bestseller: false },
      { id: 'nt-4', name: 'Fish Tikka',              type: 'nonveg', price: 380, desc: 'Tender fish fillet in carom-spice marinade, finished with lemon and chaat masala.',            bestseller: false },
    ]
  },
  {
    id: 'veg-starters',
    name: 'Veg Starters',
    icon: '🥗',
    items: [
      { id: 'vs-a1', name: 'Crispy Corn',            type: 'veg',    price: 245, desc: 'Flash-fried corn tossed with herbs and a secret spice blend. Addictively crunchy.',             bestseller: true  },
      { id: 'vs-a2', name: 'Paneer Chilli',          type: 'veg',    price: 285, desc: 'Crisp paneer in Indo-Chinese chilli sauce — smoky, bold, and irresistible.',                   bestseller: true  },
      { id: 'vs-a3', name: 'Mushroom Pepper Fry',    type: 'veg',    price: 275, desc: 'Button mushrooms tossed in cracked pepper and fresh herbs, dry and fragrant.',                  bestseller: false },
      { id: 'vs-a4', name: 'Baby Corn Manchurian',   type: 'veg',    price: 265, desc: 'Crispy baby corn in tangy Manchurian sauce — a classic done perfectly.',                        bestseller: false },
      { id: 'vs-a5', name: 'Cheese Stuffed Potato',  type: 'veg',    price: 285, desc: 'Golden potato rounds stuffed with melted cheese, served with chipotle dip.',                   bestseller: false },
    ]
  },
  {
    id: 'nonveg-starters',
    name: 'Non Veg Starters',
    icon: '🥩',
    items: [
      { id: 'ns-a1', name: 'Chilli Chicken Dry',     type: 'nonveg', price: 295, desc: 'Wok-tossed crispy chicken in bold Indo-Chinese spices — the crowd favourite.',                  bestseller: true,  image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_24_40 AM.png' },
      { id: 'ns-a2', name: 'Chicken Lollipop',       type: 'nonveg', price: 310, desc: 'Frenched chicken lollipops in a fiery red glaze — spicy, juicy and finger-licking.',           bestseller: true  },
      { id: 'ns-a3', name: 'Fish Amritsari',         type: 'nonveg', price: 340, desc: 'Battered fish in carom-spiced chickpea batter, fried golden and served with green chutney.',   bestseller: false },
      { id: 'ns-a4', name: 'Prawn Tempura',          type: 'nonveg', price: 380, desc: 'Light Japanese-style tempura battered prawns with ginger soy dipping sauce.',                  bestseller: false },
    ]
  },
  {
    id: 'veg-main',
    name: 'Veg Main Course',
    icon: '🫕',
    items: [
      { id: 'vm-1', name: 'Dal Makhani',             type: 'veg',    price: 245, desc: 'Black lentils slow-cooked overnight in butter and cream — rich, comforting, iconic.',          bestseller: true  },
      { id: 'vm-2', name: 'Paneer Butter Masala',    type: 'veg',    price: 285, desc: 'Velvety tomato-cream gravy with soft paneer — India\'s most beloved dish.',                    bestseller: true  },
      { id: 'vm-3', name: 'Veg Kadhai',              type: 'veg',    price: 265, desc: 'Garden vegetables in a robust kadhai masala with capsicum and whole spices.',                   bestseller: false },
      { id: 'vm-4', name: 'Mushroom Masala',         type: 'veg',    price: 275, desc: 'Button mushrooms in a spiced onion-tomato gravy, finished with cream.',                        bestseller: false },
      { id: 'vm-5', name: 'Shahi Paneer',            type: 'veg',    price: 295, desc: 'Cottage cheese in a royal cashew and saffron gravy. Gently spiced, luxuriously rich.',          bestseller: false },
    ]
  },
  {
    id: 'nonveg-main',
    name: 'Non Veg Main Course',
    icon: '🫕',
    items: [
      { id: 'nm-1', name: 'Butter Chicken',          type: 'nonveg', price: 320, desc: 'Tandoor-smoked chicken in a silky tomato-cream sauce — a timeless classic.',                   bestseller: true,  image: 'butter_chicken.png' },
      { id: 'nm-2', name: 'Chicken Kadhai',          type: 'nonveg', price: 310, desc: 'Succulent chicken cooked in a bold kadhai masala with charred peppers and whole spices.',       bestseller: false, image: 'butter_chicken.png' },
      { id: 'nm-3', name: 'Mutton Rogan Josh',       type: 'nonveg', price: 380, desc: 'Slow-braised Kashmiri mutton in aromatic red gravy — deeply flavourful and warming.',          bestseller: false },
      { id: 'nm-4', name: 'Fish Curry',              type: 'nonveg', price: 340, desc: 'Coastal-style curry with tender fish, coconut milk and curry leaves.',                          bestseller: false },
    ]
  },
  {
    id: 'rice',
    name: 'Rice',
    icon: '🍚',
    items: [
      { id: 'ri-1', name: 'Steamed Rice',            type: 'veg',    price: 150, desc: 'Long-grain basmati, perfectly steamed.' },
      { id: 'ri-2', name: 'Jeera Rice',              type: 'veg',    price: 175, desc: 'Fluffy basmati tempered with cumin seeds and whole spices.' },
      { id: 'ri-3', name: 'Peas Pulao',              type: 'veg',    price: 185, desc: 'Aromatic basmati with green peas and fragrant whole spices.' },
    ]
  },
  {
    id: 'biryani',
    name: 'Biryani',
    icon: '🥘',
    items: [
      { id: 'bi-1', name: 'Veg Dum Biryani',         type: 'veg',    price: 275, desc: 'Fragrant basmati layered with spiced vegetables, sealed and slow-cooked dum style.',           bestseller: false, image: 'biryani.png' },
      { id: 'bi-2', name: 'Chicken Dum Biryani',     type: 'nonveg', price: 320, desc: 'Tender chicken, caramelised onions, saffron and aromatic rice — sealed in dum perfection.',    bestseller: true,  image: 'biryani.png' },
      { id: 'bi-3', name: 'Mutton Biryani',          type: 'nonveg', price: 380, desc: 'Slow-cooked mutton in layers of saffron rice. Rich, indulgent, and deeply satisfying.',        bestseller: false, image: 'biryani.png' },
      { id: 'bi-4', name: 'Egg Biryani',             type: 'nonveg', price: 260, desc: 'Golden fried eggs buried in fragrant spiced rice, a simple indulgence done right.',             bestseller: false, image: 'biryani.png' },
    ]
  },
  {
    id: 'breads',
    name: 'Breads',
    icon: '🫓',
    items: [
      { id: 'br-1', name: 'Butter Naan',             type: 'veg',    price: 75,  desc: 'Leavened bread baked in the tandoor, finished with butter.' },
      { id: 'br-2', name: 'Garlic Naan',             type: 'veg',    price: 85,  desc: 'Tandoori bread with roasted garlic and fresh coriander.' },
      { id: 'br-3', name: 'Roomali Roti',            type: 'veg',    price: 55,  desc: 'Thin handkerchief bread, soft and slightly charred.' },
      { id: 'br-4', name: 'Cheese Naan',             type: 'veg',    price: 95,  desc: 'Leavened bread stuffed with melted cheese, baked till golden.' },
      { id: 'br-5', name: 'Kulcha',                  type: 'veg',    price: 85,  desc: 'Soft leavened bread with a gentle bite, great with dal.' },
    ]
  },
  {
    id: 'continental',
    name: 'Continental',
    icon: '🍽️',
    items: [
      { id: 'co-1', name: 'Grilled Chicken Plate',   type: 'nonveg', price: 380, desc: 'Herb-marinated chicken breast, grilled and served with roasted vegetables and sauce.',         bestseller: false },
      { id: 'co-2', name: 'Fish & Chips',            type: 'nonveg', price: 365, desc: 'Crispy beer-battered fish with hand-cut chips, tartar sauce and lemon.',                      bestseller: false },
      { id: 'co-3', name: 'Veg Grilled Platter',     type: 'veg',    price: 310, desc: 'Seasonal vegetables grilled with herbs, served with garlic butter and dips.',                   bestseller: false },
      { id: 'co-4', name: 'Pasta Arrabbiata',        type: 'veg',    price: 295, desc: 'Penne in a fiery tomato sauce with garlic and chilli flakes.',                                  bestseller: false },
    ]
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    icon: '🍳',
    items: [
      { id: 'fr-1', name: 'Veg Fried Rice',          type: 'veg',    price: 225, desc: 'Wok-tossed basmati with fresh vegetables, soy and sesame.' },
      { id: 'fr-2', name: 'Chicken Fried Rice',      type: 'nonveg', price: 265, desc: 'Smoky wok rice with shredded chicken, egg and vegetables.' },
      { id: 'fr-3', name: 'Egg Fried Rice',          type: 'nonveg', price: 245, desc: 'Classic fried rice with scrambled eggs and scallions.' },
      { id: 'fr-4', name: 'Schezwan Fried Rice',     type: 'veg',    price: 235, desc: 'Spicy Schezwan fried rice — bold, fiery and full of flavour.' },
    ]
  },
  {
    id: 'noodles',
    name: 'Noodles',
    icon: '🍜',
    items: [
      { id: 'no-1', name: 'Veg Hakka Noodles',       type: 'veg',    price: 225, desc: 'Wok-tossed egg noodles with crisp vegetables in soy and chilli.',                              bestseller: false },
      { id: 'no-2', name: 'Veg Schezwan Noodles',    type: 'veg',    price: 235, desc: 'Fiery Schezwan sauce, crisp vegetables, tossed with egg noodles.',                             bestseller: true,  image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_26_10 AM.png' },
      { id: 'no-3', name: 'Chicken Hakka Noodles',   type: 'nonveg', price: 265, desc: 'Shredded chicken, noodles and vegetables in a savoury soy glaze.',                             bestseller: false, image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_26_10 AM.png' },
      { id: 'no-4', name: 'Chicken Schezwan Noodles',type: 'nonveg', price: 280, desc: 'The ultimate fiery noodle dish — chicken, vegetables, Schezwan sauce.',                        bestseller: false, image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_26_10 AM.png' },
    ]
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: '🍕',
    items: [
      { id: 'pz-1', name: 'Margherita',              type: 'veg',    price: 295, desc: 'Stone-baked base, San Marzano tomato, fresh basil, mozzarella.',                               bestseller: false, image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_24_46 AM.png' },
      { id: 'pz-2', name: 'Farmhouse Pizza',         type: 'veg',    price: 345, desc: 'Loaded with capsicum, corn, olives, mushroom and extra cheese.',                               bestseller: true,  image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_24_46 AM.png' },
      { id: 'pz-3', name: 'Chicken Pizza',           type: 'nonveg', price: 375, desc: 'Seasoned chicken, mozzarella and signature tomato sauce on a crisp base.',                     bestseller: false, image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_24_46 AM.png' },
      { id: 'pz-4', name: 'Peri Peri Chicken Pizza', type: 'nonveg', price: 385, desc: 'Grilled chicken, peri peri sauce, caramelised onions and extra cheese.',                      bestseller: true,  image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_24_46 AM.png' },
    ]
  },
  {
    id: 'veg-pasta',
    name: 'Veg Pasta',
    icon: '🍝',
    items: [
      { id: 'vp-1', name: 'Penne Arrabbiata',        type: 'veg',    price: 285, desc: 'Penne in a bold spiced tomato sauce with garlic and fresh basil.' },
      { id: 'vp-2', name: 'Pasta Aglio Olio',        type: 'veg',    price: 275, desc: 'Spaghetti tossed in extra virgin olive oil, roasted garlic and chilli flakes.' },
      { id: 'vp-3', name: 'White Sauce Pasta',       type: 'veg',    price: 295, desc: 'Creamy bechamel pasta with vegetables — comfort in every bite.' },
      { id: 'vp-4', name: 'Rose Sauce Pasta',        type: 'veg',    price: 305, desc: 'Perfect blend of tomato and cream with Italian herbs and parmesan.' },
    ]
  },
  {
    id: 'nonveg-pasta',
    name: 'Non Veg Pasta',
    icon: '🍝',
    items: [
      { id: 'np-1', name: 'Chicken Penne',           type: 'nonveg', price: 325, desc: 'Grilled chicken strips with penne in spiced tomato sauce.' },
      { id: 'np-2', name: 'Chicken White Sauce Pasta', type: 'nonveg', price: 335, desc: 'Tender chicken in a rich creamy bechamel with garlic and herbs.' },
    ]
  },
  {
    id: 'burgers',
    name: 'Burgers',
    icon: '🍔',
    items: [
      { id: 'bg-1', name: 'Amore Classic Burger',    type: 'nonveg', price: 245, desc: 'Juicy chicken patty, melted cheese, lettuce, tomato — served with golden fries.',             bestseller: true,  image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_24_43 AM.png' },
      { id: 'bg-2', name: 'Crispy Chicken Burger',   type: 'nonveg', price: 275, desc: 'Crispy fried chicken, slaw, pickles and house sauce on a toasted brioche bun.',               bestseller: false, image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_24_43 AM.png' },
      { id: 'bg-3', name: 'Veg Burger',              type: 'veg',    price: 215, desc: 'A hearty veggie patty with lettuce, tomato, onion and tangy sauce.',                           bestseller: false, image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_24_43 AM.png' },
      { id: 'bg-4', name: 'Double Patty Burger',     type: 'nonveg', price: 320, desc: 'Double the patty, double the cheese, double the satisfaction.',                               bestseller: false, image: 'Food Photo/ChatGPT Image Jul 7, 2026, 12_24_43 AM.png' },
    ]
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    icon: '🥪',
    items: [
      { id: 'sw-1', name: 'Grilled Veg Sandwich',    type: 'veg',    price: 195, desc: 'Grilled multigrain bread with fresh vegetables, cheese and spiced spread.' },
      { id: 'sw-2', name: 'Club Sandwich',           type: 'nonveg', price: 245, desc: 'Triple-decker with chicken, egg, lettuce, tomato and mayo.' },
      { id: 'sw-3', name: 'Chicken Club Sandwich',   type: 'nonveg', price: 265, desc: 'Grilled chicken, fresh greens, chipotle mayo in toasted bread.' },
      { id: 'sw-4', name: 'Paneer Grill Sandwich',   type: 'veg',    price: 225, desc: 'Spiced paneer, capsicum and onion grilled in pressed bread with dips.' },
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks',
    icon: '🍟',
    items: [
      { id: 'sn-1', name: 'French Fries',            type: 'veg',    price: 165, desc: 'Golden crispy fries with house seasoning and dipping sauce.' },
      { id: 'sn-2', name: 'Peri Peri Fries',         type: 'veg',    price: 185, desc: 'Fries tossed in fiery peri peri seasoning with cheese dip.' },
      { id: 'sn-3', name: 'Loaded Fries',            type: 'veg',    price: 225, desc: 'Fries piled with melted cheese, jalapeños, sour cream and salsa.' },
      { id: 'sn-4', name: 'Mozzarella Sticks',       type: 'veg',    price: 265, desc: 'Crispy breaded mozzarella sticks with marinara dipping sauce.' },
      { id: 'sn-5', name: 'Onion Rings',             type: 'veg',    price: 185, desc: 'Beer-battered golden onion rings — crunchy outside, sweet inside.' },
    ]
  }
];

// ── Category Icons mapping for sidebar ────────────────────────
const SIDEBAR_ICONS = {
  'specials':         '✦',
  'sizzlers':         '⚡',
  'veg-soups':        '☕',
  'nonveg-soups':     '☕',
  'veg-tandoori':     '🔸',
  'nonveg-tandoori':  '🔸',
  'veg-starters':     '◈',
  'nonveg-starters':  '◈',
  'veg-main':         '◉',
  'nonveg-main':      '◉',
  'rice':             '○',
  'biryani':          '◆',
  'breads':           '◇',
  'continental':      '◉',
  'fried-rice':       '○',
  'noodles':          '∿',
  'pizza':            '◐',
  'veg-pasta':        '∾',
  'nonveg-pasta':     '∾',
  'burgers':          '◑',
  'sandwiches':       '◻',
  'snacks':           '◼',
};

// ── Render Helpers ─────────────────────────────────────────────
function vegIndicator(type) {
  if (type === 'veg') {
    return `<span class="veg-dot" title="Vegetarian" aria-label="Vegetarian"></span><span class="dot-label">Veg</span>`;
  }
  return `<span class="nonveg-dot" title="Non-Vegetarian" aria-label="Non-Vegetarian"></span><span class="dot-label">Non-Veg</span>`;
}

function bestsellerBadge(item) {
  if (!item.bestseller) return '';
  return `<span class="bestseller-tag" aria-label="Best Seller">★ Best Seller</span>`;
}

function cardImage(item) {
  if (item.image) {
    return `
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy" />
      </div>`;
  }
  // Elegant placeholder using first letter
  const emoji = getCategoryEmoji(item.type);
  return `
    <div class="menu-card-img-wrap">
      <div class="menu-card-img-placeholder" aria-hidden="true">${emoji}</div>
    </div>`;
}

function getCategoryEmoji(type) {
  return type === 'veg' ? '🌿' : '🍖';
}

function renderCard(item) {
  return `
    <article class="menu-card" id="card-${item.id}" data-type="${item.type}" data-name="${item.name.toLowerCase()}" data-desc="${(item.desc || '').toLowerCase()}">
      ${cardImage(item)}
      ${item.bestseller ? `<div class="menu-card-badge" aria-label="Best Seller">★ Best Seller</div>` : ''}
      <div class="menu-card-body">
        <div class="menu-card-top">
          <h3 class="menu-card-name">${item.name}</h3>
          <span class="menu-card-price" aria-label="Price ₹${item.price}">₹${item.price}</span>
        </div>
        ${item.desc ? `<p class="menu-card-desc">${item.desc}</p>` : ''}
        <div class="menu-card-footer">
          ${vegIndicator(item.type)}
          ${bestsellerBadge(item)}
        </div>
      </div>
    </article>`;
}

function renderCategory(cat) {
  const cards = cat.items.map(renderCard).join('');
  return `
    <section class="menu-category" id="cat-${cat.id}" aria-labelledby="cat-heading-${cat.id}">
      <div class="menu-category-header">
        <h2 class="menu-category-name" id="cat-heading-${cat.id}">${cat.name}</h2>
        <span class="menu-category-icon" aria-hidden="true">✦</span>
        <div class="menu-category-line"></div>
      </div>
      <div class="menu-cards">
        ${cards}
      </div>
    </section>`;
}

// ── Build Sidebar ──────────────────────────────────────────────
function buildSidebar() {
  const sidebarNav = document.getElementById('sidebarNav');
  if (!sidebarNav) return;

  sidebarNav.innerHTML = MENU_DATA.map(cat => `
    <button
      class="sidebar-nav-item"
      data-target="cat-${cat.id}"
      id="sidebar-${cat.id}"
      aria-label="Jump to ${cat.name}"
    >
      <span class="sidebar-nav-icon" aria-hidden="true">${SIDEBAR_ICONS[cat.id] || '·'}</span>
      ${cat.name}
    </button>
  `).join('');

  sidebarNav.querySelectorAll('.sidebar-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) {
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 88;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Build Mobile Category Bar ──────────────────────────────────
function buildMobileCats() {
  const bar = document.getElementById('mobileCats');
  if (!bar) return;

  bar.innerHTML = MENU_DATA.map(cat => `
    <button
      class="menu-mobile-cat-btn"
      data-target="cat-${cat.id}"
      id="mob-cat-${cat.id}"
    >${cat.name}</button>
  `).join('');

  bar.querySelectorAll('.menu-mobile-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) {
        const offset = (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 88) + 56;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 10;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Render All Menu ────────────────────────────────────────────
function renderMenu() {
  const container = document.getElementById('menuCategories');
  if (!container) return;
  container.innerHTML = MENU_DATA.map(renderCategory).join('');
}

// ── Scroll Spy ─────────────────────────────────────────────────
function initScrollSpy() {
  const navOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 88;

  const sidebarItems = document.querySelectorAll('.sidebar-nav-item');
  const mobileCatBtns = document.querySelectorAll('.menu-mobile-cat-btn');

  function setActive(id) {
    sidebarItems.forEach(item => {
      item.classList.toggle('active', item.dataset.target === `cat-${id}`);
    });
    mobileCatBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === `cat-${id}`);
    });

    // Auto-scroll active sidebar item into view
    const activeBtn = document.getElementById(`sidebar-${id}`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const catId = entry.target.id.replace('cat-', '');
        setActive(catId);
      }
    });
  }, {
    rootMargin: `-${navOffset + 10}px 0px -60% 0px`,
    threshold: 0
  });

  MENU_DATA.forEach(cat => {
    const el = document.getElementById(`cat-${cat.id}`);
    if (el) observer.observe(el);
  });
}

// ── Filter (Veg / Non-Veg / All) ──────────────────────────────
let currentFilter = 'all';

function applyFilter(filter) {
  currentFilter = filter;
  const cards = document.querySelectorAll('.menu-card');
  const categories = document.querySelectorAll('.menu-category');
  const searchVal = (document.getElementById('menuSearch')?.value || '').toLowerCase().trim();

  cards.forEach(card => {
    const matchesFilter = filter === 'all' || card.dataset.type === filter;
    const matchesSearch = !searchVal ||
      card.dataset.name.includes(searchVal) ||
      card.dataset.desc.includes(searchVal);
    card.classList.toggle('hidden', !(matchesFilter && matchesSearch));
  });

  // Hide entire category if no visible cards
  categories.forEach(cat => {
    const visibleCards = cat.querySelectorAll('.menu-card:not(.hidden)');
    cat.classList.toggle('hidden', visibleCards.length === 0);
  });

  checkNoResults();
}

function checkNoResults() {
  const noResults = document.getElementById('noResults');
  if (!noResults) return;
  const anyVisible = document.querySelectorAll('.menu-category:not(.hidden)').length > 0;
  noResults.classList.toggle('show', !anyVisible);
}

function initFilter() {
  const filterBtns = document.querySelectorAll('.menu-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'veg-active', 'nonveg-active');
      });
      const filter = btn.dataset.filter;
      btn.classList.add('active');
      if (filter === 'veg') btn.classList.add('veg-active');
      if (filter === 'nonveg') btn.classList.add('nonveg-active');
      applyFilter(filter);
    });
  });
}

// ── Search ────────────────────────────────────────────────────
function initSearch() {
  const searchInput = document.getElementById('menuSearch');
  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      applyFilter(currentFilter);
    }, 200);
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  buildSidebar();
  buildMobileCats();
  initScrollSpy();
  initFilter();
  initSearch();
});
