/*
    ***** default values *****
    
    Es6에서 추가된 새로운것은
    Default value 기본값이다.

    많은 사람들이 필요했던것이다. 시간을 줄여주기때문에.

    기본값은 arrow function뿐만 아니라 일반 함수에도 적용할 수 있다.
    sayHi 라는 함수를 만들어 argument를 받고 hello + name을 return 해보겠다.

    function sayHi(aName){
        return "Hello " + aName;
    }
    console.log(sayHi('bibi'));
    라고 하게되면 hello bibi 라고 잘 출력이되지만
    user가 자기 이름을 입력안하면 어떻게 될까.

    console.log(sayHi()); 를 하게되면
    hello undefined가 출력되게된다.

    return "Hello " + (aName || "anon"); 
    이런식으로 표현할 수도 있다. 앞의것이 없다면 뒤의것을 가져오도록

    하지만 저렇게 보여지는것을 default value를 이용해서 만들어볼것이다.
    함수의 시작부분에
    function sayHi(aName = "anon"){...} 이런식으로 
    argument에 넣어주게 된다면 
    만약값을 넣지 않는다면 aName 은 anon을 사용하게 될것이다.
    
    마찬가지로 arrow function으로 쓰게되면 더 보기 좋아진다
    function sayHi = (aName = "anon") => "hello " + aName;

    default value는 무엇이든 될수있다.
    예를들어 anon 대신에 
    const DEFAULT = "lalala";
    function sayHi = (aName = DEFAULT) => "hello " + aName;
    라는 식으로 변수로 만들수도 있고,

    array나 object로도 만들 수 있다.
*/
    function sayHi(aName = "anon"){
        return "Hello " + aName;
    }
    console.log(sayHi('bibi'));