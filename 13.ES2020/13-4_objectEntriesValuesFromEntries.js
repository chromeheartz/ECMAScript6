/*

  ***** Object *****

  Built-in objects에서 object는 자바스크립트 데이터 타입이다.
  Object는 create, assign, freeze 같은 메소드를 가지고 있다.

  새로운 것들이 있는데 예를들어
  freeze는 object를 바꾸지 못하게한다. 

  *** Object.values()

  const person = {
    name : 'bibi',
    age : 12
  }

  예를들어 Object의 value만 보고싶을때가 있을것이다.
  그럴때에는
  Object.values(person) 을 하면
  value들만 들어있는 array를 반환한다.

  *** Object.entries()

  Entries는 독특하게 배열의 배열을 return한다.

  const person = {
    name : 'bibi',
    age : 12
  }
  Object.entries(person)
  [Array(2),Array(2)]

  자세히 보면 배열의 이름과 값이 있다. 
  key값의 이름과 값이 배열의 형태로 들어가있다. 언젠가 필요할 때가 있으니
  꼭 기억하길.

  * 유용하게 쓸 예시

  Object.entries(person).forEach(item => console.log(item))
  이런식으로 forEach와 사용할 수 있다.

  *** Object.fromEntries()

  Object.fromEntries는 배열의 배열에서부터
  Object를 만들어준다. 배열의 배열을 만들어보자

  Object.fromEntries([["name", "bibi"], ["age", 12], ["f", "k", "e"], ["hello", true]]) 이런식으로 해주면
  배열의 배열으로부터 Object를 만든다. 하지만 3개이상의 값이 들어가있다면 마지막것은 무시
  {name: 'bibi', age: 12, f: 'k', hello: true}

  ** 정리
  Object.values는 값들만 가져오고싶을때.
  Object.entries는 key를 알고싶을때 key가 name일때 key값을 알려면 Object.entries
  Object.fromEntries는 배열의 배열로부터 Object를 만들때
  (예전 웹사이트를 수정할때에 자주사용, 배열로된 데이터가 있으면 Object를 만들수있어서 유용)   

*/

  const person = {
    name : 'bibi',
    age : 12
  }

  // Object.values
  console.log(Object.values(person))

  // Object.entries
  Object.entries(person).forEach(item => console.log(item[0], item[1])) 

  // Object.fromEntries
  Object.fromEntries([["name", "bibi"], ["age", 12], ["f", "k", "e"], ["hello", true]])