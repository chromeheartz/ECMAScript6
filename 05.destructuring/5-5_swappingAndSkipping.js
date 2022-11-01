/*
    ***** swapping & skipping *****
    
    1. variable swapping
    예를들면 여기 변수가 있는데 let 이여야한다.

    let mon = "Sat"
    let sat = "Mon";
    이런식으로 누군가가 변수를 바꾸어 잘못 넣어놓았다고 가정해보자

    어떻게 하냐면 감사하게도 array destructuring을 이용해서 이런식으로 할 수 있다.
    [ sat, mon ] = [ mon, sat]
    두번째 배열의 앞의 mon 의 변수의 값이 사실은 "Sat"일거싱고
    sat의 값은 "Mon"일것이다. 잘못된 변수들을 이용해서 array를 만든것이다.
    그리고 나서 array destructuring을 올바른 변수와함께 할것이다
    첫번째 array에 넣어주는것

    이것이 swapping이다.

    ** array를 만드는데 처음에는 바꾸고 싶은 변수들을 가지고 array를 만들고
    그 다음, (destructuring을 통해) 변수들을 오픈해서 각 변수가 담고있는 내용을 업데이트 해주는것이다.
    결국
    [ sat, mon ] = [ "Sat", "Mon"]과 같이 되는것이다
    이런 구조라 let을 쓴것이다 (overwrite가 가능하도록)

    2. omitting && skipping
    array에서 특정값을 omitting(생략하는)방법.

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
    이렇게 금요일까지의 요일 데이터가있다.
    네번째 것을 가지고오고 싶다면
    const [ mon,tue, ~~~ ] = days 이렇게 다썼을텐데

    const [ ,,, thu, fri ] = days 이런식으로하면
    지금 이 array에는 다섯개의 element가 있는데 콤마로 채워주고 
    가져올값부터 변수명을 쓰는것이다.


*/

// variable swapping
let mon = "Sat"
let sat = "Mon";
[ sat, mon ] = [ mon, sat]

// variable skipping
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const [ ,,, thu, fri ]  = days;
console.log(thu, fri)