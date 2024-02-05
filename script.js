document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.nodeName != "I") return;
  console.log(e.target);
  let data;
  switch (e.target.getAttributeNode("item-id").value) {
    case "home":
      data = { title: "home", color: "red", itemId: "home" };
      update(data);
      break;
    case "search":
      data = { title: "search", color: "blue", itemId: "search" };
      update(data);
      break;
    case "likes":
      data = { title: "likes", color: "green", itemId: "likes" };
      update(data);
      break;
    case "profile":
      data = { title: "profile", color: "pink", itemId: "profile" };
      update(data);
      break;
  }
});

function update(data) {
  document.querySelector("h1").innerText = data.title;
  document.querySelector("main").style.backgroundColor = data.color;
  document.querySelectorAll("I").forEach((Element) => {
    Element.style.color = "black";
  });
  document.querySelector(`I[item-id=${data.itemId}]`).style.color = data.color;
}
