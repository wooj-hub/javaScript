const box = document.querySelector(".box");

const color_array = ["red", "orange", "yellow", "green", "blue"];
color_array.forEach((v) => {
  const color_button = document.createElement("button");
  color_button.innerText = v;
  //html의 태그에 버튼을 자식으로 추가해 카테고리별로 줄 바꿔서 버튼 출력하기
  const color = document.querySelector(".color");
  color.appendChild(color_button);

  color_button.addEventListener("click", () => {
    // 버튼을 클릭할 때마다 color_array 배열에 있는 모든 색상 클래스("red", "orange", "yellow", "green", "blue")를 .box 요소에서 제거합니다.
    color_array.forEach((v1) => {
      box.classList.remove(v1);
    });
    //클릭된 버튼에 해당하는 색상 클래스를 해당 요소에 추가합니다.
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
  const radius = document.querySelector(".radius");
  radius.appendChild(radius_button);

  radius_button.addEventListener("click", () => {
    radius_array.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
});

const size_array = ["small", "medium", "large", "x-large", "xx-large"];

size_array.forEach((v) => {
  const size_button = document.createElement("button");
  size_button.innerText = v;
  const size = document.querySelector(".size");
  size.appendChild(size_button);

  size_button.addEventListener("click", () => {
   size_array.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
});

