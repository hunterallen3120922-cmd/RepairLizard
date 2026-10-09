// Shared lists and limits used across the app.
// Keeping them in one place means the form, the dashboard, and (later) the
// server-side validation all agree.

export const APP_NAME = "Repair Tracker";

export const DEVICE_TYPES = [
  "Laptop",
  "Desktop",
  "Phone",
  "Tablet",
  "Console",
  "Other",
] as const;

export const SERVICE_OPTIONS = [
  { value: "drop_off", label: "Drop-off", description: "I'll bring the device to you" },
  { value: "meetup", label: "Meetup", description: "Let's meet somewhere to hand it over" },
  { value: "remote", label: "Remote", description: "Fix it over a remote connection" },
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number]["value"];

// Matches the job_status enum in the database.
export const JOB_STATUS_LABELS = {
  received: "Received",
  diagnosing: "Diagnosing",
  awaiting_approval: "Awaiting approval",
  waiting_parts: "Waiting for parts",
  repairing: "Repairing",
  ready: "Ready for pickup",
  done: "Done",
  cancelled: "Cancelled",
} as const;

export type JobStatus = keyof typeof JOB_STATUS_LABELS;

export const PHOTO_LIMITS = {
  maxCount: 5,
  maxBytes: 10 * 1024 * 1024, // 10 MB
  // What the file picker offers. HEIC is the iPhone photo format.
  accept: "image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif",
  allowedTypes: ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"],
  allowedExtensions: ["jpg", "jpeg", "png", "webp", "heic", "heif"],
};

// Slugs that would clash with our own pages, so no shop can claim them.
export const RESERVED_SLUGS = [
  "admin",
  "api",
  "app",
  "dashboard",
  "help",
  "job",
  "login",
  "logout",
  "onboarding",
  "r",
  "settings",
  "signup",
  "support",
  "www",
];
