const root = document.documentElement;
const themeButton = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("purus-theme");

if (savedTheme) root.dataset.theme = savedTheme;

themeButton?.addEventListener("click", () => {
  const theme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = theme;
  localStorage.setItem("purus-theme", theme);
  themeButton.textContent = `Use ${theme === "dark" ? "light" : "dark"} theme`;
});

for (const button of document.querySelectorAll("[data-copy]")) {
  button.addEventListener("click", async () => {
    const target = document.querySelector(button.dataset.copy);
    await navigator.clipboard.writeText(target.textContent);
    button.textContent = "Copied";
  });
}
