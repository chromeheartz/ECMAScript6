/*

  ***** padStart / padEnd *****

  기본적으로 둘은 같은 역할을 한다
  padding을 넣음 문자열의 맨 앞 , 혹은 맨 끝

  가장 많이 사용했던 예시.
  Javascript로 시계를 만드는 예시로 보여주겠다.
  날짜나 시간을 가지고 작업하는 경우

  let hours = 12; 
  let minutes = 3;
  let seconds = 2;
  console.log(`${hours}h:${minutes}m:${seconds}s`)
  12h:3m:2s
  이런식으로 결과물이나오는데
  이상적으로 보이게 하고싶을것이다 예를들어 12h:03m:02s 이런식으로.

  console.log(`${hours}h:${minutes < 10 ? `0${minutes}` : minutes}m:${seconds}s`)
  이런식으 삼항연산자를 사용해서도 가능할것이다.
  만약 10 이하면 앞에 0을 출력, 10이 되기전까지 숫자앞에 0이 붙고 그 뒤엔 hours처럼 10단위이상이 잘 붙을것이다.
  seconds도 같은작업을 해야함.

  그래서 이 코드 대신에 padStart를 쓰는것이다.
  minutes가 항상 2자리수가 되도록. 만약 2자리가 안되면 0으로 채울것.
  String(minutes).padStart(2,"0") 첫번째 인자는 길이. 이 문자열은 2개로 이루어져야한다는 말.
  minutes가 number이기 때문에 String으로 바꾸어주고 시작.

  "5".padStart(5,"x") 이렇게 한번만 적어줘도
  xxxx5 로 출력이된다.
  왜냐면 빈곳을 모두 x로 채우기 때문. 해당 문자열의 길이가 5가 될때까지.

  "5".padEnd(5,"x")
  5xxxx padEnd를 하면 뒤로붙는다.

  * 한가지 유념할 점은
  padStart가 결과를 반환한다는것이다.
  값을 변화시키지 않는다는 것.

  ** 니꼬형이 제일 좋아하는 조합

  "1".padStart(2,"0").padEnd(3,"s")
  01s 이렇게 앞뒤로도 붙힐수 있다.
  이런식으로 시계 양식을 만들수있다.

*/

  let hours = 12; 
  let minutes = 3;
  let seconds = 2;
  console.log(`${hours}h:${minutes}m:${seconds}s`)
  
  minutes = String(minutes).padStart(2,"0")
  console.log(`${hours}h:${minutes}m:${seconds}s`)