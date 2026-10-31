export interface Curation {
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

import { toPublicId } from "@/data/images";

export interface Project {
  slug: string;
  title: string;
  location: string;
  completion?: string;
  status?: string;
  heroImage: string;
  description: string;
  interiorImages: string[];
  exteriorImages?: string[];
  curations: Curation[];
  isPlaceholder?: boolean;
}

function cld(...segments: string[]) {
  const root = segments.slice(0, -1).join("/");
  const file = segments[segments.length - 1];
  return toPublicId(`${root}/${file}`);
}

function rootFile(file: string) {
  return toPublicId(file);
}

const PLACEHOLDER_IMAGE = "floatingboxes2_wpxpwj";

const projectData: Project[] = [
// 01. Tathastu, Woods Ville (Existing)
  {
    slug: "tathastu-woods-ville",
    title: "Tathastu",
    location: "Woods Ville, Vadodara",
    completion: "2025",
    heroImage: "/Project 1 /Screenshot 2026-09-16 at 9.06.45 PM.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "/Project 1 /Screenshot 2026-09-16 at 9.10.50 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.09.00 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.12.53 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.12.25 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.12.43 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.12.32 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.11.39 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.11.49 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.11.29 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.09.24 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.11.13 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.10.10 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.10.59 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.10.41 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.10.31 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.10.21 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.10.00 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.09.34 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.08.25 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.09.17 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.08.51 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.09.08 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.08.42 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.07.48 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.06.45 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.08.07 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.05.49 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.08.15 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.07.39 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.07.58 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.07.28 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.07.08 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.06.59 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.07.18 PM.png",
      "/Project 1 /Screenshot 2026-09-16 at 9.06.28 PM.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 02. The Hanging Pyramids (Existing)
  {
    slug: "our-project-p2",
    title: "The Hanging Pyramids",
    location: "Woods Ville, Vadodara",
    completion: "2025",
    heroImage: "/Project 2/Screenshot 2026-09-17 at 11.37.35 AM.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "/Project 2/Screenshot 2026-09-17 at 11.38.06 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.43.38 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.37.35 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.43.54 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.44.25 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.44.17 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.43.46 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.44.10 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.43.20 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.42.53 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.42.45 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.41.58 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.41.50 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.41.42 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.41.32 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.42.37 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.39.02 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.40.01 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.39.20 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.39.28 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.38.45 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.38.53 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.38.38 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.38.13 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.37.49 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.43.11 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.44.02 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.43.02 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.42.14 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.42.29 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.42.06 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.39.35 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.41.15 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.41.22 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.40.09 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.41.06 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.40.51 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.39.53 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.40.58 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.40.30 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.40.37 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.40.22 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.39.45 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.37.26 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.37.42 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.38.29 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.39.11 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.37.57 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.38.20 AM.png",
      "/Project 2/Screenshot 2026-09-17 at 11.43.28 AM.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 03. Cafe Lemon (Existing)
  {
    slug: "cafe-lemon",
    title: "Cafe Lemon",
    location: "Khanpur, Vadodara",
    completion: "2025",
    status: "Ongoing",
    heroImage: "/Project 3 /IMG_4858.png",
    description:
      "A commercial hospitality space crafted with intention and character. Every detail—from the material palette to the ambient illumination—is designed to create an inviting, memorable environment.",
    interiorImages: [
      "/Project 3 /IMG_4886.jpeg",
      "/Project 3 /IMG_4885.png",
      "/Project 3 /IMG_4884.png",
      "/Project 3 /IMG_4871.png",
      "/Project 3 /IMG_4872.png",
      "/Project 3 /IMG_4882.png",
      "/Project 3 /IMG_4881.png",
      "/Project 3 /IMG_4866.png",
      "/Project 3 /IMG_4864.png",
      "/Project 3 /IMG_4865.png",
      "/Project 3 /IMG_4859.png",
      "/Project 3 /IMG_4880.png",
      "/Project 3 /IMG_4857.png",
      "/Project 3 /IMG_4858.png",
      "/Project 3 /IMG_4879.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 04. The Cottage House
  {
    slug: "cottage-house",
    title: "The Cottage House",
    location: "",
    completion: "2025",
    status: "Completed",
    heroImage: "/Project 4 /Screenshot 2026-09-16 at 9.55.00 PM.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "/Project 4 /Screenshot 2026-09-16 at 9.52.55 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.55.00 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.53.42 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.54.47 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.54.16 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.54.08 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.54.34 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.54.27 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.53.55 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.53.22 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.53.03 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.53.12 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.52.42 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.53.28 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.52.35 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.52.28 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.52.20 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.52.09 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.53.35 PM.png",
      "/Project 4 /Screenshot 2026-09-16 at 9.54.40 PM.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 05. Villa Hacienda (Existing)
  {
    slug: "our-project-p3",
    title: "Villa Hacienda",
    location: "Sherkhi, Vadodara",
    completion: "2022",
    heroImage: "/Project 5/Screenshot 2026-09-16 at 11.14.25 PM.webp",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "/Project 5/Screenshot 2026-09-16 at 11.13.27 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.13.19 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.13.04 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.12.33 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.12.24 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.13.35 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.13.42 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.13.50 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.13.57 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.14.05 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.12.56 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.13.12 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.14.12 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.14.25 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.12.42 PM.png",
      "/Project 5/Screenshot 2026-09-16 at 11.12.49 PM.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 06. Resort Halol
  {
    slug: "resort-halol",
    title: "Resort Halol",
    location: "Halol, Gujarat",
    heroImage: "/Project 6/ChatGPT Image Sep 15, 2026 at 03_33_36 PM.webp",
    description: "",
    interiorImages: [
      "/Project 6/ChatGPT Image Sep 15, 2026 at 03_31_18 PM.png",
      "/Project 6/ChatGPT Image Sep 15, 2026 at 03_31_29 PM.png",
      "/Project 6/ChatGPT Image Sep 15, 2026 at 03_31_41 PM.png",
      "/Project 6/ChatGPT Image Sep 15, 2026 at 03_33_26 PM.png",
      "/Project 6/ChatGPT Image Sep 15, 2026 at 03_33_36 PM.png",
      "/Project 6/ChatGPT Image Sep 15, 2026 at 03_39_16 PM.png",
      "/Project 6/IMG_3868.png",
      "/Project 6/IMG_3873.png",
      "/Project 6/IMG_3875.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 07. Saanidhya Greens
  {
    slug: "saanidhya-greens",
    title: "Saanidhya Greens",
    location: "Hansapura, Vadodara",
    heroImage: "/Project 7/IMG_6060.webp",
    description: "",
    interiorImages: [
      "/Project 7/IMG_6060.webp",
      "/Project 7/IMG_6065.webp",
      "/Project 7/IMG_6059.webp",
      "/Project 7/IMG_6058.webp",
    ],
    curations: [],
    isPlaceholder: false,
  },

  {
    slug: "sama-residence",
    title: "Shah's Residence",
    location: "Sama, Vadodara",
    heroImage: "/Project 8/Screenshot 2026-09-16 at 11.59.43 PM.webp",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "/Project 8 /Screenshot 2026-09-16 at 11.59.08 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.59.43 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.59.22 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.59.02 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.59.57 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.58.55 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.59.38 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.58.19 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.59.14 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.58.26 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.58.49 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.58.40 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.57.59 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.58.09 PM.png",
      "/Project 8 /Screenshot 2026-09-16 at 11.58.32 PM.png",
      "/Project 8 /Screenshot 2026-09-17 at 12.00.18 AM.png",
      "/Project 8 /Screenshot 2026-09-17 at 12.00.04 AM.png",
      "/Project 8 /Screenshot 2026-09-17 at 12.00.12 AM.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 09. Shah's Dream Home
  {
    slug: "shahs-dream-home",
    title: "Shah's Dream Home",
    location: "Suramya Altis, Vadodara",
    heroImage: "/Project 9/LR_MKGs-58.webp",
    description: "",
    interiorImages: [
      "/Project 9/LR_MKGs-78.jpg",
      "/Project 9/LR_MKGs-77.jpg",
      "/Project 9/LR_MKGs-76.jpg",
      "/Project 9/LR_MKGs-75.jpg",
      "/Project 9/LR_MKGs-74.jpg",
      "/Project 9/LR_MKGs-73.jpg",
      "/Project 9/LR_MKGs-69.jpg",
      "/Project 9/LR_MKGs-68.jpg",
      "/Project 9/LR_MKGs-67.jpg",
      "/Project 9/LR_MKGs-62.jpg",
      "/Project 9/LR_MKGs-61.jpg",
      "/Project 9/LR_MKGs-60.jpg",
      "/Project 9/LR_MKGs-56.jpg",
      "/Project 9/LR_MKGs-55.jpg",
      "/Project 9/LR_MKGs-53.jpg",
      "/Project 9/LR_MKGs-63.jpg",
      "/Project 9/LR_MKGs-59.jpg",
      "/Project 9/LR_MKGs-66.jpg",
      "/Project 9/LR_MKGs-64.jpg",
      "/Project 9/LR_MKGs-65.jpg",
      "/Project 9/LR_MKGs-50.jpg",
      "/Project 9/LR_MKGs-46.jpg",
      "/Project 9/LR_MKGs-47.jpg",
      "/Project 9/LR_MKGs-51.jpg",
      "/Project 9/LR_MKGs-41.jpg",
      "/Project 9/LR_MKGs-39.jpg",
      "/Project 9/LR_MKGs-38.jpg",
      "/Project 9/LR_MKGs-37.jpg",
      "/Project 9/LR_MKGs-36.jpg",
      "/Project 9/LR_MKGs-31.jpg",
      "/Project 9/LR_MKGs-32.jpg",
      "/Project 9/LR_MKGs-34.jpg",
      "/Project 9/LR_MKGs-33.jpg",
      "/Project 9/LR_MKGs-52.jpg",
      "/Project 9/LR_MKGs-44.jpg",
      "/Project 9/LR_MKGs-42.jpg",
      "/Project 9/LR_MKGs-43.jpg",
      "/Project 9/LR_MKGs-30.jpg",
      "/Project 9/LR_MKGs-28.jpg",
      "/Project 9/LR_MKGs-27.jpg",
      "/Project 9/LR_MKGs-25.jpg",
      "/Project 9/LR_MKGs-24.jpg",
      "/Project 9/LR_MKGs-22.jpg",
      "/Project 9/LR_MKGs-21.jpg",
      "/Project 9/LR_MKGs-20.jpg",
      "/Project 9/LR_MKGs-17.jpg",
      "/Project 9/LR_MKGs-14.jpg",
      "/Project 9/LR_MKGs-16.jpg",
      "/Project 9/LR_MKGs-10.jpg",
      "/Project 9/LR_MKGs-9.jpg",
      "/Project 9/LR_MKGs-8.jpg",
      "/Project 9/LR_MKGs-7.jpg",
      "/Project 9/LR_MKGs-6.jpg",
      "/Project 9/LR_MKGs-11.jpg",
      "/Project 9/LR_MKGs-13.jpg",
      "/Project 9/LR_MKGs-15.jpg",
      "/Project 9/LR_MKGs-18.jpg",
      "/Project 9/LR_MKGs-19.jpg",
      "/Project 9/LR_MKGs-23.jpg",
      "/Project 9/LR_MKGs-26.jpg",
      "/Project 9/LR_MKGs-29.jpg",
      "/Project 9/LR_MKGs-35.jpg",
      "/Project 9/LR_MKGs-40.jpg",
      "/Project 9/LR_MKGs-45.jpg",
      "/Project 9/LR_MKGs-48.jpg",
      "/Project 9/LR_MKGs-54.jpg",
      "/Project 9/LR_MKGs-57.jpg",
      "/Project 9/LR_MKGs-58.jpg",
      "/Project 9/LR_MKGs-70.jpg",
      "/Project 9/LR_MKGs-71.jpg",
      "/Project 9/LR_MKGs-72.jpg"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 10. Bhoiwala's Residence
  {
    slug: "bhoiwala",
    title: "Bhoiwala's Residence",
    location: "",
    heroImage: "/Project 10/1.webp",
    description: "",
    interiorImages: [
      "/Project 10/1.webp",
      "/Project 10/2.webp",
      "/Project 10/4.webp",
      "/Project 10/5.webp",
      "/Project 10/6.webp"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 11. The Grid Residence
  {
    slug: "the-grid-residence",
    title: "The Grid Residence",
    location: "Vadodara",
    status: "Ongoing",
    heroImage: "/Project 11/IMG_4753.png",
    description: "",
    interiorImages: [
      "/Project 11/IMG_4749.png",
      "/Project 11/IMG_4753.png",
      "/Project 11/IMG_4755.png",
      "/Project 11/IMG_4756.png",
      "/Project 11/IMG_4757.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 11. Anhaya Store (Existing)
  {
    slug: "anhaya-store-kolhapur",
    title: "Anhaya Store",
    location: "Kolhapur",
    completion: "2022",
    heroImage: "/Project 12/Screenshot 2026-09-17 at 9.49.10 AM.webp",
    description:
      "A retail space designed to immerse visitors in a world of curated experiences. Every detail—from the material palette to the lighting—has been crafted to elevate the shopping journey into something memorable.",
    interiorImages: [
      "/Project 12/Screenshot 2026-09-17 at 9.47.00 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.47.40 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.47.56 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.48.06 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.48.15 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.48.33 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.48.43 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.48.51 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.49.00 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.49.10 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.49.19 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.49.30 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.49.39 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.49.47 AM.png",
      "/Project 12/Screenshot 2026-09-17 at 9.49.55 AM.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 13. The Walnut Residence (Existing)
  {
    slug: "ankur-bhai",
    title: "The Walnut Residence",
    location: "Vadodara",
    heroImage: "/Project 13/BPD_1156.webp",
    description:
      "Rooted in the idea of openness, the residence dissolves boundaries between spaces through flowing forms, natural illumination, and carefully framed moments of connection. Warm minimalism, layered textures, and an abundance of daylight create a home that feels both serene and vibrant.",
    interiorImages: [
      "/Project 13/BPD_0902 - Copy.webp",
      "/Project 13/BPD_0945.webp",
      "/Project 13/BPD_0974.webp",
      "/Project 13/BPD_0982.webp",
      "/Project 13/BPD_1129.webp",
      "/Project 13/BPD_1134.webp",
      "/Project 13/BPD_1156.webp",
      "/Project 13/BPD_1172.webp",
      "/Project 13/BPD_1187.webp"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 14. The Floating Boxes (Existing)
  {
    slug: "our-project-p1",
    title: "The Floating Boxes",
    location: "Vemali, Vadodara",
    completion: "2020",
    status: "Completed",
    heroImage: "/Project 14/Screenshot 2026-09-16 at 10.09.52 PM.webp",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "/Project 14/Screenshot 2026-09-16 at 10.09.45 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.09.52 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.09.59 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.10.07 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.10.15 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.10.25 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.10.36 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.10.45 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.10.54 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.11.29 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.12.44 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.12.51 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.12.58 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.13.06 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.13.16 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.13.24 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.13.32 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.13.39 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.13.56 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.14.03 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.14.16 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.14.23 PM.webp",
      "/Project 14/Screenshot 2026-09-16 at 10.14.33 PM.webp"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 15. Ishaanti
  {
    slug: "ishaanti",
    title: "Ishaanti Group",
    location: "Harni, Vadodara",
    status: "Ongoing",
    heroImage: "/Project 15/IMG_6295.webp",
    description: "",
    interiorImages: [
      "/Project 15/IMG_6295.webp",
      "/Project 15/IMG_6296.webp",
      "/Project 15/IMG_6298.webp",
      "/Project 15/IMG_6299.webp"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 16. The Courtyard Estate (Existing)
  {
    slug: "kolhapur",
    title: "The Courtyard Estate",
    location: "Kolhapur",
    status: "Ongoing",
    heroImage: "/Project 16/40cc7527-beb5-448f-8fe0-36044e29fd9d.webp",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "/Project 16/40cc7527-beb5-448f-8fe0-36044e29fd9d.webp",
      "/Project 16/50ff5272-b0b8-4412-bf31-5a461466cedd.webp",
      "/Project 16/5e25c365-fb4d-4063-a64d-a2340cf0295b.webp",
      "/Project 16/b2055604-9676-466a-a033-81e2d51516a7.webp"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 16. The Ivory House (Existing)
  {
    slug: "birens-villa",
    title: "The Ivory House",
    location: "Vadodara",
    heroImage: "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_3840/f_auto/q_auto/v1/biren-s-villa/image-2?_a=BAVT+ODY0",
    description:
      "A distinctive residence shaped around light, scale, and the rhythm of everyday living. Generous volumes and carefully curated textures come together to create a home that feels both grounded and effortlessly elegant.",
    interiorImages: [
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-2?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-3?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-4?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-5?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-6?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-7?_a=BAVT+ODY0"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 17. The Skyhigh Retreat (Existing)
  {
    slug: "our-project-p4",
    title: "The Skyhigh Retreat",
    location: "Vadodara",
    heroImage: "/Project 18/SRA_6663-Edit.webp",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "/Project 18/SRA_6177-Edit.jpg",
      "/Project 18/SRA_6226-Edit.jpg",
      "/Project 18/SRA_6240-Edit.jpg",
      "/Project 18/SRA_6247-Edit.jpg",
      "/Project 18/SRA_6262-Edit.jpg",
      "/Project 18/SRA_6297-Edit.jpg",
      "/Project 18/SRA_6322-Edit.jpg",
      "/Project 18/SRA_6351-Edit.jpg",
      "/Project 18/SRA_6365-Edit.jpg",
      "/Project 18/SRA_6372-Edit.jpg",
      "/Project 18/SRA_6379-Edit.jpg",
      "/Project 18/SRA_6386-Edit.jpg",
      "/Project 18/SRA_6393-Edit.jpg",
      "/Project 18/SRA_6420-Edit.jpg",
      "/Project 18/SRA_6452-Edit.jpg",
      "/Project 18/SRA_6461-Edit.jpg",
      "/Project 18/SRA_6468-Edit.jpg",
      "/Project 18/SRA_6482-Edit.jpg",
      "/Project 18/SRA_6496-Edit.jpg",
      "/Project 18/SRA_6503-Edit.jpg",
      "/Project 18/SRA_6510-Edit.jpg",
      "/Project 18/SRA_6537-Edit.jpg",
      "/Project 18/SRA_6544-Edit.jpg",
      "/Project 18/SRA_6551-Edit.jpg",
      "/Project 18/SRA_6579-Edit.jpg",
      "/Project 18/SRA_6614-Edit.jpg",
      "/Project 18/SRA_6642-Edit.jpg",
      "/Project 18/SRA_6649-Edit.jpg",
      "/Project 18/SRA_6663-Edit.jpg",
      "/Project 18/SRA_6677-Edit.jpg",
      "/Project 18/SRA_6684-Edit.jpg",
      "/Project 18/SRA_6684-Edit1.jpg",
      "/Project 18/SRA_6684-Edit2.jpg",
      "/Project 18/SRA_6734-1.jpg",
      "/Project 18/SRA_6734.jpg",
      "/Project 18/SRA_6740-Edit.jpg",
      "/Project 18/SRA_6754-Edit.jpg",
      "/Project 18/SRA_6761-Edit.jpg",
      "/Project 18/SRA_6775-Edit.jpg",
      "/Project 18/SRA_6782-Edit.jpg",
      "/Project 18/SRA_6809-Edit.jpg",
      "/Project 18/SRA_6823-Edit.jpg",
      "/Project 18/SRA_6830-Edit.jpg",
      "/Project 18/SRA_6837-Edit.jpg",
      "/Project 18/SRA_6844-Edit.jpg",
      "/Project 18/SRA_6851-Edit.jpg",
      "/Project 18/SRA_6865-Edit.jpg",
      "/Project 18/SRA_6872-Edit.jpg",
      "/Project 18/SRA_6879-Edit.jpg",
      "/Project 18/SRA_6886-Edit.jpg",
      "/Project 18/SRA_6903-Edit.jpg",
      "/Project 18/SRA_6924-Edit.jpg"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 19. Tapas
  {
    slug: "tapas",
    title: "Tapas",
    location: "Vadodara",
    status: "Ongoing",
    heroImage: "/Project 19/IMG_6313.webp",
    description: "",
    interiorImages: [
      "/Project 19/IMG_6313.webp",
      "/Project 19/IMG_6315.webp",
      "/Project 19/IMG_6317.webp"
    ],
    curations: [],
    isPlaceholder: false,
  }
];

const localProjectNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19]);

function normalizeProjectAsset(src: string) {
  const match = src.match(/^\/project\s+(\d+)\s*\/(.+)$/i);
  if (!match) return src;

  const number = Number(match[1]);
  if (!localProjectNumbers.has(number)) return src;

  const filename = match[2].replace(/\.[A-Za-z0-9]+$/, "");
  const extension = number === 3 ? (match[2].toLowerCase().endsWith(".jpeg") ? ".jpeg" : ".png") : ".webp";
  return `/Project ${number}${number === 3 ? " " : ""}/${filename}${extension}`;
}

export const projects: Project[] = projectData.map((project) => ({
  ...project,
  heroImage: normalizeProjectAsset(project.heroImage),
  interiorImages: project.interiorImages.map(normalizeProjectAsset),
  exteriorImages: project.exteriorImages?.map(normalizeProjectAsset),
  curations: project.curations.map((curation) => ({
    ...curation,
    image: normalizeProjectAsset(curation.image),
  })),
}));

export function getProjectBySlug(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  if (!project || project.isPlaceholder) return null;
  return project;
}

export function getProjectSlugs() {
  return projects.filter((p) => !p.isPlaceholder).map((p) => p.slug);
}
