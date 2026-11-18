(() => {
  "use strict";
  const tag = document.currentScript;
  if (location.origin !== "https://thunderbrain.github.io" || window.top !== window ||
      navigator.globalPrivacyControl || navigator.doNotTrack === "1" || navigator.webdriver) return;

  const page = tag.dataset.page;
  const endpoint = tag.dataset.collect;
  const installer = "https://github.com/ThunderBrain/RewriteLite/releases/latest/download/RewriteLite-Setup.exe";

  function count(name, event = false) {
    const url = new URL(endpoint);
    url.searchParams.set("p", name);
    if (event) url.searchParams.set("e", "1");
    url.searchParams.set("rnd", String(Math.random()));
    fetch(url, {mode: "no-cors", credentials: "omit", cache: "no-store",
      referrerPolicy: "origin", keepalive: true}).catch(() => {});
  }

  function visit() {
    if (document.visibilityState !== "visible") return;
    document.removeEventListener("visibilitychange", visit);
    count(page);
  }
  document.addEventListener("visibilitychange", visit);
  visit();

  function download(event) {
    const link = event.target instanceof Element && event.target.closest("a[href]");
    if (!event.defaultPrevented && link && link.href === installer) count("download-installer", true);
  }
  document.addEventListener("click", event => { if (event.button === 0) download(event); });
  document.addEventListener("auxclick", event => { if (event.button === 1) download(event); });
})();
