//html의 calender 채우기

const ymd = document.querySelector(".ymd");
//앞에서부터 순서대로 year, month, date로 칭하기
const [year, month, date] = new Date().toLocaleString().split(" ");
//합치기
ymd.innerText = `${year} ${month} ${date}`;

setInterval(() => {
  //꺼꾸로 돌려서 time으로 칭하기
  const [time] = new Date().toLocaleString().split(" ").reverse();
  const timeTag = document.querySelector(".time");
  timeTag.innerText = time;
}, 1000);

const translation = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};
//new Date().getDay() ?????
const day = translation[new Date().getDay()];
const dayTag = document.querySelector(".day");
dayTag.innerText = day;
