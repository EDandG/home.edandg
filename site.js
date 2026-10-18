/* ED&G™ site — tiny progressive enhancements. No tracking, no cookies, no network calls. */
(function () {
  var root = document.documentElement;
  root.classList.remove("no-js");

  // Light / dark switch (remembered in this browser only; falls back to the OS setting).
  var btn = document.getElementById("modeBtn");
  function current() {
    var m = root.getAttribute("data-color-mode");
    if (m) return m;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function label() { if (btn) btn.textContent = current() === "dark" ? "Light mode" : "Dark mode"; }
  if (btn) {
    label();
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-color-mode", next);
      try { localStorage.setItem("edg_mode", next); } catch (e) {}
      label();
    });
  }

  // Footer year.
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Reveal-on-scroll.
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(function (e) { io.observe(e); });
})();
