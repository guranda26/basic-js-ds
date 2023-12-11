//1.  შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი

const btn = document.createElement("button");
const divEl = document.createElement("div");
divEl.id = "my-el";
document.body.append(divEl, btn);
let firstDiv = document.getElementById("my-el");
firstDiv.style.backgroundColor = "yellow";
firstDiv.style =
  "border: 2px solid red; background-color: yellow; width: 50%; height: 3em; text-align:center; font-size: 1.5rem";
firstDiv.textContent = "The text will hide";
btn.id = "my-btn";
let firstBtn = document.getElementById("my-btn");
firstBtn.style = "margin-top: 0.3rem";
firstBtn.addEventListener("click", () => (divEl.style.display = "none"));
firstBtn.addEventListener("dblclick", () => (divEl.style.display = "block"));
btn.textContent = "Click me";
btn.style.backgroundColor = "tomato";
btn.style.border = "2px solid darkgray";
