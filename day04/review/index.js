// //Array
// const arr= [1,2,3,4,5];
// const fruits = ["apple","banana","orange"];
// const dobule_arr=[["아메리카노","헤이즐넛아아"],["딸기스무디","초코스무디"]]
// //double_arr[0][1] //헤이즐넛 아아
// arr.forEach((v)=>{
//     console.log(v);
// });
// arr.some((v)=>{
//     return v<5;
// });//true
// //위에랑 같은의미
// arr.some((v)=>v<5);

// arr.every((v)=> v%2==0); //모두 짝수니?
// arr.every((v)=>{
//     return v<5;
// });//false

// //String
// "hello".includes("h");
// "world".repeat(5);

// //if else if else - switch

// //class
// const newDiv = document.createAttribute("div");
// newDiv.appendChild();
// newDiv.classList.toggle("red");

// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");
// const box4 = document.querySelector(".box4");
// const box5 = document.querySelector(".box5");

// box1.addEventListener("click",()=>{
//     alert("빨강(#fc5c65)색깔입니다");
// })
// box2.addEventListener("click",()=>{
//     alert("주황(#fd9644)색깔입니다");
// })

// box3.addEventListener("click",()=>{
//     alert("노랑(#fed330)색깔입니다");
// })
// box4.addEventListener("click",()=>{
//     alert("초록(#26de81)색깔입니다");
// })
// box5.addEventListener("click",()=>{
//     alert("파랑(#2bcbba)색깔입니다");
// })

//강사님 코드 colorList에 색깔넣어서 하나씩 빼서 js에서 배경색 삽입
//colorList = ["#fc5c65", "#fd9644", "#fed330", "#26de81", "#2bcbba"];
// colorList.forEach((v) => {
//   const newDiv = document.createElement("div");
//   newDiv.classList.add("box");
//   newDiv.style.backgroundColor = v;
//   newDiv.addEventListener("click", () => {
//     alert(`${v} 색깔이 클릭되었습니다`);
//   });
//   const palette = document.querySelector(".palette");
//   palette.appendChild(newDiv);
// });
