const APIkey = "d229e4af6a8809509156ccacb8dde1f2";
const data = [
  { cityName: "korea", lat: 37.51, lon: 126.72 },
  { cityName: "japan", lat: 33.59, lon: 130.4 },
  { cityName: "china", lat: 36.06, lon: 120.3 },
];

//날씨에 따른 사진저장
const weatherPhoto = {
  Clear: "/day08/weather_portfolio/photo/clear.jpg",
  Clouds: "/day08/weather_portfolio/photo/cloud.jpg",
  Rain: "/day08/weather_portfolio/photo/rain.jpg",
};
data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", () => {
    const weatherAPI = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
    );
    weatherAPI
      //json 화 시킴
      //V는 Response 타입 그래서 json화 시켜줘야함.
      .then((value) => value.json())
      //v여러개 값 중 main, weaher만 가져오기
      .then(({ main, weather }) => ({ main, weather }))
      .then((value) => {
        //날씨에 따라 배경 바꾸기
        const mainTag = document.querySelector("main");
        mainTag.style.backgroundImage = `url('${
          weatherPhoto[value.weather[0].main]
        }')`;

        //버튼에 따라 날씨와 온도 출력하기
        const weatherTag = document.querySelector(".weather__info");
        weatherTag.innerText = `${cityName} is ${value.weather[0].main}`;
        const tempTag = document.querySelector(".temp__info");
        tempTag.innerText = `${cityName}'s temp is ${value.main.temp}`;
      });
  });
});
