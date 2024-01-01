console.log("Killing Ctrl-G")
document.onkeydown = (e) => {
  if (e.key === "g" && e.ctrlKey) {
    e.stopImmediatePropagation();
  }
};