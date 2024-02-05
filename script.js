document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.nodeName != "I") return;
  let data;
  switch (e.target.getAttributeNode("item-id").value) {
    case "home":
      data = { title: "home", color: "red", itemId: "home" };
      update(data);
      history.pushState(data, "home", "home");
      break;
    case "search":
      data = { title: "search", color: "blue", itemId: "search" };
      update(data);
      history.pushState(data, "search", "search");
      break;
    case "likes":
      data = { title: "likes", color: "green", itemId: "likes" };
      update(data);
      history.pushState(data, "likes", "likes");
      break;
    case "profile":
      data = { title: "profile", color: "pink", itemId: "profile" };
      update(data);
      history.pushState(data, "profile", "profile");
      break;
  }
});

window.addEventListener("popstate", (e) => {
  if (history.state) {
    update(history.state);
  } else {
    update({ title: "home", color: "red", itemId: "home" });
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
