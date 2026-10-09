// Photos of real builds shown on the landing page.
// Importing the files (instead of using a "/builds/..." string) lets Next.js
// know each photo's size and make a blurry preview while it loads.
import type { StaticImageData } from "next/image";
import build01 from "@/public/builds/build-01.jpg";
import build02 from "@/public/builds/build-02.jpg";
import build03 from "@/public/builds/build-03.jpg";
import build04 from "@/public/builds/build-04.jpg";
import build05 from "@/public/builds/build-05.jpg";
import build06 from "@/public/builds/build-06.jpg";
import build07 from "@/public/builds/build-07.jpg";
import build08 from "@/public/builds/build-08.jpg";
import build09 from "@/public/builds/build-09.jpg";
import build10 from "@/public/builds/build-10.jpg";
import build11 from "@/public/builds/build-11.jpg";
import build12 from "@/public/builds/build-12.jpg";
import build13 from "@/public/builds/build-13.jpg";
import build14 from "@/public/builds/build-14.jpg";
import build15 from "@/public/builds/build-15.jpg";

export type BuildPhoto = {
  src: StaticImageData;
  // Describes the photo for people using screen readers (and for search engines).
  alt: string;
};

export const heroPhoto: BuildPhoto = {
  src: build01,
  alt: "Dual-chamber glass PC build with blue fans and an EVGA GeForce RTX graphics card",
};

export const galleryPhotos: BuildPhoto[] = [
  { src: build02, alt: "Glass cube PC with rainbow fans and an EVGA GeForce GTX 1660" },
  { src: build03, alt: "Tall black glass case with red fan lighting and an ASUS TUF graphics card" },
  { src: build04, alt: "Zalman glass case with red fans and an AMD Wraith CPU cooler" },
  { src: build05, alt: "HYXN glass case with white fans, a Cooler Master cooler, and a Gigabyte RTX card" },
  { src: build06, alt: "Compact case with a Thermalright liquid cooler and T-Force RGB memory" },
  { src: build07, alt: "EVGA liquid cooler lit purple beside red fans and a Gigabyte RTX card" },
  { src: build08, alt: "Close-up of a blue-lit CPU cooler above a GeForce RTX Super card" },
  { src: build09, alt: "Purple-lit tower cooler next to a GeForce GTX 1660" },
  { src: build10, alt: "Rainbow fans and CPU cooler above a GeForce GTX card" },
  { src: build11, alt: "MSI Twin Frozr 7 graphics card glowing purple over orange fans" },
  { src: build12, alt: "Angled view of an MSI graphics card with rainbow fans" },
  { src: build13, alt: "Red-lit CPU cooler surrounded by case fans" },
  { src: build14, alt: "Dual-chamber glass PC with rainbow fans, a liquid cooler screen, and an MSI GeForce RTX" },
  { src: build15, alt: "Blue-lit mid-tower PC with a GeForce RTX card next to a monitor" },
];
