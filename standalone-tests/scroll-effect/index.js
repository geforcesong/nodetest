function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenScrolled * 100, 100)
  );
}
window.addEventListener('scroll', setScrollVar);
window.addEventListener('resize', setScrollVar);
setScrollVar();