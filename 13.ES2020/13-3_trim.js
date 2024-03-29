 /*

  ***** trimStart / trimEnd *****

  trimStart는 기본적으로 그냥 자르는 기능이다.
  문장 앞에 비어있는 공간을 다 잘라주는 역할.

  trimEnd는 반대로 뒤에 비어있는공간을 잘라줌.

  이건 form같은 형식에 쓸때 유용하다.
  사람들이 이런식으로 입력할때에
  "       bibi bucky  barnes .     "
  trimStart로 앞 공백을 빼주는데 반환값도 String이니까 trimEnd를 쓸 수 있다.

  "       bibi bucky  barnes .     ".trimStart().trimEnd()
  조금 더 보기좋게 데이터가 나올것이다. 당연히 이걸로는 사이의 공백을 없애지 못한다.

  또한 trim도 써줄수 있는데, 양쪽을 없애준다.
  앞쪽만 없애주고싶을때, 뒷부분만 없애주고싶을때 각각 trimStart, trimEnd를 사용 

  * trim도 string자체를 바꾸지는 않는다.
  결과를 반환하는것이지 값을 바꿔주는것은아님.

*/

// basic
console.log("         hello.".trimStart()) 
console.log("hello.         ".trimEnd()) 

console.log("       bibi bucky  barnes .     ".trimStart().trimEnd())