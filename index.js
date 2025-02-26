// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const buttons = document.querySelectorAll(`button`);
buttons.forEach((button) => {
  button.addEventListener(`click`, () => {
    alert(button.id);
  });
});

const para = document.createElement(`p`);
para.textContent = `Hey I'm red!`;
para.style.color = `red`;
container.appendChild(para);

const h3 = document.createElement(`h3`);
h3.textContent = `I'm a blue h3!`;
h3.style.color = `blue`;
container.appendChild(h3);

const div = document.createElement(`div`);
div.style.cssText = `border: 2px solid black; background: pink`;
const h1 = document.createElement(`h1`);
h1.textContent = `I'm a div`;
const para2 = document.createElement(`p`)
para2.textContent = `ME TOO`;
div.appendChild(h1);
div.appendChild(para2);
container.appendChild(div);


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
btn.addEventListener(`click`, function (e) {
  e.target.style.background = `blue`;
  
});

const btn2 = document.querySelector(`#btn2`);
let alertFunction = () => alert(`YAY YOU DID IT`);
btn2.addEventListener(`click`, alertFunction);
btn2.style.cssText = `margin-top: 5px`;

