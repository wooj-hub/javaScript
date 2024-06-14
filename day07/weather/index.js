const lat = 37.51;
const lon = 126.72;
const APIkey = "d229e4af6a8809509156ccacb8dde1f2";
//weather API
const getData = fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
);

//부평역 현재 날씨출력하기
// getData
//   //json 화 시킴
//   //V는 Response 타입 그래서 json화 시켜줘야함.
//   .then((v) => v.json())
//   //v여러개 값 중 data만 가져오기
//   .then((v) => v.weather[0].main)
//   .then((v) => {
//     const weather = document.querySelector(".weather");
//     weather.innerText = `부평역 현재 날씨: ${v}`;
//   });

//버튼을 누르면 해당 지역의 날씨 출력하기

getData
  //json 화 시킴
  //V는 Response 타입 그래서 json화 시켜줘야함.
  .then((v) => v.json())
  //v여러개 값 중 data만 가져오기
  .then((v) => v.weather[0].main)
  .then((v) => {
    const weather = document.querySelector(".weather");
    weather.innerText = `부평역 현재 날씨: ${v}`;
  });
