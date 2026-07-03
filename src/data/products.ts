export type ProductLine = "Originals" | "Mix & Thrill";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  long: string;
  healthFact?: string;
  line: ProductLine;
  image?: string;
  colors: {
    from: string;
    to: string;
    accent: string;
  };
}

export const products: Product[] = [
  {
    slug: "mango",
    name: "Mango Juice",
    tagline: "Sunshine in a Bottle",
    short:
      "Made from ripe, fibrous mangoes, thick and golden — the taste of peak summer, any day of the year.",
    long: "Fruvita Mango is built around one idea: the mango should taste like the mango, not like mango-flavored syrup. We use ripe, naturally sweet mangoes for a thick, golden juice with real pulp body.",
    healthFact:
      "Mangoes are rich in vitamin C and vitamin A, supporting immunity and skin health.",
    line: "Originals",
    image: "/products/mango.webp",
    colors: { from: "#ffc94a", to: "#ff8a1e", accent: "#f5620a" },
  },
  {
    slug: "guava",
    name: "Guava Juice",
    tagline: "The Everyday Superfruit",
    short:
      "Pink-fleshed guava, naturally tart-sweet, and packed with more vitamin C than an orange.",
    long: "Guava is one of the most nutrient-dense fruits around. Fruvita Guava keeps that natural tang intact instead of masking it with added sugar.",
    healthFact:
      "Guava juice can carry 200%+ of daily vitamin C value per serving — several times more than orange juice.",
    line: "Originals",
    image: "/products/guava.webp",
    colors: { from: "#ff8fae", to: "#ff2f6e", accent: "#d90d54" },
  },
  {
    slug: "orange",
    name: "Orange Juice",
    tagline: "Squeezed, Not Guessed",
    short: "Classic, tangy-sweet orange juice — no shortcuts, just real oranges.",
    long: "The one everybody knows and nobody should compromise on. Fruvita Orange is bright, tangy, and unmistakably real — a breakfast-table staple built for consistency, not gimmicks.",
    line: "Originals",
    image: "/products/orange.webp",
    colors: { from: "#ffd23f", to: "#ff9500", accent: "#f5620a" },
  },
  {
    slug: "litchi",
    name: "Lychee Juice",
    tagline: "Delicately Sweet, Deeply Refreshing",
    short:
      "Fragrant, floral, and lightly sweet — lychee juice is the quiet luxury of the Fruvita lineup.",
    long: "Litchi is prized for its delicate floral sweetness and is rich in vitamin C and polyphenol antioxidants. Fruvita Litchi captures that fragrance in a lightly sweet, refreshing juice.",
    healthFact:
      "Lychee is higher in polyphenol antioxidants than many common fruits like apples.",
    line: "Originals",
    image: "/products/litchi.webp",
    colors: { from: "#ffc2d6", to: "#ff9fb5", accent: "#e8567f" },
  },
  {
    slug: "pineapple",
    name: "Pineapple Juice",
    tagline: "Tropical, Uncut",
    short: "Bright, tangy pineapple juice with real tropical bite.",
    long: "Fruvita Pineapple brings the tang and brightness of fresh-cut pineapple, balancing sweetness with the fruit's natural acidity for a juice that wakes up the palate.",
    line: "Originals",
    image: "/products/pineapple.webp",
    colors: { from: "#f6ea3a", to: "#c4e600", accent: "#8fb800" },
  },
  {
    slug: "pomegranate",
    name: "Pomegranate Juice",
    tagline: "Bold. Ruby Red. Real.",
    short: "Deep, ruby-red pomegranate juice with a rich, slightly tart edge.",
    long: "Pomegranate has long been associated with heart health thanks to its antioxidant-rich profile. Fruvita Pomegranate is deep red, robust, and unapologetically bold.",
    line: "Originals",
    image: "/products/pomegranate.webp",
    colors: { from: "#e6244f", to: "#a3072f", accent: "#6e031f" },
  },
  {
    slug: "apple",
    name: "Apple Drink",
    tagline: "Crisp, Clean, Classic",
    short: "A crisp, lightly sweet apple drink — simple, familiar, and universally loved.",
    long: "Sometimes the classics are classics for a reason. Fruvita Apple Drink is clean, crisp, and easy-drinking — a dependable choice for kids and adults alike.",
    line: "Originals",
    image: "/products/apple.webp",
    colors: { from: "#e3f766", to: "#a9d92a", accent: "#5f9e1e" },
  },
  {
    slug: "peachy",
    name: "Peachy Juice",
    tagline: "Soft, Sweet, Sun-Ripened",
    short: "Smooth, fragrant peach juice with a naturally soft sweetness.",
    long: "Fruvita Peachy Juice is built around the fruit's natural, mellow sweetness and fragrance — a softer, rounder flavor profile than the citrus and tropical fruits in the lineup.",
    line: "Originals",
    colors: { from: "#ffcf9e", to: "#ff8a4c", accent: "#f5620a" },
  },
  {
    slug: "mixed-fruit",
    name: "Mixed Fruit Juice",
    tagline: "Everything Good, In One Glass",
    short: "A blend of orchard favorites in one bottle — balanced, never one-note.",
    long: "Can't pick just one? Fruvita Mixed Fruit blends multiple real fruits — mango, apple, orange and more — into a single balanced juice with layered flavor and no single overpowering note.",
    line: "Mix & Thrill",
    colors: { from: "#ff9500", to: "#ff2f6e", accent: "#9b2fd9" },
  },
  {
    slug: "cranberry-thrill",
    name: "Cranberry Thrill",
    tagline: "Tart Meets Bold",
    short: "Sharp, tart cranberry juice with a bold, grown-up edge.",
    long: "Cranberries bring a distinctive tartness that's less \"sweet treat,\" more \"wake-up call.\" Fruvita Cranberry Thrill is for the drinker who wants flavor with a bit of an edge.",
    healthFact: "Cranberries are well known for supporting urinary tract and antioxidant health.",
    line: "Mix & Thrill",
    colors: { from: "#e0184a", to: "#7a0326", accent: "#3a0716" },
  },
  {
    slug: "guava-thrill",
    name: "Guava Thrill",
    tagline: "Guava, Turned Up",
    short: "A bolder, sweeter spin on classic guava — for fans of intensity.",
    long: "Where Fruvita Guava Juice plays it classic, Guava Thrill turns up the intensity — a punchier, sweeter guava experience for a younger, bolder-flavor audience.",
    line: "Mix & Thrill",
    colors: { from: "#ff5c8a", to: "#ea0b52", accent: "#9b0a3d" },
  },
  {
    slug: "kiwi-kiss",
    name: "Kiwi Kiss",
    tagline: "A Little Tangy, A Little Sweet",
    short: "Bright green kiwi juice — tangy, sweet, and refreshingly different.",
    long: "Kiwi is an underused hero: tangy-sweet, vitamin C-rich, and visually striking with its green flesh and black seeds. Fruvita Kiwi Kiss brings something different to the shelf.",
    line: "Mix & Thrill",
    colors: { from: "#d4f23a", to: "#8fd400", accent: "#3fae49" },
  },
  {
    slug: "electric-peachy",
    name: "Electric Peachy Drink",
    tagline: "Peach, With a Buzz",
    short: "A brighter, fizzier take on peach — bold color, bold flavor.",
    long: "The \"Electric\" sub-variant of peach is built for standout shelf presence and a punchier flavor profile than the classic Peachy Juice — a fun, energetic alternative.",
    line: "Mix & Thrill",
    colors: { from: "#ffb020", to: "#ff3d8f", accent: "#d90d54" },
  },
];

export const originals = products.filter((p) => p.line === "Originals");
export const mixAndThrill = products.filter((p) => p.line === "Mix & Thrill");

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
