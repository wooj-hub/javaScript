// const lat = 37.51;
// const lon = 126.72;
const APIkey = "d229e4af6a8809509156ccacb8dde1f2";
//weather API
// const weatherAPI = fetch(
//   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
// );

//부평역 현재 날씨출력하기
// weatherAPI
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

const data = [
  { cityName: "Bupyeong", lat: 37.51, lon: 126.72 },
  { cityName: "Fukuoka", lat: 33.59, lon: 130.4 },
  { cityName: "Qingdao", lat: 36.06, lon: 120.3 },
  { cityName: "Taipei", lat: 25.03, lon: 121.56 },
  { cityName: "Sydney", lat: -33.86, lon: 151.2 },
];
data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", () => {
    const weatherAPI = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
    );
    weatherAPI
      //json 화 시킴
      //V는 Response 타입 그래서 json화 시켜줘야함.
      .then((value) => value.json())
      //v여러개 값 중 data만 가져오기
      .then((value) => value.weather[0].main)
      .then((value) => {
        const weather = document.querySelector(".weather");
        weather.innerText = `\n${cityName}의 현재 날씨: ${value}`;
      });
  });
});
