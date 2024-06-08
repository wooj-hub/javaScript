import { data } from "./data.js";

const table = document.querySelector(".table");

//data를 forEach 문으로 하나하나씩 접근해서
data.forEach(({ id, fullName, jobTitle, race, university }) => {
  //HTML table 태그에 HTML언어로 data 값들 생성
  table.insertAdjacentHTML(
    "beforeend",
    `
    <div class="table_data">
        <div class="id">${id}</div>
        <div class="fullName">${fullName}</div>
        <div class="jobTitle">${jobTitle}</div>
        <div class="race">${race}</div>
        <div class="university">${university}</div>
    </div>
    `
  );
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const searchInput = document.querySelector(".searchInput");
  const { value } = searchInput;

  //검색한 값을 찾기 전에 table을 빈것으로 만들기
  table.innerHTML = "";

  //data에서 fullName이 value인 값만 table에 남도록 함.
  data
    .filter(({ fullName }) => fullName.includes(value))
    .forEach(({ id, fullName, jobTitle, race, university }) => {
      //HTML table 태그에 HTML언어로 data 값들 생성
      table.insertAdjacentHTML(
        "beforeend",
        `
      <div class="table_data">
          <div class="id">${id}</div>
          <div class="fullName">${fullName}</div>
          <div class="jobTitle">${jobTitle}</div>
          <div class="race">${race}</div>
          <div class="university">${university}</div>
      </div>
      `
      );
    });
});
