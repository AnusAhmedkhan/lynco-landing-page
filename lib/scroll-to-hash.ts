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
