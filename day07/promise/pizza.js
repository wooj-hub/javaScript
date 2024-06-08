//피자 만들기
//1. 도우 준비

const prepareDough = () => {
  // success만 일단 넣음. 원래는 fail도 있어야함
  return new Promise((success) => {
    setTimeout(() => {
      console.log("도우 준비 완료");
      success("🫓");
    }, 1000);
  });
};

//prepareDough()함수를 실행시키면 Promise 타입을 받음.
//console.log(prepareDough()) 는 pending 이 나옴.
// // prepareDough().then((v) => console.log(v));

// //2. 토마토 소스 추가

const addSauce = (dough) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("토마토 소스 준비 완료");
      success(`${dough} + 🍅`);
    }, 2000);
  });
};

// // prepareDough()
// // //여기서 v는 도우 이모지
// //   .then((v) => {
// //     console.log(v);
// //     return addSauce(v);
// //   })
// //   //여기서 v는 dough 이모지 + 토마토 이모지
// //   .then((v) => {
// //     console.log(v);
// //   });

// //3. 토핑 추가
const addTopping = (doughWithSauce) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("피자 토핑 준비 완료");
      success(`${doughWithSauce} + 🧀`);
    }, 500);
  });
};
// //4. 피자 굽기

const bakePizza = (doughWithSauceAndTopping) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log(`${doughWithSauceAndTopping} 굽기 완료`);
      success(`🍕`);
    }, 1000);
  });
};

prepareDough()
  .then((v) => {
    //이걸 실행하면 먼저 Promise로 가서  console.log("도우 준비 완료") 이걸 실행하고
    //밑에줄  console.log(v) 로 도우 이모지가 출력됨.
    //v 는 success 값임
    //그리고 return addSauce(v);
    console.log(v);
    //addSauce 로 도우 이모지 전달
    return addSauce(v);
  })
  .then((v) => {
    //.then 을 기점으로 v가 바뀜.
    //v는 도우 이모지+ 토마토 이모지. success 값임
    console.log(v);
    return addTopping(v);
  })
  .then((v) => {
    console.log(v);
    return bakePizza(v);
  })
  .then((v) => {
    console.log(`${v} 먹자`);
  });
//5. 피자 먹기
