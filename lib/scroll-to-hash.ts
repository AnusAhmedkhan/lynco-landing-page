/** Smooth-scroll to an in-page section (`#id`). Returns false if the target is missing. */
export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function isLandingHomePath(pathname: string) {
  return pathname === "/" || pathname === "/home";
}

/** Retry scroll until the target section exists (after client navigation / splash). */
export function scrollToHashFromUrl(
  behavior: ScrollBehavior = "smooth",
  maxAttempts = 40,
  intervalMs = 50
) {
  if (typeof window === "undefined") return;

  const hash = window.location.hash;
  if (!hash) return;

  let attempts = 0;
  const tick = () => {
    if (scrollToHash(hash, behavior)) return;
    attempts += 1;
    if (attempts < maxAttempts) {
      window.setTimeout(tick, intervalMs);
    }
  };

  tick();
}
