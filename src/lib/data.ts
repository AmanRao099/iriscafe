export const cafe = {
  name: "Iris Café & Kitchen",
  short: "Iris",
  tagline: "A garden of fine flavours",
  area: "JP Nagar, Bengaluru",
  address: "735, 16th Cross, 29th Main Rd, 6th Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
  addressLines: ["735, 16th Cross, 29th Main Rd", "6th Phase, J. P. Nagar", "Bengaluru 560078"],
  phone: "+91 93533 46502",
  phoneHref: "tel:+919353346502",
  email: "iriscafekitchen@gmail.com",
  hours: [{ days: "Monday – Sunday", time: "9:00 am – 11:00 pm" }],
  instagram: "https://www.instagram.com/iriscafejpn/",
  instagramHandle: "@iriscafejpn",
  maps: "https://share.google/1J0vWkNCVwnPFhtp3",
  mapsEmbed:
    "https://www.google.com/maps?q=Iris+Caf%C3%A9+%26+Kitchen,+JP+Nagar,+Bengaluru&ll=12.9056741,77.5831866&z=16&output=embed",
  website: "https://iriscafe.in",
  rating: "4.5",
  reviews: "3,400+",
};

export const nav = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#space", label: "The Space" },
  { href: "#visit", label: "Visit" },
];

export type MenuItem = { name: string; desc?: string; price: string; veg?: boolean };
export type MenuSection = { id: string; title: string; note?: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    id: "coffee",
    title: "Coffee & Sweet",
    items: [
      { name: "Hazelnut Latte", desc: "Espresso, steamed milk, toasted hazelnut", price: "215", veg: true },
      { name: "Iced Latte", desc: "Double shot over ice, cold milk", price: "245", veg: true },
      { name: "English Breakfast Tea", desc: "Tein Filtro, brewed to order", price: "165", veg: true },
      { name: "Fruit Punch", desc: "Seasonal fruit, citrus, sparkle", price: "255", veg: true },
      { name: "Deep Blue Ocean", desc: "House cooler, bright and blue", price: "265", veg: true },
      { name: "Blueberry Cheesecake", desc: "Baked, with blueberry compote", price: "325", veg: true },
      { name: "Tiramisu", desc: "Eggless, mascarpone, cocoa", price: "325", veg: true },
      { name: "Choco Lava", desc: "Warm molten centre", price: "245", veg: true },
      { name: "Banana Nutella Pancakes", desc: "Stacked, sliced banana, hazelnut cocoa", price: "255", veg: true },
    ],
  },
  {
    id: "small",
    title: "Small Plates",
    items: [
      { name: "Crispy Lotus Stem Honey Chilli", desc: "Thinly sliced lotus stem tossed in honey-chilli sauce", price: "295", veg: true },
      { name: "Paneer on Fire", desc: "Paneer, bell peppers & onion tossed in tikka masala", price: "315", veg: true },
      { name: "Stuffed Mushrooms au Gratin", desc: "Baked mushrooms filled with herbed cheese & breadcrumbs", price: "315", veg: true },
      { name: "Harissa Bhurji Crostini", desc: "Guacamole, harissa-spiced paneer bhurji, kasundi aioli, banana chips", price: "345", veg: true },
      { name: "Wasabi Sweet Corn Croquettes", desc: "Golden, crisp, a gentle wasabi heat", price: "335", veg: true },
      { name: "Thai Lemongrass Chicken Skewers", desc: "Grilled, marinated in lemongrass & coconut", price: "345" },
      { name: "Iris Wings", desc: "Peri peri · BBQ · hot garlic", price: "345" },
      { name: "Pan-tossed Spicy Prawns", desc: "House spice blend, smoky garlic butter, aioli", price: "385" },
      { name: "Spiced Fish & Chips", desc: "Mini fillets in crisp batter, tartar sauce", price: "385" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    items: [
      { name: "Classic Margherita", desc: "San Marzano tomato, fresh mozzarella, basil, olive oil", price: "415", veg: true },
      { name: "Mediterranean Veggie", desc: "Roasted peppers, zucchini, olives, feta, sun-dried tomato", price: "415", veg: true },
      { name: "Four Cheese", desc: "Mozzarella, cheddar, parmesan & feta, herbed crust", price: "425", veg: true },
      { name: "Tandoori Paneer Delight", desc: "Spiced paneer, onion, peppers, mint yoghurt drizzle", price: "425", veg: true },
      { name: "Spicy Veggie Inferno", desc: "Chilli-tomato, jalapeños, spicy paneer, chilli oil", price: "435", veg: true },
      { name: "BBQ Pulled Chicken", desc: "BBQ sauce, pulled chicken, caramelised onion, cheddar", price: "445" },
      { name: "Peri Peri Chicken", desc: "Grilled peri peri chicken, jalapeño, red onion, olives", price: "445" },
      { name: "Chicken Trio Loaded", desc: "Spicy, BBQ & sausage, grilled onion & pepper", price: "445" },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    note: "Spaghetti · Penne · Fettuccini — Vegetarian ₹355 · Chicken ₹375 · Prawn ₹395",
    items: [
      { name: "Pesto", desc: "Fresh basil pesto, parmesan, zucchini, sun-dried tomato", price: "355+" },
      { name: "Alfredo", desc: "Creamy parmesan sauce with mushrooms", price: "355+" },
      { name: "Spicy Arrabbiata", desc: "Chilli tomato, oregano, olives, capers, basil", price: "355+" },
      { name: "Aglio e Olio", desc: "Garlic, olive oil, chilli flakes, parsley", price: "355+" },
      { name: "Classic Mac & Cheese", desc: "Baked with cheddar, mozzarella & parmesan", price: "355+" },
      { name: "Lasagna", desc: "Layered arrabbiata & cream, vegetables, baked", price: "355+" },
      { name: "Ravioli", desc: "Spinach & ricotta, arrabbiata or roasted garlic cream", price: "355+" },
    ],
  },
];

export const signatures = [
  { src: "/images/latte-art.jpg", title: "The morning pour", caption: "Espresso & steamed milk" },
  { src: "/images/kebab-platter.jpg", title: "Garden skewers", caption: "Small plates to share" },
  { src: "/images/dessert-pour.jpg", title: "Something sweet", caption: "Finished at the table" },
  { src: "/images/sunset-cooler.jpg", title: "Golden hour", caption: "Coolers & mocktails" },
];

export const gallery = [
  { src: "/images/garden-dusk.jpg", alt: "The garden courtyard at dusk, lanterns lit among the trees", w: 1600, h: 1068 },
  { src: "/images/iced-latte.jpg", alt: "Layered iced latte on dark stone with coffee beans", w: 1279, h: 1600 },
  { src: "/images/interior.jpg", alt: "Indoor dining room with rattan pendant lights and wooden tables", w: 1600, h: 1068 },
  { src: "/images/hot-chocolate.jpg", alt: "Hot chocolate topped with cream and cocoa dust", w: 1280, h: 1600 },
  { src: "/images/patio-canopy.jpg", alt: "Open-air terrace under a slatted canopy", w: 1600, h: 1068 },
  { src: "/images/caprese-plate.jpg", alt: "Caprese plate with pesto toast and fries", w: 1600, h: 1600 },
  { src: "/images/patio-day.jpg", alt: "Terrace seating surrounded by palms", w: 1600, h: 1068 },
  { src: "/images/mojito.jpg", alt: "Mint and lime cooler being poured", w: 1280, h: 1600 },
];
