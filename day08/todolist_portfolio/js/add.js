//날짜 변경하면서 하는 todolist 한번 만들어보기
import { todoListData } from "./year.js";

const todoList = [];

const todoListTag = document.querySelector(".todolist");
const addBtn = document.querySelector(".button");

addBtn.addEventListener("click", () => {
  const todo = prompt("할일 적기");
  const time = prompt("시간 적기");

  //싹다 지운다. forEach 돌면서 싹다 빼주세요랑 같은 의미.
  //이걸 안하면 값이 중복되어서 이상하게 나옴
  todoListTag.innerHTML = ""; //reset

  //????????
  todoList.push({ todo, time });
  todoList.forEach(({ time, todo }, index) => {
    //todoListTag 안에 자식으로 만들기
    todoListTag.appendChild(makeList(index, time, todo));
  });
});

const makeList = (index, time, todo) => {
  //인덱스로 순서대로 출력. dataset?????
  const li = document.createElement("li");
  li.dataset.id = index;

  const timeSpan = document.createElement("span");
  timeSpan.textContent = time;
  li.appendChild(timeSpan);

  const todoSpan = document.createElement("span");
  todoSpan.textContent = todo;
  li.appendChild(todoSpan);

  //삭제버튼
  const button = document.createElement("button");
  button.textContent = "삭제";
  button.classList.add("delButton");

  // 삭제버튼에 이벤트 리스너 추가
  button.addEventListener("click", () => {
    //i는 인덱스. 삭제버튼을 눌렀을 때 그 대상을 위에 투두 리스트에서 뺀 뉴 투두리스트.
    const newtodoList = todoList.filter((v, i) => i != index);
    //투두리스트 태그 자식 전체 삭제
    todoListTag.innerHTML = "";
    //뉴투두리스트로 투두리스트 태그 자식을 다시 만들기
    newtodoList.forEach(({ time, todo }, index) => {
      todoListTag.appendChild(makeList(index, time, todo));
    });

    //투두리스트를 뉴투두리스트로 갱신하기. 이걸해야 삭제하고 나서 다시 추가했을 때 이어서 가능.
    todoList.length = 0;
    todoList.push(...newtodoList);
  });

  li.appendChild(button);
  return li;
};
