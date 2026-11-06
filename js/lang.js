(function () {
  var key = "cevora-lang";
  var home = document.documentElement.getAttribute("data-home");
  var stored = null;

  try {
    stored = localStorage.getItem(key);
  } catch (error) {}

  if (home === "cs" && stored !== "cs") {
    location.replace("en/");
    return;
  }

  if (home === "en" && stored === "cs") {
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
