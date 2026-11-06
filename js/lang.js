(function () {
  var key = "cevora-lang";
  var path = location.pathname.replace(/index\.html$/i, "");

  if (path.slice(-1) !== "/") {
    path += "/";
  }

  var isEnHome = /\/en\/$/.test(path);
  var isCsHome = path === "/";
  var stored = null;

  try {
    stored = localStorage.getItem(key);
  } catch (error) {}

  if (isCsHome && stored !== "cs") {
    location.replace("en/");
    return;
  }

  if (isEnHome && stored === "cs") {
    location.replace("../");
    return;
  }

  function rememberChoice() {
    var switchLink = document.querySelector(".lang-switch");
    if (!switchLink) {
      return;
    }
    switchLink.addEventListener("click", function () {
      try {
        localStorage.setItem(key, switchLink.getAttribute("data-lang"));
      } catch (error) {}
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", rememberChoice);
  } else {
    rememberChoice();
  }
})();
