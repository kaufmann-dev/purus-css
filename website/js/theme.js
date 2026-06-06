const themeStorageKey = "purus-theme";
const themeSelectors = document.querySelectorAll("[data-theme-selector]");

function applyTheme(theme) {
  if (theme === "light" || theme === "dark") {
    document.documentElement.dataset.theme = theme;
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  themeSelectors.forEach((selector) => {
    selector.value = theme;
  });
}

themeSelectors.forEach((selector) => {
  selector.addEventListener("change", () => {
    const theme = selector.value;

    if (theme === "system") {
      localStorage.removeItem(themeStorageKey);
    } else {
      localStorage.setItem(themeStorageKey, theme);
    }

    applyTheme(theme);
  });
});

applyTheme(localStorage.getItem(themeStorageKey) || "system");
