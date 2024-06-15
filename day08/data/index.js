// document.querySelector(".food"); //제일 첫번째 아이만 가져옴
const foods = document.querySelectorAll(".food"); //food클래스에 해당하는 아이 전부다 배열로 가져옴
foods.forEach((v) => console.log(v.dataset.food)); //음식 이름만 출력
foods.forEach((v) => console.log(v.dataset.price)); //음식 가격만 출력
