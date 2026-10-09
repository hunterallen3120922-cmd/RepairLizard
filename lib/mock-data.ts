// ─────────────────────────────────────────────────────────────────────────────
// FAKE SAMPLE DATA — only used while we build the frontend.
// In the backend step every function below gets replaced by a real Supabase
// query, and this file gets deleted.
// ─────────────────────────────────────────────────────────────────────────────
import type { JobStatus, ServiceOption } from "./constants";

export type Shop = {
  id: string;
  name: string;
  slug: string;
  contactEmail: string;
};

export type Job = {
  id: string;
  shopId: string;
  jobNumber: number;
  publicToken: string;
  customerName: string;
  deviceType: string;
  deviceModel: string;
  problemDescription: string;
  serviceOption: ServiceOption;
  status: JobStatus;
  createdAt: string;
};

export const mockShop: Shop = {
  id: "shop-1",
  name: "Hunter PC Builds",
  slug: "hunterpcbuilds",
  contactEmail: "hunter@example.com",
};

export const mockJobs: Job[] = [
  {
    id: "job-5",
    shopId: "shop-1",
    jobNumber: 1005,
    publicToken: "5b2f9c1e-7d4a-4e8b-9f3c-2a6d8e1b1005",
    customerName: "Maria Lopez",
    deviceType: "Laptop",
    deviceModel: "Dell XPS 13",
    problemDescription: "Won't turn on after a coffee spill.",
    serviceOption: "drop_off",
    status: "received",
    createdAt: "2026-10-08T15:20:00Z",
  },
  {
    id: "job-4",
    shopId: "shop-1",
    jobNumber: 1004,
    publicToken: "a91c3e5f-2b7d-4c6e-8a1f-9d3b5c7e1004",
    customerName: "Jamal Carter",
    deviceType: "Console",
    deviceModel: "PS5",
    problemDescription: "HDMI port is loose, no picture on TV.",
    serviceOption: "meetup",
    status: "waiting_parts",
    createdAt: "2026-10-06T19:05:00Z",
  },
  {
    id: "job-3",
    shopId: "shop-1",
    jobNumber: 1003,
    publicToken: "c47e8a2d-9f1b-4d3c-a6e5-1b8f2d4a1003",
    customerName: "Priya Shah",
    deviceType: "Desktop",
    deviceModel: "Custom gaming PC",
    problemDescription: "Random blue screens when gaming.",
    serviceOption: "drop_off",
    status: "diagnosing",
    createdAt: "2026-10-04T12:40:00Z",
  },
  {
    id: "job-2",
    shopId: "shop-1",
    jobNumber: 1002,
    publicToken: "e83b6d4f-1a2c-4f7e-b9d8-3c5a7e9f1002",
    customerName: "Tom Nguyen",
    deviceType: "Phone",
    deviceModel: "iPhone 13",
    problemDescription: "Cracked screen, touch still works.",
    serviceOption: "meetup",
    status: "ready",
    createdAt: "2026-09-30T17:15:00Z",
  },
  {
    id: "job-1",
    shopId: "shop-1",
    jobNumber: 1001,
    publicToken: "f12a4c6e-8b3d-4a5f-9e7c-6d1b3f5a1001",
    customerName: "Sarah Kim",
    deviceType: "Laptop",
    deviceModel: "MacBook Air M1",
    problemDescription: "Running very slow, wants a cleanup.",
    serviceOption: "remote",
    status: "done",
    createdAt: "2026-09-25T10:00:00Z",
  },
];

// Pretend these slugs already belong to other shops, to test the "taken" message.
const takenSlugs = ["hunterpcbuilds", "fixitfast", "techrescue"];

export function getShopBySlug(slug: string): Shop | null {
  return slug === mockShop.slug ? mockShop : null;
}

export function getShopById(id: string): Shop | null {
  return id === mockShop.id ? mockShop : null;
}

export function getJobByToken(token: string): Job | null {
  return mockJobs.find((job) => job.publicToken === token) ?? null;
}

export function isSlugTaken(slug: string): boolean {
  return takenSlugs.includes(slug);
}
