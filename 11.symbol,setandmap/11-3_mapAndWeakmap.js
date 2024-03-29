/*

  ***** map weak map *****

  map에서는 key value를 가지고 있기 때문에 조금 다르다.
  마치 Key values 저장소와 같은 느낌.
  콘솔에 map을 찍어보면 api가 나오지만 보다시피 add가 없다
  set을 가지고 있다. 
  set은 두개의 argument를 준다. key value.
  key에는 우리가 할 수 있는 무언가를 넣는것. age같이.
  value에도 값을 넣어줘보자.

  const map = new Map();
  map.set("age", 18)
  console.log(map)
  Map(1) {'age' => 18}

  map은 Object를 참조하고 있다. 이들은 entries다.
  이제 값을 넣는 대신에 이름을 줄 수 있다. 이것은 유용함.
  entries를 가지고 하게되면 iterator를 가지게 되고, entries를 갖게됨.
  map.entries()
  MapIterator {'age' => 18} 출력값

  만약 내가 무언가 하려고한다면, 
  map.has("age")하면 true가 나옴.
  value로도 할 수 있다.
  map.get("age") 하면 value를 얻을 수 있음.
  
  ** 내가 object를 갖길 원하고 멋진 API를 사용하길 원한다면 유효하다. 딱 좋음.

  또한 weak map도 존재한다.
  weak map은 map.has("age")의 age에 string을 넣는대신
  object를 넣어야한다.
  
  weak set과 마찬가지고 object가 참조되지않는다면 삭제될것이다.

  ** 정리

  보통 set을 사용하고 map은 잘 사용하지 않는다.
  하지만 내가 만약에 key value storage를 사용하고 싶다면 유용할것이다.
  만약 map.set("age", 118181)를 하면 덮어씌워질것이다.
  이 경우엔 오직 Unique value나 어떤것만이 허가되는것이 아니다.
  unique하지만 protected하지는 않다.

*/

const map = new Map();
map.set("age", 18)
console.log(map.has("age"))
console.log(map.get("age"))