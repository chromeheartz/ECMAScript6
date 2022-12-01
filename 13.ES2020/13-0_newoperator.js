/*

  ***** ?? operator *****
  Nullish coalescing 연산자.

  ??로 표현되며 ||(or)이나 &&(and)같은 논리연산자이다.

  - || 연산자는 기본적으로 변수에 기본값을 줄때 유용하다
  let name;
  console.log("hello", name || "anonymous")
  변수안에 아무것도 없으면 다음것을 출력시켜줌. 

  문제는 or 연산자는 boolean연산자라서 true,false만 판별 가능.
  예를 들어 단점이 있는데, 
  name = 0 이런식으로 설정하고 해보면
  변수에 값이 선언되어 있는데도 anonymous가 출력이된다.
  or연산자에게는 0도 어떤값이 아닌 false일 뿐이기 때문.

  * nullish coalescing 연산자는 이럴때를 위해 만들어졌다.
  ?? 연산자는 오직 변수값이 null이거나 undefined일때만 작동한다.
  name = "" 이런식으로 빈 문자열은 || 연산자은 false로 여겨진다.

  이런 결과를 필요로 할수도있지만 대부분의 코드작성 방식에서 좋지않음.
  사용자를 위해서 자동으로 값을 변환시켜버리기때문에 정확하지 않다.

  * 정리 
  ?? 연산자는 
  단순히 참과 거짓을 판별하는것이 아니라
  null이나 undefined도 false라고 판별한다.
  ?? 연산자는 || 연산자를 대체하지 못한다. 각자의 쓰임새가 있기 때문.

  예를들어, ||로 작업하기 힘들때는
  변수값이 선언이 되어있지 않거나 null일 경우인지, 빈문자열이나 0일지 
  알수없는 경우에 ?? 를 쓰면 좋을것이다.
  
  **** 연산자가 지원하는 브라우저들을 확인해보기

*/

// ||
let name;
console.log("hello", name || "anonymous")

// ??
console.log("hello", name ?? "anonymous")