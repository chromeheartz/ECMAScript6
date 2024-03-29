/*

  ***** Array sort *****

  Array sort
  배열을 정렬해주는 기능을한다.

  const fruits = ["a", "c", "b"]
  console.log(fruits.sort())
  기본적으로 sort를 하면 순서대로 잘 나온다.

  하지만 가끔 순서가 기존과 다를 때가 있다.
  자신만의 순서를 가지고 있을 경우. 그럴때 자신만의 비교함수를 만들어서 정렬을해야하는데
  배열은 어떻게 정렬할까

  배열은 안에 Object를 가지고 있어 정렬이 어렵다

  const fruits = ["apple", "strawberry", "suica"]
  비교함수를 만들어볼것이다.
  비교함수에서 Syntax를 찾아보면 Parameter로 첫번째요소와 두번째 요소를 쓰라고한다.
  이게 무슨뜻이냐면 fruitA, fruitB 이렇게 두개의 Parameter를 받는다는 소리.

  compareFunction(a,b)에서
  a가 b보다 작으면 -1, a가 b보다 크면 1, 같으면 0
  물론 -1, 1이아니라 -20이라던지 100이 될 수 있다.
  일단 우리가 해보고싶은것은 길이를 보고 비교하는것.

  const sortFruitByLength = (fruitA, fruitB) => {
    return fruitA.length - fruitB.length
  }

  현재 apple은 5글자 strawberry는 10글자
  5 - 10 = -5 음수가 나옴.
  strawberry - avocado = 3 양수가나옴. 
  이런원리로 정렬해볼것이다.

  이제 sort함수에 넣어준다.
  fruits.sort(sortFruitByLength)
  (3) ['apple', 'avocado', 'strawberry']
  이런식으로 정렬이 된다.
  조건을 return fruitB.length - fruitA.length하면 반대로 출력

  어떤식으로 돌아가는지를 알고싶다면 함수안에
  console.log(fruitA, fruitB)를 찍어보면 비교하는 순서대로 콘솔에 나오게된다.

  ** 더 많은 Object들이 있을때의 유용한 사용법

  const people = [
    {
      name : "bibi",
      age : 12
    },
    {
      name : "kkamzzu",
      age : 14
    },
    {
      name : "jongseo",
      age : 10
    }
  ]

  이런 객체가 있다고 가정하고 비교함수를 만듬.
  const orderPeopleByAge = (personA, personB) => {...}
  여기서 제일 중요한것은
  비교함수는 * 무조건 무엇이라도 반환해야한다 *

  return personA.age - personB.age
  를 조건으로 걸어주고 콘솔에서 sort함수에 적용해보면
  age가 낮은순서대로 잘 정렬이 된다는것을 알 수 있다.

  ** 정리

  배열을 정렬하는 방법을 배웠으니 내가 원하는 기준을 만들어서 정렬할 수 있을것이다
  sort()는 배열값을 변화시킨다.
  몇몇은 배열을 바꾸지만 몇몇은 바꾸지 않는것이 javascript에서 조금 신경써야할 부분이 아닌가 싶다.

*/

// basic 
const basicSort = ["a", "c", "b"]
console.log(basicSort.sort())

// sort
const fruits = ["apple", "strawberry", "avocado"]

const sortFruitByLength = (fruitA, fruitB) => {
  return fruitA.length - fruitB.length
}
console.log(fruits.sort(sortFruitByLength))

// use case
const people = [
  {
    name : "bibi",
    age : 12
  },
  {
    name : "kkamzzu",
    age : 14
  },
  {
    name : "jongseo",
    age : 10
  }
]

const orderPeopleByAge = (personA, personB) => {
  return personA.age - personB.age
}
console.log(people)
people.sort(orderPeopleByAge)
console.log(people)