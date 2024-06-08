//fetch //promise
//url 을 넣으면 데이터를 돌려주는 함수

// const test = new Promise((s) => s("프랭크 버거"));
// test.then((v) => console.log(typeof v));

//resoponse type
//맨뒤에 숫자는 데이터 갯수
const getData = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
// getData.then((v) => v.json()).then((v) => console.log(v));

//qiuz
//street streetName county로  테이블 만들기.

//table에 데이터 추가하는걸 함수로 만들어줌.
const bindData = (street, streetName, country) => {
  const table = document.querySelector(".table");
  table.insertAdjacentHTML(
    "beforeend",
    `<div class="table_data">
        <div class="street">${street}</div>
        <div class="streetName">${streetName}</div>
        <div class="country">${country}</div>
        </div>`
  );
};

const table = document.querySelector(".table");
getData
  //json 화 시킴??????????
  .then((v) => v.json())
  //v여러개 값 중 data만 가져오기
  .then((v) => v.data)
  //data중 street, streetName, country만 가져오기
  .then((v) =>
    v.forEach(({ street, streetName, country }) => {
      bindData(street, streetName, country);
    })
  )
  .catch((v) => console.log("너무 많이 요청하지 마세요"));
