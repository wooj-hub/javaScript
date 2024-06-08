//number: *4개 붙이고 +나머지
//exp: 2024/07/25 바꾸기
//만약 서버 터지면 alert으로 서버 터짐 ㅅㄱ

const getData = fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=10");

const bindData = (type, number, exp, owner) => {
  const table = document.querySelector(".table");
  //string 타입 number을 배열로 바꾸고 slice 로 앞에 4자리부터 끝까지 짜르기
  const maskedNumber = "****" + [...number].slice(4, number.length).join("");

  //date해서 현재 년도 추가하기.
  const date = new Date();
  const newExp = date.getFullYear() + "/" + exp;

  table.insertAdjacentHTML(
    "beforeend",
    `<div class="table_data">
           <div class="type">${type}</div>
          <div class="number">${maskedNumber}</div>
          <div class="exp">${newExp}</div>
          <div class="owner">${owner}</div>
    </div>`
  );
};

const table = document.querySelector(".table");
getData
  //json 화 시킴
  //V는 Response 타입 그래서 json화 시켜줘야함.
  .then((v) => v.json())
  //v여러개 값 중 data만 가져오기
  .then((v) => v.data)
  //data중 street, streetName, country만 가져오기
  .then((v) =>
    v.forEach(({ type, number, expiration, owner }) => {
      bindData(type, number, expiration, owner);
    })
  )
  //너무 많이 요청할 경우 에러뜨는데 그때 출력할 console.log
  .catch((v) => console.log("너무 많이 요청하지 마세요"));
