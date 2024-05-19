//quiz
// 아메리카노 2500: - 0 +
// 라떼 3000: - 0 +
// 바닐라 3500: - 0 +
// 총액: 0

const coffee1_name = document.createElement("span");
const coffee1_sub = document.createElement("button");
const coffee1_total = document.createElement("button");
const coffee1_add = document.createElement("button");

const coffee2_name = document.createElement("span");
const coffee2_sub = document.createElement("button");
const coffee2_total = document.createElement("button");
const coffee2_add = document.createElement("button");

const coffee3_name = document.createElement("span");
const coffee3_sub = document.createElement("button");
const coffee3_total = document.createElement("button");
const coffee3_add = document.createElement("button");

const h1tag = document.createElement("h1");

coffee1_name.innerText = "아메리카노 2500";
coffee1_sub.innerText = "-";
coffee1_total.innerText = "0";
coffee1_add.innerText = "+";

coffee2_name.innerText = "라떼 3000";
coffee2_sub.innerText = "-";
coffee2_total.innerText = "0";
coffee2_add.innerText = "+";

coffee3_name.innerText = "바닐라 7000";
coffee3_sub.innerText = "-";
coffee3_total.innerText = "0";
coffee3_add.innerText = "+";

h1tag.innerText = "0";

coffee1_sub.addEventListener("click", () => {
  coffee1_total.innerText = Number(coffee1_total.innerText) - 2500;
  h1tag.innerText =
    Number(coffee1_total.innerText) +
    Number(coffee2_total.innerText) +
    Number(coffee3_total.innerText);
});

coffee1_add.addEventListener("click", () => {
  coffee1_total.innerText = Number(coffee1_total.innerText) + 2500;
  h1tag.innerText =
    Number(coffee1_total.innerText) +
    Number(coffee2_total.innerText) +
    Number(coffee3_total.innerText);
});

coffee2_sub.addEventListener("click", () => {
  coffee2_total.innerText = Number(coffee2_total.innerText) - 3000;
  h1tag.innerText =
    Number(coffee1_total.innerText) +
    Number(coffee2_total.innerText) +
    Number(coffee3_total.innerText);
});

coffee2_add.addEventListener("click", () => {
  coffee2_total.innerText = Number(coffee2_total.innerText) + 3000;
  h1tag.innerText =
    Number(coffee1_total.innerText) +
    Number(coffee2_total.innerText) +
    Number(coffee3_total.innerText);
});

coffee3_sub.addEventListener("click", () => {
  coffee3_total.innerText = Number(coffee3_total.innerText) - 3500;
  h1tag.innerText =
    Number(coffee1_total.innerText) +
    Number(coffee2_total.innerText) +
    Number(coffee3_total.innerText);
});

coffee3_add.addEventListener("click", () => {
  coffee3_total.innerText = Number(coffee3_total.innerText) + 3500;
  h1tag.innerText =
    Number(coffee1_total.innerText) +
    Number(coffee2_total.innerText) +
    Number(coffee3_total.innerText);
});
document.body.appendChild(coffee1_name);
document.body.appendChild(coffee1_sub);
document.body.appendChild(coffee1_total);
document.body.appendChild(coffee1_add);

document.body.appendChild(coffee2_name);
document.body.appendChild(coffee2_sub);
document.body.appendChild(coffee2_total);
document.body.appendChild(coffee2_add);

document.body.appendChild(coffee3_name);
document.body.appendChild(coffee3_sub);
document.body.appendChild(coffee3_total);
document.body.appendChild(coffee3_add);

document.body.appendChild(h1tag);
