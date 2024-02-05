document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.nodeName != "I") return;
  console.log(e.target);
});