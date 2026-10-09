"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { fieldError, hint, input, label, primaryButton } from "@/components/ui";
import { DEVICE_TYPES, PHOTO_LIMITS, SERVICE_OPTIONS } from "@/lib/constants";
import { mockJobs } from "@/lib/mock-data";

type PickedPhoto = {
  file: File;
  // A temporary local URL so we can show a thumbnail. HEIC files can't be
  // previewed in most browsers, so those get a plain tile instead.
  previewUrl: string | null;
};

function fileExtension(name: string) {
  return name.split(".").pop()?.toLowerCase() ?? "";
}

// Returns an error message if this file isn't allowed, or null if it's fine.
function photoProblem(file: File): string | null {
  const typeOk =
    PHOTO_LIMITS.allowedTypes.includes(file.type) ||
    // Some phones don't report a type for HEIC photos, so fall back to the file extension.
    (file.type === "" && PHOTO_LIMITS.allowedExtensions.includes(fileExtension(file.name)));
  if (!typeOk) return `"${file.name}" isn't a supported image. Use JPG, PNG, WEBP, or HEIC.`;
  if (file.size > PHOTO_LIMITS.maxBytes) return `"${file.name}" is bigger than 10 MB.`;
  return null;
}

function isHeic(file: File) {
  return file.type.includes("heic") || file.type.includes("heif") || ["heic", "heif"].includes(fileExtension(file.name));
}

export function RequestForm({ slug }: { slug: string }) {
  const router = useRouter();
  const [photos, setPhotos] = useState<PickedPhoto[]>([]);
  const [photoErrors, setPhotoErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  function handlePhotosPicked(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files ?? []);
    e.target.value = ""; // so picking the same file again still triggers a change

    const errors: string[] = [];
    const added: PickedPhoto[] = [];
    for (const file of picked) {
      const problem = photoProblem(file);
      if (problem) {
        errors.push(problem);
      } else if (photos.length + added.length >= PHOTO_LIMITS.maxCount) {
        errors.push(`You can add up to ${PHOTO_LIMITS.maxCount} photos, so "${file.name}" was skipped.`);
      } else {
        added.push({ file, previewUrl: isHeic(file) ? null : URL.createObjectURL(file) });
      }
    }
    setPhotos([...photos, ...added]);
    setPhotoErrors(errors);
  }

  function removePhoto(index: number) {
    const photo = photos[index];
    if (photo.previewUrl) URL.revokeObjectURL(photo.previewUrl);
    setPhotos(photos.filter((_, i) => i !== index));
    setPhotoErrors([]);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO(backend): send the form + photos to a server action that saves the
    // customer, job, and photos, then redirects with the real job token.
    // For now, jump to the success page for the newest sample job.
    router.push(`/r/${slug}/success?job=${mockJobs[0].publicToken}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot: hidden from people, but spam bots fill in every field.
          If this has a value when the form is submitted, we ignore the request. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold">Your info</legend>
        <div>
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input id="name" name="name" required maxLength={100} autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={input} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" maxLength={30} autoComplete="tel" className={input} />
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold">Your device</legend>
        <div>
          <label htmlFor="deviceType" className={label}>
            Device type
          </label>
          <select id="deviceType" name="deviceType" required defaultValue="" className={input}>
            <option value="" disabled>
              Choose one…
            </option>
            {DEVICE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="deviceModel" className={label}>
            Make and model <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <input
            id="deviceModel"
            name="deviceModel"
            maxLength={100}
            placeholder="e.g. Dell XPS 13, iPhone 14, PS5"
            className={input}
          />
        </div>
        <div>
          <label htmlFor="problemDescription" className={label}>
            What&apos;s wrong?
          </label>
          <textarea
            id="problemDescription"
            name="problemDescription"
            required
            rows={5}
            maxLength={2000}
            placeholder="What happened, when it started, and anything you've already tried."
            className={input}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-lg font-semibold">How should we handle it?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {SERVICE_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer gap-3 rounded-lg border border-zinc-300 bg-white p-3 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50 has-[:checked]:ring-2 has-[:checked]:ring-emerald-600/20"
            >
              <input
                type="radio"
                name="serviceOption"
                value={option.value}
                required
                className="mt-1 accent-emerald-600"
              />
              <span>
                <span className="block font-medium">{option.label}</span>
                <span className="block text-sm text-zinc-600">{option.description}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-lg font-semibold">
          Photos <span className="text-base font-normal text-zinc-500">(optional)</span>
        </legend>
        <p className={hint}>
          Up to {PHOTO_LIMITS.maxCount} photos of the device or the problem. JPG, PNG, WEBP, or HEIC, 10 MB max each.
        </p>

        {photos.length > 0 && (
          <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {photos.map((photo, i) => (
              <li key={photo.previewUrl ?? `${photo.file.name}-${i}`} className="relative">
                {photo.previewUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element -- local preview, not a hosted image
                  <img
                    src={photo.previewUrl}
                    alt={`Photo ${i + 1}`}
                    className="aspect-square w-full rounded-lg border border-zinc-200 object-cover"
                  />
                ) : (
                  <div className="grid aspect-square w-full place-items-center rounded-lg border border-zinc-200 bg-zinc-100 p-1 text-center text-xs break-all text-zinc-600">
                    {photo.file.name}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  aria-label={`Remove photo ${i + 1}`}
                  className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-zinc-900 text-sm text-white shadow hover:bg-zinc-700"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        {photoErrors.map((error) => (
          <p key={error} className={fieldError}>
            {error}
          </p>
        ))}

        {photos.length < PHOTO_LIMITS.maxCount && (
          <label className="mt-3 flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 bg-white px-4 py-6 text-center font-medium text-zinc-700 hover:border-emerald-600 hover:bg-emerald-50">
            <input
              type="file"
              accept={PHOTO_LIMITS.accept}
              multiple
              onChange={handlePhotosPicked}
              className="sr-only"
            />
            📷 Add photos ({photos.length}/{PHOTO_LIMITS.maxCount})
          </label>
        )}
      </fieldset>

      <button type="submit" disabled={submitting} className={`${primaryButton} w-full text-lg`}>
        {submitting ? "Sending…" : "Send repair request"}
      </button>
    </form>
  );
}
