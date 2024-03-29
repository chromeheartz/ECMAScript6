/*
    ***** arrow function *****
    
    arrow function은 자바스크립트에서 함수의 모습을 개선한것이다.
    var처럼 let과 const가 대체되는것은 아니고 보기좋게 만든것.

    기존 function을 만들려면
    function nameOf(arg){

    }
    이런식으로 만들거나, 이름을 빼고 익명함수 혹은
    const hello = function(arg){...}
    처럼 상수 안에 넣을 수 있었다.

    arrow function은 기본적으로 => 의 형태이다.
    좀 더 코드를 보기 쉽게 만든것.

    ***** map() *****
    map은 function을 줄것이다 그리고 모든 item들을 가져와서
    function을 실행시켜줄것이다.

    map이 하는 일은 각각의 아이템마다 함수를 호출하는 일을 한다.

    const names = ['bibi', 'kkamzzu', 'barnes'];
    const heartz = names.map(function(item){
        return item + "🤍";
    });

    map은 함수를 호출하고 각각의 item들을 인자로 넣어줌.
    잊지말아야하는것이 여기서 map은 어떤것을 return해야한다.
    return값을 새로운 array로 만듬.
    0 로 하든 어쨌든 새로운 array로 만듬.

    const heartz = names.map((item, index) => {
    })
    
    map function의 두번째 argument는 index 이다.
    argument가 하나라면 (item)이 아닌 item => 로 적어주어도 됨.

    ***** implicit return *****

    arrow function은 기능이 향상되었다.
    주로 function을 다루다보면 어떤것에 적용을 시키는데
    그것은 주로 복잡한 내용을 가지고 있지는 않다.
    표현식 할줄만 있을때라고 가정하면 return을 쓰거나
    {}를 쓰기에는좀 과한것같다.

    그래서 이경우 arrow function은 implict return을 한다.

    const heartz = names.map(item => item + "🤍");
    이런식으로 된다. 이것은  item이라는 argument를 가진것을
    리턴하는 함수이다.
    괄호를 지우고 세미콜론, return function을 지우고
    가장 중요한 부분만남김

    implicit return 의 뜻은 같은 줄에 뭘 적던지 간에
    return 된다는 의미.

    *** 괄호를 추가하는 순간 implicit return은사라짐
    내용이 있고 함수가 좀 복잡해지면 function의 body를 만들게 되고 
    괄호가 추가되니 implicit return  기능이 사라지게된다.
*/
/*
    const names = ['bibi', 'kkamzzu', 'barnes'];
    function addHeart(item) {
        return item + "🤍";
    }
    const heartz = names.map(addHeart);

    요즘은 다른 함수를 만들어 넣지않는다.
    혼란을 줄 때가 있기 때문에 바로 적기를 원한다.
    거기서 arrow function이 개선되서 나오게 된것이다.
*/

    const names = ['bibi', 'kkamzzu', 'barnes'];
    const heartz = names.map(item => item + "🤍");
    console.log(heartz);