const color_array = ["red", "orange", "yellow", "green", "blue"];
color_array.forEach((v) => {
  const color_button = document.createElement("button");
  color_button.innerText = v;
  //줄 바꿔서 버튼 출력하기
  const color = document.querySelector(".color");
  color.appendChild(color_button);

  color_button.addEventListener("click", () => {
    const box = document.querySelector(".box");
    color_array.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
});

const radius_array = [
  "borderRadiusZero",
  "borderRadiusTen",
  "borderRadiusTwenty",
];
radius_array.forEach((v) => {
  const radius_button = document.createElement("button");
  radius_button.innerText = v;
  document.body.appendChild(radius_button);

  radius_button.addEventListener("click", () => {
    const box = document.querySelector(".box");
    radius_array.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
});

const size_array = ["small", "medium", "large", "x-large", "xx-large"];
