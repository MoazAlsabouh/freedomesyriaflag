let contenar = document.createElement("div");
contenar.setAttribute("class", "contenar");
let classes = ["top" , "center" , "bottom"];
let colores = ["green" , "white", "black"];
for (let i = 0; i < 3; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", classes[i]);
  div.style.cssText = `width: 100vw; height: calc(100vh / 3); background: ${colores[i]}; display: flex; justify-content: center; align-items: center;`;
  contenar.appendChild(div);
}
document.body.appendChild(contenar);
let center = document.querySelector(".center");
for (let i = 0; i < 3; i++) {
  let star = document.createElement("div");
  star.setAttribute("class", "star");
  center.appendChild(star);
}