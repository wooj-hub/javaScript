//비동기: 서버에서 데이터를 가져옴.
//web - 데이터 가져오기 , 지도 확인, 시간 초 재기, ... => 비동기 프로그래밍
//동기 프로그래밍 코드(위에서 아래로 내려오는 그냥 일반 코드) <-> 비동기 프로그래밍 코드

//비동기 프로그래밍 코드
//1. settimeout, setInterval
//1000 = 1초, 2000=2초 , 3000=3초
//1초 뒤에 하이루 콘솔로그 찍어줘
// setTimeout(()=>{
//     console.log("하이루");
// },1000)

//1초마다 여누여누 콘솔로그 찍어줘
// setInterval(()=>{
//     console.log("여누여누");
// },1000)

// quiz 현재시간을 기준으로 타이머 만들기

// setInterval(() => {
//   const a = new Date();
//   console.log(`${a.toLocaleString()}`);
// }, 1000);

//강사님 코드
//const date = new Date(); 를 밖으로 빼면 안됨. 밖으로 빼면 한번 생성하고 끝
setInterval(() => {
  //1초마다 계속 생성
  const date = new Date();
  const dateTag = document.querySelector(".date");
  dateTag.innerText = date.toLocaleString();
}, 1000);
