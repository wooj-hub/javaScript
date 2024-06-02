//특수문자를 갖고있는지 확인하는 함수
export const hasSpecial = (value) =>
  [..."!@#$%^&*"].some((v) => value.includes(v));
//길이가 4<=길이<=10인지를 확인하는 함수
export const isValidLength = (length) => 4 <= length && length <= 10;
