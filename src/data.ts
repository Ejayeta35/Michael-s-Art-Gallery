export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  status: 'Available' | 'Sold' | 'Private Collection';
  url: string;
  description: string;
  aspectRatio: string; // Tailwind aspect class
}

export interface Exhibition {
  year: string;
  title: string;
  venue: string;
  location: string;
}

export interface CVData {
  solo: Exhibition[];
  group: Exhibition[];
}

export interface ArtistInfo {
  name: string;
  birthYear: string;
  biography: string[];
  statementQuote: string;
  statementDetail: string;
  portraitUrl: string;
  portraitCredit: string;
  portraitYear: string;
}

export const artistInfo: ArtistInfo = {
  name: "Aurelian",
  birthYear: "1988",
  biography: [
    "Born in 1988, Aurelian is a contemporary multidisciplinary artist whose practice explores the intersection of digital ephemerality and classical weight. Based in a sun-drenched studio in the heart of Berlin, their work has become synonymous with a new era of 'Digital Minimalism'—a movement that seeks to find the soul within the machine.",
    "Aurelian's journey began at the Royal College of Art, where they initially trained in traditional sculpture. This tactile foundation remains evident in the perceived 'heaviness' and structural integrity of their digital installations and oil-on-canvas works alike."
  ],
  statementQuote: "I am interested in the moments of silence between data points. My work aims to create a physical space for contemplation in an increasingly accelerated world.",
  statementDetail: "The canvas is not just a surface for paint; it is a repository for time. Each stroke is a measurement of a breath, an intentional refusal of the instantaneous. By stripping away the decorative, I reveal the structural truth of the subject.",
  portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEwDFHuWeCOXBi3lOSILdQ6BcqAfr_ELaDf7BDok1fz94CyUWvs_sRqVhzc0NHzVcjmM9U2xxZ7WY2U3-ZtKRXYiaYr3Uhf9HpODtAP58vv8PuVPNXXaLDL7RyATgMSP0BDU8CxpzOYZ4q6bEK5An3NsVDPxnRhz8FGNnj8PSIcpMMaT2EtpU8lGGLzHleSZRJUe2mIWrZixZNEmDC7zQP4SYFub0omCfrarqtyX2JUhEY98-mY9LhvGZLue97Rv_tbvmOVKFM04Q",
  portraitCredit: "Julian Thorne",
  portraitYear: "2024"
};

export const artworks: Artwork[] = [
  {
    id: "the-obsidian-tide",
    title: "The Obsidian Tide",
    year: "2023",
    medium: "Oil on Belgian Linen with Gold Leaf",
    dimensions: "140 x 180 cm",
    status: "Available",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ygiqTPkEnB-pnlfQanhPrv_XD1XN_XqtdpUSy-li9njojkKF7KtC9DkScvSSGI4NaRk4zE0BPV7rK46lmqi9nD3WM6nYwxqUdmFU6HGL47xZ9CPkjPjqIscugHQKa5yLfBrDPU_0ySK1AFpOLk0YzgtknxMSdAkimOxbhx_m9MXdozSEWMmmXSnSlRg_ac_j2hvcoYN14k7SxniqSy47CktzUpCy5Oy824U7g_hugJr4tveoongW8nMBzFUDF4JYrtX6Tf1KcPI",
    description: "A large-scale abstract oil painting featuring deep, heavy impasto strokes of midnight black and dark charcoal, with thin veins of shimmering gold leaf appearing to crack through the surface.",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "ethereal-fragment-iv",
    title: "Ethereal Fragment IV",
    year: "2024",
    medium: "Mixed Media, Beeswax and Ink on Wood",
    dimensions: "90 x 90 cm",
    status: "Private Collection",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyTWdG5EUvU03Iiu6DToZ5nUomYnsaYAoW0PAAbcSenhNeqoDnmq8RG8xQvsOjkNy38mIWP6QME7YTaNHTbTLw9BOVNCKncgmh6sGAUTgHxeE0j_4siGVrAOF4xXvMBWm5IiSgkTRfHb-yEk6L7Ka-KhsmxzQO1-NofZjGc9vFu6SGsak7MFNIRYUHNaqfkkikEs1lcYEaXiHmlbYHCcvWfJ3WBeiESRo7Ffo_x2Eq6LTFpzUxMtuFAp1cBwrqqMve5pPosMhBS9w",
    description: "A square mixed media artwork combining translucent layers of beeswax, torn archival paper, and faint pencil sketches of anatomical structures. Muted whites, creams, and slate grey.",
    aspectRatio: "aspect-square"
  },
  {
    id: "vestige-of-sun",
    title: "Vestige of Sun",
    year: "2022",
    medium: "Oil on Fine Canvas",
    dimensions: "120 x 150 cm",
    status: "Available",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJb56IhA2IUGwmkUtjxZ7Lzhhk3438rCeftj8O5Z-mawOBYvYRD-uvJ8ZzA56t8VmWq1NetK8mAKgMoCT9cSapj4ghy2zGSpfj6HGqZGrLtTQRoGzbTEYjtcvLUUpnjAwsTIO_C2Q8HSuHzomIyzIRkT69EKJUWmSzKpE_NUOYNy62118UBF3gsI_-gxINWUGizyGeMZWpwaFiRKLIRTjFtTuXZZ4roRJhYfdbk5xACee7GvOvgEUUg5bEoI91mWaXe45aWYcKF80",
    description: "A portrait-oriented oil painting depicting a highly abstracted landscape where a burning ochre horizon line bleeds into a vast, hazy white sky.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "monolith-no-9",
    title: "Monolith No. 9",
    year: "2023",
    medium: "Concrete, Oil and Lead",
    dimensions: "60 x 80 cm",
    status: "Available",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiZNpEKFoGmsE5-5wGtbLRoK6DF97dOwQC-cZ_RPe464B8ZxDvHrqpsOSxtfNcr6G6_m8UgAaVD_15F-vSpyNCZ-7tRs1sB9uNjsnjLBvRbzvD2fwjNg_Dg1UjyBTd8ZCilm-QUkDqwmhUbqBE1fpNEEDOCO_QU-aDnSJREPNxUqdIVNuQNbqW32d5IDUOW38_5gfZUq55nnLuWOyXiGYcYk0Z9Se_WpvudAYasP_YPzBKWGPsX7r-VEwQ5dxjFcafc1JolGhasx0",
    description: "A textural mixed media piece featuring a central vertical rectangular form made of raw, pitted concrete surrounded by deep indigo oil paint with lead wire.",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "silence-in-graphite",
    title: "Silence in Graphite",
    year: "2024",
    medium: "Oil and Cold Wax",
    dimensions: "100 x 100 cm",
    status: "Available",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpOYRwQtEznHhrz4AOIdV0g3p13RWvn655O8jQxySL81MT69T0y_XaR5gediReWUr4tP_5INX4zrZQqjD1BGXJyT_jKv0VolYGnIlsef946x68uIFRx0Xlk7_Q9C_Qula2Xorkt9fiNy_ff09NR4FasXjy7mt-f99g_5rVEJVlaV-tOrYm3S-kyQT_VWsCkEQJ1YIeZnFCr3Fnv10bcEzGLOH0TwhBVPfYvenvheFtd3S5KtPBttQMZeRkn3m8iHM8J3u0wb7ka0w",
    description: "An abstract square painting using oil and cold wax to create a deeply layered, matte surface of varying shades of grey and off-white with vertical scratch marks.",
    aspectRatio: "aspect-square"
  },
  {
    id: "lunar-cartography",
    title: "Lunar Cartography",
    year: "2023",
    medium: "Ink, Gesso and Sand",
    dimensions: "160 x 120 cm",
    status: "Sold",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkeidK1cBtiivgtSFfX2FBL7-OoR4wsaf6HmSLDSELTBn7c6hTV0LuSSLu3MUx5chLQ7ynR6Tv7Z34u8Tz09zhnwwGisZXTB2MJKpevS4zdQF07aJx3E6uHWAr1Wz0gj2gLBksOctYnB4kVUrUNq6gseUidvw4Z0mdc_mmA3pgX58P1HlZk7BpvQ211vMtDU01XoSAM7B3afg_81XWcaaimDbJUSUYkHCHuUcdtdu0tlQ81K2fmD5jgh6fD9tokwYe032P1GHwokE",
    description: "A large horizontal mixed media artwork with White Gesso and fine sand, resembling a topographical map of the moon with delicate black ink lines wandering across the surface.",
    aspectRatio: "aspect-[3/4]"
  }
];

export const cvData: CVData = {
  solo: [
    { year: "2023", title: "Vessels of Light", venue: "Gagosian", location: "London" },
    { year: "2021", title: "Binary Soul", venue: "Haus der Kunst", location: "Munich" },
    { year: "2019", title: "The White Cube Sessions", venue: "Whitney Museum", location: "NYC" }
  ],
  group: [
    { year: "2024", title: "Modern Echoes", venue: "Tate Modern", location: "London" },
    { year: "2022", title: "Venice Biennale", venue: "Central Pavilion", location: "Venice" },
    { year: "2020", title: "Future Echoes", venue: "Art Basel", location: "Switzerland" }
  ]
};

export const ambientImages: string[] = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjzvqaz95VvkQkon6oN1DhTQMLcbj8Z5FpzmEB3O2yaxAzzQicN8o5NIruiiY18_9we14cdezAJ4NXafeAp6t-1PuMZQpUu8JCKxKj0ywppnTQxHwROpWp7rNIL8654xPF2xeu3q6TQo4kaVurbqyxp-L_7v-A5XOKykMBEXT8y7ghf_5Op4sW5bB7TQ1YaCU2btAI1g9YHvVF6YaBd23NBlwGXRoKo5dBYnbYncJHxedb1Zm7VRt-QdI4TtWhDoRLFnJFpMUbbkQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDE04vKNIA2wPGq4-qh4DaoOR9mcuDugEq8vzgT-ZidM2fYPuogiVqd0Wa4BG7b-H_YtNGJqkdeQOqwbtdu549eio5v7HQhHLP8CiW5taSDBu3y83akXq0tOmVhtPTuCMUxFotbx4hTCaE-fZr_ruuSJhlabyehQEdAufM-CMYHh27LMw7eTlranKQ08VXGQAQvGDBb-2rsO7yN9AXJwKtTJrLKuyD9ZVvJ0xsstvDEqy05KjeAzeuBA0sOp5bu7z1iLjkIuPOFg5Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC56fJNXoV-cBRJtY6yDRFiEZDMYX-HkG439U3XI3XlEYuxqxWIUs4NIO9RgPdSwnmCzdBeXNb1h5RyXWpVefcSQ6VeNeZCb6otcEmxVIUcD2m9h4ltG8cOxDNn9A3PXCpq_cru4bhVd223P8gYs4haCpCsIGFkEQ1HDnnDnF5PdDUrcXmRXqqe3wD-qRSQuFH8Xoy5pfGn8Z7mkYKsEMc69TNF2xNHZdec1xXo4pbRIz6iNT2fcJdZJMNhpprcty6YchzmDvU74wY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBoL-rZmndzNehHXiQPJxvDEwESRzj3IdETQ8LRAHrBlKFcnD0pnnDO7NMvecFRoScVglEk9bbWPCluwQCO_uWNEyG2KgJFG4Fld6vOmjt-tHOWwpYtkNPeeJ0NqMlSsA5tgSEzAxl7sPHTkdw3MBfnKtPzjS2KB2seESKYlTxg1A-kZ7T0nMfTIKhwks2KMFfhNXgKQCFNHFLNc_NLf5o2VYp4EwMxX2f4UjYm8kfZp6abbMigHDln4bIae2gUm3DbnSpj2yJ6QwA"
];
