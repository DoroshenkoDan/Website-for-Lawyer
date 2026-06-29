/**
 * The five-photo mosaic shown in the homepage "About" preview
 * (`AboutPreview` / `AboutGallery`). Order is fixed (A–E); the grid placement
 * for each slot lives in `AboutGallery`, this only carries the asset data.
 *
 * `C` is the main portrait. `image: null` renders a placeholder.
 */
export interface AboutGalleryItem {
  /** Stable slot id, matches the design labels A–E. */
  id: "A" | "B" | "C" | "D" | "E";
  /** Image path under `public/`; `null` renders a placeholder. */
  image: string | null;
}

export const aboutGallery = [
  { id: "A", image: null },
  { id: "B", image: null },
  { id: "C", image: null },
  { id: "D", image: null },
  { id: "E", image: null },
] as const satisfies readonly AboutGalleryItem[];
