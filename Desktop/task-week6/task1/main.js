const modal = document.querySelector(".modal");

console.log(modal);

const button = document.createElement("button");
button.type = "button";
button.innerText = "Open Modal";
button.className = "open-modal";

const section = document.createElement("section");
section.className = "section";

document.body.append(section);
section.append(button, modal);

console.log(button);
button.addEventListener("click", (e) => {
  e.preventDefault();

  if (button.classList.contains("hide-modal")) {
    modal.style.display = "none";
    button.innerText = "Open Modal";
    button.classList.remove("hide-modal");
    section.style.backgroundColor = "initial";
  } else {
    modal.style.display = "block";
    button.innerText = "Hide Modal";
    button.classList.add("hide-modal");
    section.style.backgroundColor = "black";
  }
});

const hide = document.querySelector(".hide-modal");
