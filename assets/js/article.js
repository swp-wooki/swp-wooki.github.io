(() => {
  const toc = document.querySelector(".page-toc");
  if (toc && window.matchMedia("(max-width: 767px)").matches) toc.open = false;
  const button = document.querySelector("[data-copy-link]");
  if (!button || !navigator.clipboard || !window.isSecureContext) return;
  button.hidden = false;
  button.addEventListener("click", async () => {
    const status = document.querySelector(".copy-status");
    try {
      await navigator.clipboard.writeText(document.querySelector('link[rel="canonical"]')?.href || location.href);
      status.textContent = "Link copied.";
    } catch {
      status.textContent = "Please copy the URL from your address bar.";
    }
  });
})();
