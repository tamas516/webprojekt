const app = document.createElement("MAIN");
app.setAttribute("id-test", "app");

const pageTitle = document.createElement("H1");
pageTitle.innerText = "Hello world";

const description = document.createElement("P");
description.appendChild(
  document.createTextNode("a little description here")
);

const header = document.createElement("HEADER");
header.classList.add("page-head");
header.appendChild(pageTitle);
header.appendChild(description);

app.appendChild(header);
document.body.appendChild(app);