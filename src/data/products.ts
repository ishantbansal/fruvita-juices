export type ProductLine = "Originals" | "Mix & Thrill";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  long: string;
  healthFact?: string;
  line: ProductLine;
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
    colors: { from: "#f6a936", to: "#ee7f13", accent: "#c9660a" },
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
    colors: { from: "#f294a8", to: "#d94068", accent: "#ac2c4d" },
  },
  {
    slug: "orange",
    name: "Orange Juice",
    tagline: "Squeezed, Not Guessed",
    short: "Classic, tangy-sweet orange juice — no shortcuts, just real oranges.",
    long: "The one everybody knows and nobody should compromise on. Fruvita Orange is bright, tangy, and unmistakably real — a breakfast-table staple built for consistency, not gimmicks.",
    line: "Originals",
    colors: { from: "#ffb548", to: "#f2811a", accent: "#c9660a" },
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
    colors: { from: "#f9c3cc", to: "#f6a6b2", accent: "#d9788a" },
  },
  {
    slug: "pineapple",
    name: "Pineapple Juice",
    tagline: "Tropical, Uncut",
    short: "Bright, tangy pineapple juice with real tropical bite.",
    long: "Fruvita Pineapple brings the tang and brightness of fresh-cut pineapple, balancing sweetness with the fruit's natural acidity for a juice that wakes up the palate.",
    line: "Originals",
    colors: { from: "#f5d24b", to: "#e0b81f", accent: "#3f6b35" },
  },
  {
    slug: "pomegranate",
    name: "Pomegranate Juice",
    tagline: "Bold. Ruby Red. Real.",
    short: "Deep, ruby-red pomegranate juice with a rich, slightly tart edge.",
    long: "Pomegranate has long been associated with heart health thanks to its antioxidant-rich profile. Fruvita Pomegranate is deep red, robust, and unapologetically bold.",
    line: "Originals",
    colors: { from: "#c23a52", to: "#8c1f38", accent: "#5c1526" },
  },
  {
    slug: "apple",
    name: "Apple Drink",
    tagline: "Crisp, Clean, Classic",
    short: "A crisp, lightly sweet apple drink — simple, familiar, and universally loved.",
    long: "Sometimes the classics are classics for a reason. Fruvita Apple Drink is clean, crisp, and easy-drinking — a dependable choice for kids and adults alike.",
    line: "Originals",
    colors: { from: "#cfe08a", to: "#8fae3f", accent: "#3f6b35" },
  },
  {
    slug: "peachy",
    name: "Peachy Juice",
    tagline: "Soft, Sweet, Sun-Ripened",
    short: "Smooth, fragrant peach juice with a naturally soft sweetness.",
    long: "Fruvita Peachy Juice is built around the fruit's natural, mellow sweetness and fragrance — a softer, rounder flavor profile than the citrus and tropical fruits in the lineup.",
    line: "Originals",
    colors: { from: "#ffc9a3", to: "#f7935c", accent: "#c9660a" },
  },
  {
    slug: "mixed-fruit",
    name: "Mixed Fruit Juice",
    tagline: "Everything Good, In One Glass",
    short: "A blend of orchard favorites in one bottle — balanced, never one-note.",
    long: "Can't pick just one? Fruvita Mixed Fruit blends multiple real fruits — mango, apple, orange and more — into a single balanced juice with layered flavor and no single overpowering note.",
    line: "Mix & Thrill",
    colors: { from: "#f2811a", to: "#d94068", accent: "#3f6b35" },
  },
  {
    slug: "cranberry-thrill",
    name: "Cranberry Thrill",
    tagline: "Tart Meets Bold",
    short: "Sharp, tart cranberry juice with a bold, grown-up edge.",
    long: "Cranberries bring a distinctive tartness that's less \"sweet treat,\" more \"wake-up call.\" Fruvita Cranberry Thrill is for the drinker who wants flavor with a bit of an edge.",
    healthFact: "Cranberries are well known for supporting urinary tract and antioxidant health.",
    line: "Mix & Thrill",
    colors: { from: "#a3213a", to: "#6c1526", accent: "#2a2117" },
  },
  {
    slug: "guava-thrill",
    name: "Guava Thrill",
    tagline: "Guava, Turned Up",
    short: "A bolder, sweeter spin on classic guava — for fans of intensity.",
    long: "Where Fruvita Guava Juice plays it classic, Guava Thrill turns up the intensity — a punchier, sweeter guava experience for a younger, bolder-flavor audience.",
    line: "Mix & Thrill",
    colors: { from: "#ff6f91", to: "#c9184a", accent: "#7a0f30" },
  },
  {
    slug: "kiwi-kiss",
    name: "Kiwi Kiss",
    tagline: "A Little Tangy, A Little Sweet",
    short: "Bright green kiwi juice — tangy, sweet, and refreshingly different.",
    long: "Kiwi is an underused hero: tangy-sweet, vitamin C-rich, and visually striking with its green flesh and black seeds. Fruvita Kiwi Kiss brings something different to the shelf.",
    line: "Mix & Thrill",
    colors: { from: "#c7e05a", to: "#8fae3f", accent: "#3f6b35" },
  },
  {
    slug: "electric-peachy",
    name: "Electric Peachy Drink",
    tagline: "Peach, With a Buzz",
    short: "A brighter, fizzier take on peach — bold color, bold flavor.",
    long: "The \"Electric\" sub-variant of peach is built for standout shelf presence and a punchier flavor profile than the classic Peachy Juice — a fun, energetic alternative.",
    line: "Mix & Thrill",
    colors: { from: "#ff9a5a", to: "#ff5d8f", accent: "#c9184a" },
  },
];

export const originals = products.filter((p) => p.line === "Originals");
export const mixAndThrill = products.filter((p) => p.line === "Mix & Thrill");

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
