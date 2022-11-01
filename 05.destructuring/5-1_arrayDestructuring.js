/*
    ***** Array Destructuring *****
    잘 사용하지는 않는다.
    기본적으로 array destructuring은 가져온 정보를 조작하지 않을 때 쓰기 좋다.

    예를들어 API로 부터 응답받은 데이터가 있다고 가정하고
    그 데이터를 array 로 만들어야 될때 정도면 쓰기 좋을것 같다.

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] 

    만약 0-2번째 인덱스것을 가져와서 찍어보려고하면
    이런식으로 해야할것이다.

    const mon = days[0];
    const tue = days[1];
    const wed = days[2];
    console.log(mon,tue,wed)

    그렇기 때문에 destructuring을 할것이다
    object랑 비슷하다.

    하지만 중괄호를 쓰는 대신에 [] 대괄호를 쓸것이다
    array는 object와 달리 key : value형태가아닌 포지션 값만 있다 (인덱스)
    이전영상을 예로 들면 notifications안에 follow, color, theme같이 Keyr값이 있었다.
    그래서 notifications.follow처럼 경로를 지정할 수 잇었다 { notifications : { follow } } = settings

    하지만 여기는 인덱스밖에 없다.

    const [ mon, tue ] = days; 인덱스 순서에 따라서 가져올 수 있으며 기존 배열은 바뀌지 않는다.
    mon 이라는 변수에 days[0] 값이 들어가서 변수로 사용할 수 있는것 뿐\

    console.log(days);
    console.log(mon, tue)

    ** array의 default value

    const bonmi = ["bibi", "leejs", "minu"]
    const [ bibi, js, minu, newMember = "kkamzzu" ] = bonmi
    console.log(newMember)

    만약 4번째에 값이 없으면 설정해주는것은 이런식으로 해주면 된다.
    보다시피 원본데이터는 요소가 세개밖에 없는데 나는 네번째 요소를 호출한것이고
    거기에 대한 기본값을 선언한것.

    **** function의 destructuring

    const date = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] 
    const [ fMon, fTue ] = date();

    만약 day를 반환하는 함수가 있다고 가정을하면 이렇게도 풀어낼 수 있다
    이것도 마찬가지로 array destructuring이라고 볼 수 있다.
    만약 object를 반환하는 함수가 있어도 마찬가지로 가능

*/
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] 

const [ mon, tue ] = days;

console.log(days);
console.log(mon, tue)

const bonmi = ["bibi", "leejs", "minu"]
const [ bibi, js, minu, newMember = "kkamzzu" ] = bonmi
console.log(newMember)

const date = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] 
const [ fMon, fTue ] = date();