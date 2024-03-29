 /*
    ***** Temporal dead zone *****

    이것은 let과 같이 소개되는 개념이다
    temporal dead zone 이 없었을때에는

    var myName = "bibi";
    console.log(myName);

    아마 refresh하면 bibi 라고 잘 뜰것이다.
    하지만 자리를 바꾸게 되면 undefined가 나옴.
    이론상으로는 없는것을 콘솔에 찍어보려고 한 것.
    자바스크립트는 위에서부터 아래로 코드를 실행하기때문.

    그냥 console로 찍으면erro가 나는데 이유는
    자바스크립트가 여기서 hoisting이란것을 하기 때문
    hoisting은 자바스크립트가 프로그램을 실행하기전에 이것들을 어디로 이동시킨다는것이다.
    var들을 제일 위로 올려주는 변수들이 미리 끌어올려진다는것이 hoisting
    내부에서는 console에 찍인 myName을 보고

    var myName;
    console.log(myName);    
    var myName = "bibi";

    이런식으로 하게된다.

    이것은 좋지 않다 error가 나야하기 때문.
    만약 let으로 하게 된다면 정의되지 않았다고 나오게된다.
    자바스크립트는 hoist하지 않게되고 그 말은 변수가 끌어올려지지 않는다는것.

    이것이 let의 temporal dead zone이다.
*/
    var myName = "bibi";
    console.log(myName);